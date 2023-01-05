import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { consumerDemoScripts } from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { logError, logProgress, logSuccess } from '../utils/logger';
import { removeScriptsFromPackageJson } from '../utils/packageJsonManipulate';

const { projectDemoPath, projectRootPath } = getConsumerProjectPaths();

export const uninstall = () => {
  if (existsSync(projectDemoPath)) {
    logProgress('Demo uninstalling...');

    rmSync(projectDemoPath, { recursive: true, force: true });
    execSync('npm rm @cyntler/library-demo@latest gh-pages', {
      cwd: projectRootPath,
    });
    removeScriptsFromPackageJson(consumerDemoScripts);

    logSuccess('Demo has been uninstalled!');
    return true;
  }

  logError('Demo uninstalling failed! Demo has not been initialized before.');
};
