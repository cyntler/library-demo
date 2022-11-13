import { existsSync, readFileSync, writeFileSync } from 'fs';
import { getConsumerProjectPaths } from './getConsumerProjectPaths';

const { projectDemoTemplateTsConfigPath } = getConsumerProjectPaths();

export const addReferenceToTsConfig = () => {
  if (!existsSync(projectDemoTemplateTsConfigPath)) return;

  const tsConfigObj = JSON.parse(
    readFileSync(projectDemoTemplateTsConfigPath, 'utf-8'),
  );

  if (!tsConfigObj.references) {
    tsConfigObj.references = [
      {
        path: '../',
      },
    ];

    writeFileSync(
      projectDemoTemplateTsConfigPath,
      `${JSON.stringify(tsConfigObj, null, 2)}\n`,
    );
  }
};
