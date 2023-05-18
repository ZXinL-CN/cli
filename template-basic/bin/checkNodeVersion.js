const shell = require('shelljs');

(async function checkNodeVersion() {
    const nodeVersion = process.version;
    const requiredVersion = 'v14.0.0';
    if (nodeVersion < requiredVersion) {
      shell.echo(`❌ Node version ${nodeVersion} is not supported. Please upgrade to version ${requiredVersion} or higher.`);
      process.exit(1);
    }
})();