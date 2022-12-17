import findProjectRoot from 'find-project-root';
import { join } from 'path';
import { cwd } from 'process';
import { PROJECT_DEMO_DIR } from '../models';

export const getConsumerProjectPaths = () => {
  const projectRootPath = findProjectRoot(cwd()) || '';
  const projectPackageJsonPath = join(projectRootPath, 'package.json');
  const projectDemoPath = join(projectRootPath, PROJECT_DEMO_DIR);

  return {
    projectRootPath,
    projectPackageJsonPath,
    projectDemoPath,
  };
};
