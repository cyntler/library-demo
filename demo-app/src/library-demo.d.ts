/// <reference types="vite/client" />

declare module '*.csv' {
  const src: string;
  export default src;
}

declare type DemoSchema = {
  name?: string;
  githubLink?: string;
  examples?: Array<{
    label: string;
    description: string;
    element: ReactNode;
  }>;
};
