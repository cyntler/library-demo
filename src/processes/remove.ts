import { existsSync, rmSync } from 'fs';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { logError, logProgress, logSuccess } from '../utils/logger';

const { projectDemoPath } = getConsumerProjectPaths();

export const remove = () => {
  if (existsSync(projectDemoPath)) {
    logProgress('Demo removing...');
    rmSync(projectDemoPath, { recursive: true, force: true });

    logSuccess('Demo has been removed!');
    process.exit(0);
  }

  logError('Demo removing failed! Demo has not been initialized before.');
  process.exit(1);
};
