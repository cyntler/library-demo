#!/usr/bin/env node
import { remove } from './processes/remove';
import { initialize } from './processes/initialize';

const argv = process.argv;
const isRemoving = argv.includes('--remove');

/* When the user ran CLI with --remove option. */
if (isRemoving) {
  remove();
} else {
  initialize();
}
