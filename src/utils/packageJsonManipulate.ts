import { existsSync, readFileSync, writeFileSync } from 'fs';
import { ConsumerDemoScripts } from '../models';
import { getConsumerProjectPaths } from './getConsumerProjectPaths';

const { projectPackageJsonPath } = getConsumerProjectPaths();

export const addScriptsToPackageJson = (demoScripts: ConsumerDemoScripts) => {
  if (!existsSync(projectPackageJsonPath)) return;

  const packageJsonObj = JSON.parse(
    readFileSync(projectPackageJsonPath, 'utf-8'),
  );

  if (packageJsonObj.scripts) {
    Object.keys(demoScripts).forEach((key) => {
      packageJsonObj.scripts[key] = demoScripts[key];
    });
  }

  writeFileSync(
    projectPackageJsonPath,
    `${JSON.stringify(packageJsonObj, null, 2)}\n`,
  );
};

export const removeScriptsFromPackageJson = (
  demoScripts: ConsumerDemoScripts,
) => {
  if (!existsSync(projectPackageJsonPath)) return;

  const packageJsonObj = JSON.parse(
    readFileSync(projectPackageJsonPath, 'utf-8'),
  );

  if (packageJsonObj.scripts) {
    Object.keys(demoScripts).forEach((key) => {
      delete packageJsonObj.scripts[key];
    });
  }

  writeFileSync(
    projectPackageJsonPath,
    `${JSON.stringify(packageJsonObj, null, 2)}\n`,
  );
};
