export type ConsumerDemoScripts = Record<string, string>;

export const PACKAGE_FILES_TO_ROOT_MOVE_DIR = 'filesToRootMove';

export const PROJECT_DEMO_DIR = 'demo';
export const PROJECT_DEMO_TEMPLATE_DIR = '__template';

export const consumerDemoScripts: ConsumerDemoScripts = {
  'demo:start': `cd ${PROJECT_DEMO_DIR}/${PROJECT_DEMO_TEMPLATE_DIR} && npm run start`,
  'demo:build': `cd ${PROJECT_DEMO_DIR}/${PROJECT_DEMO_TEMPLATE_DIR} && npm run build`,
  'demo:gh-pages-deploy': `cd ${PROJECT_DEMO_DIR}/${PROJECT_DEMO_TEMPLATE_DIR} && npm run build && npm run deploy`,
};
