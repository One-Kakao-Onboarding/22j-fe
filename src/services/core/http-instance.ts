/* eslint-disable @typescript-eslint/no-explicit-any */

import { z } from 'zod';
import axios, { type AxiosRequestConfig } from 'axios';
import { silentParse } from '@/services/core/silent-parse';
import { CustomError } from '@/services/core/custom-error';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestInitWithSchema<T extends z.ZodTypeAny>
  extends AxiosRequestConfig {
  schema?: T;
}

const getApiResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z
    .object({
      success: z.literal(true),
      code: z.number(),
      data: schema,
      message: z.string().nullable(),
      requestId: z.string().nullable(),
    })
    .strict();

export const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

class Instance {
    private readonly baseUrl: string;
    constructor(baseUrl: string = BASE_URL) {
      this.baseUrl = baseUrl;
    }
    
    getBaseUrl(): string {
      return this.baseUrl;
    }

  // 기본 요청 함수
  async fetchWithConfig<T extends z.ZodTypeAny>(
    url: string,
    method: HttpMethod,
    body?: any,
    options: RequestInitWithSchema<T> = {},
  ) {
    const { schema, ...pureOptions } = options;
    const config: AxiosRequestConfig = {
      method,
      ...options,
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...pureOptions?.headers,
      },
      ...(body && { data: body, ...pureOptions }),
    };

    const res = await axios(new URL(url, this.baseUrl).toString(), config);

    const showToast = schema !== undefined && method === 'GET';
    const responseSchema = schema
      ? getApiResponseSchema(schema)
      : getApiResponseSchema(z.object({}));

    const parsedData: z.infer<typeof responseSchema> = silentParse(
      responseSchema,
      res.data,
      { showToast },
    );

    if (!parsedData.success) {
      console.error(parsedData.code.toString() + ' ' + parsedData.message);
      throw new CustomError(
        parsedData.code.toString(),
        parsedData.message ?? '',
      );
    }

    return parsedData;
  }

  async fetchWithRetry<T extends z.ZodTypeAny>(
    url: string,
    method: HttpMethod,
    body?: any,
    options: RequestInitWithSchema<T> = {},
  ) {
    const fetchOperation = () =>
      this.fetchWithConfig<T>(url, method, body, options);
    return await fetchOperation();
  }


  async get<T extends z.ZodTypeAny>(
    url: string,
    options?: RequestInitWithSchema<T>,
  ) {
    return this.fetchWithRetry<T>(url, 'GET', undefined, options);
  }
  async delete<T extends z.ZodTypeAny>(
    url: string,
    options?: RequestInitWithSchema<T>,
  ) {
    return await this.fetchWithRetry<T>(url, 'DELETE', undefined, options);
  }
  async post<T extends z.ZodTypeAny>(
    url: string,
    body: any,
    options?: RequestInitWithSchema<T>,
  ) {
    return await this.fetchWithRetry<T>(url, 'POST', body, options);
  }
  async put<T extends z.ZodTypeAny>(
    url: string,
    body: any,
    options?: RequestInitWithSchema<T>,
  ) {
    return await this.fetchWithRetry<T>(url, 'PUT', body, options);
  }
  async patch<T extends z.ZodTypeAny>(
    url: string,
    body: any,
    options?: RequestInitWithSchema<T>,
  ) {
    return await this.fetchWithRetry<T>(url, 'PATCH', body, options);
  }
}

export const instance = new Instance();