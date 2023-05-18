const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');
const JSZip = require('jszip');

const sourceDir = 'source';
const clientDir = 'client';
const serverDir = 'server';
const ignoredExtensions = ['key', '.log', '.zip', '.tar', '.gz', '.tgz', '.map', 'dist', 'node_modules', 'uploads', 'bin'];

function copyFiles(srcDir, destDir) {
    shell.mkdir('-p', destDir);
    shell.ls('-A', srcDir).forEach(file => {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, file);
      if (fs.lstatSync(srcPath).isDirectory()) {
        if (!ignoredExtensions.some(ext => file.endsWith(ext))) {
          if (!fs.existsSync(destPath)) {
            shell.mkdir(destPath);
          }
          copyFiles(srcPath, destPath);
        }
      } else if (!ignoredExtensions.some(ext => file.endsWith(ext))) {
        shell.cp('-R', srcPath, destPath);
      }
    });
}

async function generatePDF() {
    const pdf = await mdToPdf({ path: 'DevelopmentDocumentation.md' }).catch(console.error);
    if (pdf) {
      shell.echo('📄 Generating development documents...')
      fs.writeFileSync('source/开发文档.pdf', pdf.content);
    }
}

async function generateZip() {
    const date = new Date().toISOString().slice(0, 10);
    const time = new Date().toLocaleTimeString().replace(/:/g, '');
    const zipName = `Source_${date}_${time}.zip`;
    const zip = new JSZip();
    const files = shell.ls('-R', 'source/');
    files.forEach(file => {
      if (!fs.lstatSync(`source/${file}`).isDirectory() && !file.endsWith('.zip')) {
        const content = fs.readFileSync(`source/${file}`);
        zip.file(file, content);
      }
    });
    const content = await zip.generateAsync({ type: 'nodebuffer' });
    fs.writeFileSync(`source/${zipName}`, content);
    shell.echo(`📦 Generating zip: ${zipName}`);
}

(async () => {
//   shell.rm('-rf', sourceDir);
//   shell.mkdir(sourceDir);
  copyFiles(clientDir, path.join(sourceDir, clientDir));
  copyFiles(serverDir, path.join(sourceDir, serverDir));
  await generatePDF();
  await generateZip();
  shell.echo('🎉🎉🎉 All files copied to source directory ✨');
})();