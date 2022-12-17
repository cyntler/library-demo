import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { moveSync } from 'fs-extra';
import { join } from 'path';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { getPackagePaths } from '../utils/getPackagePaths';
import { logError } from '../utils/logger';
import { replaceDemoSchemaImportPath } from '../utils/replaceDemoSchemaImportPath';

const { projectDemoPath } = getConsumerProjectPaths();
const { packageAppPath } = getPackagePaths();

export const build = () => {
  if (existsSync(projectDemoPath)) {
    replaceDemoSchemaImportPath();
    execSync('npm run build', {
      cwd: packageAppPath,
      stdio: 'inherit',
    });
    moveSync(join(packageAppPath, 'dist'), join(projectDemoPath, 'dist'));

    return true;
  }

  logError('Demo building failed! Demo has not been initialized before.');
};
