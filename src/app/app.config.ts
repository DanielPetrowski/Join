import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

/**
 * Angular Application Configuration
 * 
 * Central configuration for the entire Angular application. Initializes Firebase backend,
 * configures routing, and sets up change detection strategy. This config is passed to the
 * bootstrapApplication() function during application startup.
 * 
 * Configuration Includes:
 * - Firebase initialization with project credentials
 * - Authentication (Auth) provider
 * - Firestore database provider
 * - Application routing with lazy-loaded routes
 * - Global error listening for unhandled errors
 * - Zoneless change detection for optimal performance
 * 
 * Firebase Project: join-db-ee5a8
 * 
 * @constant
 * @type {ApplicationConfig}
 * 
 * @example
 * // Used in main.ts
 * bootstrapApplication(App, appConfig)
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "join-91649",
        appId: "1:836937892141:web:d62558bf6a20e9133e13a4",
        storageBucket: "join-91649.firebasestorage.app",
        apiKey: "AIzaSyDs_K8n7CINAWm_G0dZ7fco2lGMD5d-vMY",
        authDomain: "join-91649.firebaseapp.com",
        messagingSenderId: "836937892141",
      })
    ),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
};

  // apiKey: "AIzaSyDs_K8n7CINAWm_G0dZ7fco2lGMD5d-vMY",
  // authDomain: "join-91649.firebaseapp.com",
  // projectId: "join-91649",
  // storageBucket: "join-91649.firebasestorage.app",
  // messagingSenderId: "836937892141",
  // appId: "1:836937892141:web:d62558bf6a20e9133e13a4"