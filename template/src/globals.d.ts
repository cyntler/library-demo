import { ReactNode } from 'react';

declare global {
  interface DemoData {
    name?: string;
    githubLink?: string;
    examples?: Array<{
      label: string;
      description: string;
      element: ReactNode;
    }>;
  }
}
