import { readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getConsumerProjectPaths } from './getConsumerProjectPaths';

const { projectDemoTemplatePath } = getConsumerProjectPaths();

export const replaceDataExport = () => {
  const projectDemoDataExportFilePath = join(
    projectDemoTemplatePath,
    'dataExport.tsx',
  );
  const projectDemoDataExportFileContent = readFileSync(
    projectDemoDataExportFilePath,
    'utf-8',
  );

  if (projectDemoDataExportFileContent.includes('./dataTemplate')) {
    writeFileSync(
      projectDemoDataExportFilePath,
      projectDemoDataExportFileContent.replace('./dataTemplate', '../demoData'),
      'utf-8',
    );
  }

  rmSync(join(projectDemoTemplatePath, 'dataTemplate.tsx'), {
    recursive: true,
    force: true,
  });
};
