import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { getPackagePaths } from '../utils/getPackagePaths';
import { logError } from '../utils/logger';
import { replaceDemoSchemaImportPath } from '../utils/replaceDemoSchemaImportPath';

const { projectDemoPath } = getConsumerProjectPaths();
const { packageAppPath } = getPackagePaths();

export const start = () => {
  if (existsSync(projectDemoPath)) {
    replaceDemoSchemaImportPath();
    execSync('npm run start', {
      cwd: packageAppPath,
      stdio: 'inherit',
    });

    return true;
  }

  logError('Demo starting failed! Demo has not been initialized before.');
};
