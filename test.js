import {fileURLToPath} from 'node:url';
import path from 'node:path';
// console.log(process.env.npm_config_user_agent)
console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));
console.log(path.dirname(fileURLToPath(import.meta.url)));