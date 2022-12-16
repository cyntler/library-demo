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

  if (
    !projectDemoDataExportFileContent.includes(
      `import data from '../demoData';`,
    )
  ) {
    writeFileSync(
      projectDemoDataExportFilePath,
      projectDemoDataExportFileContent.replace(
        /import data from (.*);/gm,
        `import data from '../demoData';`,
      ),
      'utf-8',
    );
  }

  rmSync(join(projectDemoTemplatePath, 'dataTemplate.tsx'), {
    recursive: true,
    force: true,
  });
};
