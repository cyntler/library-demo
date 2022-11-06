import { join } from 'path';
import { getConsumerProjectPaths } from './getConsumerProjectPaths';
import { getIsSelfInit } from './getIsSelfInit';

const { projectRootPath } = getConsumerProjectPaths();

export const getPackagePaths = () => {
  const packageRootPath = getIsSelfInit()
    ? projectRootPath
    : join(projectRootPath, 'node_modules', '@cyntler/library-demo');
  const packageTemplatePath = join(packageRootPath, 'template');
  const packageTemplateDistPath = join(packageTemplatePath, 'dist');
  const packageTemplateNodeModulesPath = join(
    packageTemplatePath,
    'node_modules',
  );

  return {
    packageRootPath,
    packageTemplatePath,
    packageTemplateDistPath,
    packageTemplateNodeModulesPath,
  };
};
