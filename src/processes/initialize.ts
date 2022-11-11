import { execSync } from 'child_process';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { copySync, moveSync } from 'fs-extra';
import { join } from 'path';
import {
  PACKAGE_FILES_TO_ROOT_MOVE_DIR,
  PROJECT_DEMO_DIR,
  PROJECT_DEMO_TEMPLATE_DIR,
} from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { getIsSelfInit } from '../utils/getIsSelfInit';
import { getPackagePaths } from '../utils/getPackagePaths';
import { logError, logProgress, logSuccess } from '../utils/logger';

const {
  packageRootPath,
  packageTemplatePath,
  packageTemplateDistPath,
  packageTemplateNodeModulesPath,
} = getPackagePaths();
const { projectRootPath, projectDemoPath, projectDemoTemplatePath } =
  getConsumerProjectPaths();

export const initialize = () => {
  /* When the user ran CLI with no option - general initialization/reinitialization flow. */
  if (existsSync(projectRootPath) && existsSync(packageRootPath)) {
    const isFirstInitialization = !existsSync(projectDemoPath);
    logProgress(`Demo ${!isFirstInitialization ? 're' : ''}initialization...`);

    /* Create demo root directory when is the first initialization. */
    if (isFirstInitialization) {
      mkdirSync(projectDemoPath);
    }

    /* Create or recreate directory with template in the consumer demo project. */
    rmSync(projectDemoTemplatePath, { recursive: true, force: true });
    if (!getIsSelfInit()) {
      rmSync(packageTemplateDistPath, { recursive: true, force: true });
      rmSync(packageTemplateNodeModulesPath, { recursive: true, force: true });
    }

    /* Copy all template files to the consumer demo project and move necessary files to the demo root. */
    copySync(packageTemplatePath, projectDemoTemplatePath);
    const filesToRootCopyPath = join(
      projectDemoTemplatePath,
      PACKAGE_FILES_TO_ROOT_MOVE_DIR,
    );
    const filesToRootCopy = readdirSync(filesToRootCopyPath);
    filesToRootCopy.forEach((file) => {
      const projectDemoFilePath = join(projectDemoPath, file);
      if (existsSync(projectDemoFilePath)) {
        rmSync(projectDemoFilePath, { recursive: true, force: true });
      }

      moveSync(
        join(projectDemoTemplatePath, PACKAGE_FILES_TO_ROOT_MOVE_DIR, file),
        join(projectDemoFilePath),
      );
    });
    rmSync(filesToRootCopyPath, { recursive: true, force: true });

    /*  */

    /* Install demo modules */
    execSync(`cd ${PROJECT_DEMO_DIR}/${PROJECT_DEMO_TEMPLATE_DIR} && npm i`);

    logSuccess(
      `Demo has been ${!isFirstInitialization ? 're' : ''}initialized!`,
    );
    process.exit(0);
  }

  logError('Demo initialization failed!');
  process.exit(1);
};
