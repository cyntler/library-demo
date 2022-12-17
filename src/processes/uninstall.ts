import { existsSync, rmSync } from 'fs';
import { consumerDemoScripts } from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { logError, logProgress, logSuccess } from '../utils/logger';
import { removeScriptsFromPackageJson } from '../utils/packageJsonManipulate';

const { projectDemoPath } = getConsumerProjectPaths();

export const uninstall = () => {
  if (existsSync(projectDemoPath)) {
    logProgress('Demo uninstalling...');

    rmSync(projectDemoPath, { recursive: true, force: true });
    removeScriptsFromPackageJson(consumerDemoScripts);

    logSuccess('Demo has been uninstalled!');
    return true;
  }

  logError('Demo uninstalling failed! Demo has not been initialized before.');
};
