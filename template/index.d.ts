import { ReactNode } from 'react';

declare global {
  type DemoDataType = {
    name?: string;
    githubLink?: string;
    examples?: Array<{
      label: string;
      description: string;
      element: ReactNode;
    }>;
  };
}
