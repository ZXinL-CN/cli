import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import spawn from 'cross-spawn';
import minimist from 'minimist';
import {
  blue,
  cyan,
  green,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from 'kolorist';

const argv = minimist<{
  t?: string
  template?: string
}>(process.argv.splice(2), {string:['_']});
const cwd = process.cwd();
