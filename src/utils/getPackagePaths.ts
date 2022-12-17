import { join } from 'path';
import { getConsumerProjectPaths } from './getConsumerProjectPaths';

const { projectRootPath } = getConsumerProjectPaths();

export const getPackagePaths = () => {
  const packageRootPath = join(
    projectRootPath,
    'node_modules',
    '@cyntler/library-demo',
  );
  const packageAppPath = join(packageRootPath, 'demo-app');
  const packageTemplatePath = join(packageRootPath, 'demo-template');

  return {
    packageRootPath,
    packageAppPath,
    packageTemplatePath,
  };
};
