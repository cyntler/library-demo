import { execSync } from 'child_process';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { copySync, moveSync } from 'fs-extra';
import { join } from 'path';
import {
  consumerDemoScripts,
  PACKAGE_FILES_TO_ROOT_MOVE_DIR,
  PROJECT_DEMO_DIR,
  PROJECT_DEMO_TEMPLATE_DIR,
} from '../models';
import { getConsumerProjectPaths } from '../utils/getConsumerProjectPaths';
import { getPackagePaths } from '../utils/getPackagePaths';
import { isSelfRun } from '../utils/isSelfRun';
import { logError, logProgress, logSuccess } from '../utils/logger';
import { addScriptsToPackageJson } from '../utils/packageJsonManipulate';
import { replaceDataExport } from '../utils/replaceDataExport';
import { addReferenceToTsConfig } from '../utils/tsConfigManipulate';

const {
  packageRootPath,
  packageTemplatePath,
  packageTemplateDistPath,
  packageTemplateNodeModulesPath,
} = getPackagePaths();
const { projectRootPath, projectDemoPath, projectDemoTemplatePath } =
  getConsumerProjectPaths();

export const initialize = () => {
  if (existsSync(projectRootPath) && existsSync(packageRootPath)) {
    const isFirstInitialization = !existsSync(projectDemoPath);
    logProgress(`Demo ${!isFirstInitialization ? 're' : ''}initialization...`);

    if (isFirstInitialization) {
      mkdirSync(projectDemoPath);
    }

    rmSync(projectDemoTemplatePath, { recursive: true, force: true });
    if (!isSelfRun()) {
      rmSync(packageTemplateDistPath, { recursive: true, force: true });
      rmSync(packageTemplateNodeModulesPath, { recursive: true, force: true });
    }

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

    replaceDataExport();

    rmSync(filesToRootCopyPath, { recursive: true, force: true });
    if (!isSelfRun()) {
      rmSync(packageTemplatePath, { recursive: true, force: true });
    }

    addScriptsToPackageJson(consumerDemoScripts);
    addReferenceToTsConfig();
    execSync(`cd ${PROJECT_DEMO_DIR}/${PROJECT_DEMO_TEMPLATE_DIR} && npm i`);

    logSuccess(
      `Demo has been ${!isFirstInitialization ? 're' : ''}initialized!`,
    );
    process.exit(0);
  }

  logError('Demo initialization failed!');
  process.exit(1);
};
