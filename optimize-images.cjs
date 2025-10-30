const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Diretórios de imagens
const imageDirectories = [
  './public/assets/home',
  './public/assets/produtos',
  './public/assets/footer'
];

console.log('🖼️  Iniciando otimização de imagens...\n');

// Função para obter tamanho do arquivo
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2); // KB
}

// Função para processar diretório recursivamente
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Diretório não encontrado: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const sizeBefore = getFileSize(filePath);
      console.log(`📁 ${filePath}`);
      console.log(`   Tamanho original: ${sizeBefore} KB`);
      
      // Sugestão: converta manualmente usando ferramentas online ou ImageMagick
      console.log(`   💡 Otimize esta imagem em: https://tinypng.com/ ou https://squoosh.app/`);
      console.log('');
    }
  });
}

console.log('📊 Análise de imagens:\n');
imageDirectories.forEach(dir => {
  console.log(`\n📂 Analisando: ${dir}\n${'='.repeat(50)}`);
  processDirectory(dir);
});

console.log('\n✅ Análise concluída!');
console.log('\n💡 Recomendações:');
console.log('   1. Use WebP para reduzir até 30% do tamanho');
console.log('   2. Dimensione as imagens para o tamanho real de uso');
console.log('   3. Use lazy loading para imagens fora da viewport');
console.log('   4. Ferramentas recomendadas:');
console.log('      - https://tinypng.com/ (PNG/JPEG)');
console.log('      - https://squoosh.app/ (WebP/AVIF)');
console.log('      - https://www.iloveimg.com/compress-image');
