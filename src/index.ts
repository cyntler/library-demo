#!/usr/bin/env node

import { logError } from './utils/logger';
import { uninstall } from './processes/uninstall';
import { initialize } from './processes/initialize';
import { start } from './processes/start';
import { build } from './processes/build';

const argv = process.argv;

const commandStrategy = {
  init: initialize,
  uninstall,
  start,
  build,
};

const command = Object.keys(commandStrategy).find((command) =>
  argv.includes(command),
);

if (command) {
  const result = commandStrategy[command]();
  process.exit(result ? 0 : 1);
}

logError('There is no such command!');
process.exit(1);
