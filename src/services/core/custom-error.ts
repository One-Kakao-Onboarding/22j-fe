export class CustomError extends Error {
    constructor(
      errorCode: string,
      message: string,
    ) {
      super(errorCode + ' ' + message);
      this.name = 'CustomError';
    }
  }