console.log(chalk.blue('[INFO]'), 'Starting plop...');
if (shell.exec('npm run plop').code !== 0) {
  console.error(chalk.red('[ERROR]'), 'Failed to run plop');
  process.exit(1);
}
console.log(chalk.green('[SUCCESS]'), 'Plop finished successfully!');