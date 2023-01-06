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

export const build = (argv: string[]) => {
  if (existsSync(projectDemoPath)) {
    replaceDemoSchemaImportPath();

    let base = '/';
    const publicPath = argv.find((val) => val.includes('--public-path'));
    if (publicPath) {
      base = publicPath.split('=')[1];
    }

    execSync(`npm run build -- --base ${base}`, {
      cwd: packageAppPath,
      stdio: 'inherit',
    });
    moveSync(join(packageAppPath, 'dist'), join(projectDemoPath, 'dist'));

    return true;
  }

  logError('Demo building failed! Demo has not been initialized before.');
};
