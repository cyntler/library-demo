import findProjectRoot from 'find-project-root';
import { join } from 'path';
import { cwd } from 'process';
import { PROJECT_DEMO_DIR, PROJECT_DEMO_TEMPLATE_DIR } from '../models';

export const getConsumerProjectPaths = () => {
  const projectRootPath = findProjectRoot(cwd()) || '';
  const projectPackageJsonPath = join(projectRootPath, 'package.json');
  const projectDemoPath = join(projectRootPath, PROJECT_DEMO_DIR);
  const projectDemoTemplatePath = join(
    projectDemoPath,
    PROJECT_DEMO_TEMPLATE_DIR,
  );
  const projectDemoTemplateTsConfigPath = join(
    projectDemoPath,
    PROJECT_DEMO_TEMPLATE_DIR,
    'tsconfig.json',
  );

  return {
    projectRootPath,
    projectPackageJsonPath,
    projectDemoPath,
    projectDemoTemplatePath,
    projectDemoTemplateTsConfigPath,
  };
};
