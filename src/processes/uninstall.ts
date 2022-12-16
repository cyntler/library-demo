import { existsSync, rmSync } from 'fs';
import { consumerDemoScripts } from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { logError, logProgress, logSuccess } from '../utils/logger';
import { removeScriptsFromPackageJson } from '../utils/packageJsonManipulate';

const { projectDemoPath } = getConsumerProjectPaths();

export const uninstall = () => {
  if (existsSync(projectDemoPath)) {
    logProgress('Demo removing...');
    rmSync(projectDemoPath, { recursive: true, force: true });
    removeScriptsFromPackageJson(consumerDemoScripts);

    logSuccess('Demo has been removed!');
    process.exit(0);
  }

  logError('Demo removing failed! Demo has not been initialized before.');
  process.exit(1);
};
