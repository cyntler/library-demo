import { ConsumerDemoScripts } from './models';

export const consumerDemoScripts: ConsumerDemoScripts = {
  'demo:start': 'cd demo && npm run start',
  'demo:build': 'cd demo && npm run start',
  'demo:gh-pages-deploy': 'cd demo && npm run build && npm run deploy',
};
