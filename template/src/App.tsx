import { FC } from 'react';
import data from './defaultData';

export const App: FC = () => (
  <main className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <div className="flex items-center justify-between">{data.name}</div>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener"
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                Check the code on GitHub
              </a>
            </div>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.examples.map(({ label, description, element }) => (
            <div key={label} className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
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
