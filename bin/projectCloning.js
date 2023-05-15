import shell from 'shelljs';

// Clear the project directory if it exists
if (shell.test('-d', 'project')) {
  if (shell.rm('-rf', 'project').code !== 0) {
    console.log('❌ Failed to clear project directory');
    process.exit(1);
  }
}

// Create the project directory
if (shell.mkdir('project').code !== 0) {
  console.log('❌ Failed to create project directory');
  process.exit(1);
}

// Copy all files and folders except for 'templates' to the project directory
if (shell.cp('-R', 'src/!(templates)', 'project').code !== 0) {
  console.log('❌ Failed to copy files');
  process.exit(1);
} else {
  console.log('✅ Files copied successfully!');
}