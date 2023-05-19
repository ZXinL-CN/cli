const shell = require('shelljs');
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const JSZip = require('jszip');

async function generatePDF() {
  const pdf = await mdToPdf({ path: 'DeploymentDocument.md' }).catch(console.error);
  if (pdf) {
    shell.echo('📄 Generating deployment documents...')
    fs.writeFileSync('out/部署文档.pdf', pdf.content);
  }
}

function generateBatchScript() {
  shell.echo('💾 Generating batch script...')
  shell.cp("-R", "cmd/*", "out/");
}

async function generateZip() {
  const date = new Date().toISOString().slice(0, 10);
  const time = new Date().toLocaleTimeString().replace(/:/g, '');
  const zipName = `App_${date}_${time}.zip`;
  const zip = new JSZip();
  const files = shell.ls('-R', 'out/');
  files.forEach(file => {
    if (!fs.lstatSync(`out/${file}`).isDirectory() && !file.endsWith('.zip')) {
      const content = fs.readFileSync(`out/${file}`);
      zip.file(file, content);
    }
  });
  const content = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(`out/${zipName}`, content);
  shell.echo(`📦 Generating zip: ${zipName}`);
}

(async () => {
  await generatePDF();
  generateBatchScript();
  await generateZip();
  shell.echo('🎉🎉🎉 All builds completed ✨');
})();