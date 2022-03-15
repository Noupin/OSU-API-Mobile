//Third Party Imports
import { createRef } from "react";


export const navigationRef = createRef<any>();
export function navigate(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

export const settingsNavigationRef = createRef<any>();
export function settingsNavigate(name: string, params?: any) {
    settingsNavigationRef.current?.navigate(name, params);
}

export const homeNavigationRef = createRef<any>();
export function homeNavigate(name: string, params?: any) {
    homeNavigationRef.current?.navigate(name, params);
}
