// This module should only be used in "use client" components.

const AUTH_VALIDATED_FLAG_KEY = 'authValidatedThisSession';

export function setAuthValidatedClient(isValidated: boolean): void {
  if (typeof window !== 'undefined') { // Ensure localStorage is available
    if (isValidated) {
      localStorage.setItem(AUTH_VALIDATED_FLAG_KEY, 'true');
    } else {
      localStorage.removeItem(AUTH_VALIDATED_FLAG_KEY);
    }
  }
}

export function hasAuthBeenValidatedClient(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_VALIDATED_FLAG_KEY) === 'true';
  }
  return false; // Default to false if localStorage not available (e.g., SSR pre-hydration)
}