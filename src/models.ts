export type ConsumerDemoScripts = Record<string, string>;

export const PROJECT_DEMO_DIR = '.demo';

export const consumerDemoScripts: ConsumerDemoScripts = {
  'demo:start': 'library-demo start',
  'demo:build': `library-demo build --public-path=$PUBLIC_PATH`,
  'demo:deploy': `npm run demo:build && gh-pages ${PROJECT_DEMO_DIR}/dist`,
};
