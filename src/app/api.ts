import { InjectionToken } from '@angular/core';

export const API_URL = 'https://jsonplaceholder.typicode.com';
export const API_URL_DI_TOKEN = new InjectionToken<string>('API_URL');