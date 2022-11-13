import { ReactNode } from 'react';

export interface DemoData {
  name?: string;
  githubLink?: string;
  examples?: Array<{
    label: string;
    description: string;
    element: ReactNode;
  }>;
}
