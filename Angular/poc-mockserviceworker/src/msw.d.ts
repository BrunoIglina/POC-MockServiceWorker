declare module 'msw' {
    export function setupWorker(...handlers: any[]): any;
  }
  
  declare module './mocks/browser' {
    export const worker: any;
  }
  