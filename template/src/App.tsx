import { FC } from 'react';
import {
  CodeBracketIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/solid';

import data from '../dataExport';
const { name, githubLink, examples } = data();

export const App: FC = () => (
  <main className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div className="flex items-center justify-between font-medium">
            {name}
          </div>
          <div className="flex items-center text-base leading-5">
            <a
              href={githubLink ?? '#'}
              target="_blank"
              rel="noopener"
              className="p-2 font-medium text-gray-900 dark:text-gray-100 sm:p-4 flex items-center"
            >
              <CodeBracketIcon className="h-6 w-6 text-gray-900 mr-2" />
              Source Code
            </a>
            <a
              href={githubLink ? `${githubLink}/fork` : '#'}
              target="_blank"
              rel="noopener"
              className="p-2 font-medium text-gray-900 dark:text-gray-100 sm:p-4 flex items-center"
            >
              <ArrowUturnRightIcon className="h-6 w-6 text-gray-900 mr-2" />
              Fork
            </a>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {examples &&
            Boolean(examples.length) &&
            examples.map(({ label, description, element }) => (
              <div key={label} className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h2 className="font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                  {label}
                </h2>
                {description && (
                  <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                )}
                {element}
              </div>
            ))}
        </div>
      </div>
    </div>
  </main>
);
