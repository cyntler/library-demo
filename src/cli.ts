#!/usr/bin/env node

import { cwd } from 'process';
import findProjectRoot from 'find-project-root';
import { join } from 'path';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { copySync } from 'fs-extra';

const projectRoot = findProjectRoot(cwd());
const projectDemoPath = join(projectRoot, 'demo');
const projectDemoTemplatePath = join(projectDemoPath, 'template');

const packageRoot = join(projectRoot, 'node_modules', '@cyntler/library-demo');
const packageTemplatePath = join(packageRoot, 'template');

if (existsSync(packageRoot)) {
  if (existsSync(projectDemoTemplatePath)) {
    rmSync(projectDemoTemplatePath, { recursive: true, force: true });
  }

  if (!existsSync(projectDemoPath)) {
    mkdirSync(projectDemoPath);
  }

  copySync(packageTemplatePath, projectDemoTemplatePath);
  writeFileSync(join(projectDemoPath, 'index.tsx'), 'export default [];');

  console.log(`🎉 Demo has been initialized!`);
  process.exit(0);
} else {
  console.error(`❗️ Demo initialize process failed!`);
  process.exit(1);
}
