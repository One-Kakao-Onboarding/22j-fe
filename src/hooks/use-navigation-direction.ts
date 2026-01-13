import { createContext, useContext } from "react";

export type NavigationDirection = 'forward' | 'backward'

export const NavigationDirectionContext = createContext<NavigationDirection>('forward')

export function useNavigationDirection() {
    return useContext(NavigationDirectionContext)
}