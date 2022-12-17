import { readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getPackagePaths } from './getPackagePaths';
import { PROJECT_DEMO_DIR } from '../models';

const { packageAppPath } = getPackagePaths();

export const replaceDemoSchemaImportPath = () => {
  const demoSchema = join(packageAppPath, 'src/demoSchema.tsx');
  const demoSchemaContent = readFileSync(demoSchema, 'utf-8');

  if (demoSchemaContent.includes('demoDefaultSchema')) {
    writeFileSync(
      demoSchema,
      demoSchemaContent.replace(
        /export { default } from (.*);/gm,
        `export { default } from '../../../../../${PROJECT_DEMO_DIR}/demo-schema';`,
      ),
      'utf-8',
    );
  }
};
