#!/usr/bin/env node
import { uninstall } from './processes/uninstall';
import { initialize } from './processes/initialize';

const argv = process.argv;
const isUninstall = argv.includes('--uninstall');

/* When the user ran CLI with --uninstall option. */
if (isUninstall) {
  uninstall();
} else {
  initialize();
}
