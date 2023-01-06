import { execSync } from 'child_process';
import { existsSync, readdirSync, renameSync } from 'fs';
import { copySync } from 'fs-extra';
import { join } from 'path';
import { consumerDemoScripts } from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { getPackagePaths } from '../utils/getPackagePaths';
import { logError, logProgress, logSuccess } from '../utils/logger';
import { addScriptsToPackageJson } from '../utils/packageJsonManipulate';

const { packageAppPath, packageTemplatePath } = getPackagePaths();
const { projectRootPath, projectPackageJsonPath, projectDemoPath } =
  getConsumerProjectPaths();

export const initialize = () => {
  if (existsSync(projectRootPath) && existsSync(projectPackageJsonPath)) {
    const isInitialized = existsSync(projectDemoPath);

    if (isInitialized) {
      logError('Demo has been initialized!');
      return false;
    }

    logProgress(`Demo initialization...`);

    execSync('npm i -D @cyntler/library-demo@latest gh-pages', {
      cwd: projectRootPath,
    });

    copySync(packageTemplatePath, projectDemoPath);
    const templateFiles = readdirSync(projectDemoPath);
    for (const file of templateFiles) {
      renameSync(
        join(projectDemoPath, file),
        join(projectDemoPath, file.replace('.txt', '')),
      );
    }

    addScriptsToPackageJson(consumerDemoScripts);
    execSync('npm i', {
      cwd: packageAppPath,
      stdio: [],
    });

    logSuccess(`Demo has been initialized!`);
    return true;
  }

  logError('Demo initialization failed!');
};
