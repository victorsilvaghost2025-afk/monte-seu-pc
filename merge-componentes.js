// merge-componentes.js
// Uso: node merge-componentes.js
// Faz backup do componentes.json e gera componentes.merged.json (e opcionalmente sobrescreve componentes.json)

const fs = require('fs');
const path = require('path');

const arquivo = path.join(__dirname, 'componentes.json');
const arquivoBackup = path.join(__dirname, 'componentes.backup.json');
const arquivoMerged = path.join(__dirname, 'componentes.merged.json');

if (!fs.existsSync(arquivo)) {
  console.error('Erro: não encontrou componentes.json no diretório atual.');
  process.exit(1);
}

// Faz backup rápido
fs.copyFileSync(arquivo, arquivoBackup);
console.log('Backup criado em componentes.backup.json');

// Novos itens (colei aqui exatamente os itens que você enviou)
const novosItens = [
  {"nome":"AMD Ryzen 3 3200G","tipo":"CPU","preco":480,"desempenho":{"cpu":3,"gpu":3,"ram":0,"armazenamento":0},"objetivos":["trabalho","estudos"],"marca":"AMD","socket":"AM4"},
  {"nome":"AMD Ryzen 5 5500","tipo":"CPU","preco":650,"desempenho":{"cpu":4,"gpu":0,"ram":0,"armazenho":0},"objetivos":["games","trabalho"],"marca":"AMD","socket":"AM4"},
  {"nome":"AMD Ryzen 5 5600","tipo":"CPU","preco":800,"desempenho":{"cpu":5,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"AMD","socket":"AM4"},
  {"nome":"AMD Ryzen 5 5600G","tipo":"CPU","preco":740,"desempenho":{"cpu":4,"gpu":3,"ram":0,"armazenamento":0},"objetivos":["games leves","trabalho"],"marca":"AMD","socket":"AM4"},
  {"nome":"AMD Ryzen 5 7600X","tipo":"CPU","preco":1600,"desempenho":{"cpu":6,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"AMD","socket":"AM5"},
  {"nome":"AMD Ryzen 7 7700X","tipo":"CPU","preco":2300,"desempenho":{"cpu":7,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"AMD","socket":"AM5"},
  {"nome":"AMD Ryzen 9 7900","tipo":"CPU","preco":2400,"desempenho":{"cpu":8,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","render"],"marca":"AMD","socket":"AM5"},
  {"nome":"AMD Ryzen 9 7950X","tipo":"CPU","preco":3900,"desempenho":{"cpu":9,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["render","edicao pesada"],"marca":"AMD","socket":"AM5"},
  {"nome":"Intel Core i3-12100F","tipo":"CPU","preco":580,"desempenho":{"cpu":3,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho","games leves"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i3-14100F","tipo":"CPU","preco":650,"desempenho":{"cpu":3,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i5-12400F","tipo":"CPU","preco":900,"desempenho":{"cpu":5,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","trabalho"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i5-13400F","tipo":"CPU","preco":1100,"desempenho":{"cpu":6,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i5-14400F","tipo":"CPU","preco":1200,"desempenho":{"cpu":6,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i7-12700F","tipo":"CPU","preco":1700,"desempenho":{"cpu":7,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","render"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i7-13700K","tipo":"CPU","preco":2400,"desempenho":{"cpu":8,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"Intel Core i9-13900K","tipo":"CPU","preco":3600,"desempenho":{"cpu":9,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["render","edicao pesada"],"marca":"Intel","socket":"LGA1700"},
  {"nome":"NVIDIA GTX 1050 Ti","tipo":"GPU","preco":800,"desempenho":{"cpu":0,"gpu":2,"ram":0,"armazenamento":0},"objetivos":["games leves"],"marca":"NVIDIA"},
  {"nome":"NVIDIA GTX 1650","tipo":"GPU","preco":900,"desempenho":{"cpu":0,"gpu":3,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"NVIDIA"},
  {"nome":"NVIDIA GTX 1660 Super","tipo":"GPU","preco":1200,"desempenho":{"cpu":0,"gpu":4,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3050","tipo":"GPU","preco":1500,"desempenho":{"cpu":0,"gpu":4,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3060","tipo":"GPU","preco":2200,"desempenho":{"cpu":0,"gpu":5,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3060 Ti","tipo":"GPU","preco":2600,"desempenho":{"cpu":0,"gpu":6,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3070","tipo":"GPU","preco":3500,"desempenho":{"cpu":0,"gpu":7,"ram":0,"armazenamento":0},"objetivos":["games 1440p","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3070 Ti","tipo":"GPU","preco":3800,"desempenho":{"cpu":0,"gpu":7,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3080","tipo":"GPU","preco":5000,"desempenho":{"cpu":0,"gpu":8,"ram":0,"armazenamento":0},"objetivos":["games 4K","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3080 Ti","tipo":"GPU","preco":6500,"desempenho":{"cpu":0,"gpu":9,"ram":0,"armazenamento":0},"objetivos":["4K","render"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 3090","tipo":"GPU","preco":9500,"desempenho":{"cpu":0,"gpu":10,"ram":0,"armazenamento":0},"objetivos":["render","edicao pesada"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 4060","tipo":"GPU","preco":1900,"desempenho":{"cpu":0,"gpu":5,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 4070","tipo":"GPU","preco":3400,"desempenho":{"cpu":0,"gpu":7,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 4080","tipo":"GPU","preco":7200,"desempenho":{"cpu":0,"gpu":9,"ram":0,"armazenamento":0},"objetivos":["4K","render"],"marca":"NVIDIA"},
  {"nome":"NVIDIA RTX 4090","tipo":"GPU","preco":12000,"desempenho":{"cpu":0,"gpu":10,"ram":0,"armazenamento":0},"objetivos":["render extremo","IA"],"marca":"NVIDIA"},
  {"nome":"AMD RX 580 8GB","tipo":"GPU","preco":650,"desempenho":{"cpu":0,"gpu":3,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"AMD"},
  {"nome":"AMD RX 6600","tipo":"GPU","preco":1200,"desempenho":{"cpu":0,"gpu":4,"ram":0,"armazenamento":0},"objetivos":["games"],"marca":"AMD"},
  {"nome":"AMD RX 6700 XT","tipo":"GPU","preco":2400,"desempenho":{"cpu":0,"gpu":6,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"marca":"AMD"},
  {"nome":"AMD RX 6800 XT","tipo":"GPU","preco":4000,"desempenho":{"cpu":0,"gpu":8,"ram":0,"armazenamento":0},"objetivos":["4K","edicao"],"marca":"AMD"},
  {"nome":"AMD RX 7900 XTX","tipo":"GPU","preco":9000,"desempenho":{"cpu":0,"gpu":9,"ram":0,"armazenamento":0},"objetivos":["4K","render"],"marca":"AMD"},
  {"nome":"8GB DDR4 2666MHz","tipo":"RAM","preco":200,"desempenho":{"cpu":0,"gpu":0,"ram":2,"armazenamento":0},"objetivos":["trabalho"],"tipo_memoria":"DDR4"},
  {"nome":"8GB DDR4 3000MHz","tipo":"RAM","preco":180,"desempenho":{"cpu":0,"gpu":0,"ram":2,"armazenamento":0},"objetivos":["trabalho"],"tipo_memoria":"DDR4"},
  {"nome":"16GB DDR4 3200MHz (2x8)","tipo":"RAM","preco":320,"desempenho":{"cpu":0,"gpu":0,"ram":4,"armazenamento":0},"objetivos":["games"],"tipo_memoria":"DDR4"},
  {"nome":"16GB DDR5 5200MHz","tipo":"RAM","preco":450,"desempenho":{"cpu":0,"gpu":0,"ram":5,"armazenamento":0},"objetivos":["edicao"],"tipo_memoria":"DDR5"},
  {"nome":"32GB DDR4 3600MHz","tipo":"RAM","preco":650,"desempenho":{"cpu":0,"gpu":0,"ram":6,"armazenamento":0},"objetivos":["edicao","render"],"tipo_memoria":"DDR4"},
  {"nome":"32GB DDR5 6000MHz","tipo":"RAM","preco":800,"desempenho":{"cpu":0,"gpu":0,"ram":7,"armazenamento":0},"objetivos":["render"],"tipo_memoria":"DDR5"},
  {"nome":"64GB DDR4 3600MHz","tipo":"RAM","preco":1400,"desempenho":{"cpu":0,"gpu":0,"ram":8,"armazenamento":0},"objetivos":["render","edicao pesada"],"tipo_memoria":"DDR4"},
  {"nome":"64GB DDR5 6400MHz","tipo":"RAM","preco":2200,"desempenho":{"cpu":0,"gpu":0,"ram":9,"armazenamento":0},"objetivos":["render extremo"],"tipo_memoria":"DDR5"},
  {"nome":"16GB (2x8) DDR4 3600 RGB","tipo":"RAM","preco":380,"desempenho":{"cpu":0,"gpu":0,"ram":4,"armazenamento":0},"objetivos":["games"],"tipo_memoria":"DDR4"},
  {"nome":"32GB (2x16) DDR5 5600MHz","tipo":"RAM","preco":990,"desempenho":{"cpu":0,"gpu":0,"ram":6,"armazenamento":0},"objetivos":["games","edicao"],"tipo_memoria":"DDR5"},
  {"nome":"SSD NVMe 240GB","tipo":"Armazenamento","preco":140,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":2},"objetivos":["trabalho"],"tecnologia":"NVMe"},
  {"nome":"SSD NVMe 500GB","tipo":"Armazenamento","preco":220,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":3},"objetivos":["games"],"tecnologia":"NVMe"},
  {"nome":"SSD NVMe 1TB","tipo":"Armazenamento","preco":400,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":4},"objetivos":["games","edicao"],"tecnologia":"NVMe"},
  {"nome":"SSD NVMe 2TB Gen4","tipo":"Armazenamento","preco":650,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":6},"objetivos":["edicao","render"],"tecnologia":"NVMe"},
  {"nome":"SSD SATA 1TB","tipo":"Armazenamento","preco":330,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":3},"objetivos":["games","trabalho"],"tecnologia":"SATA"},
  {"nome":"HD 1TB 7200RPM","tipo":"Armazenamento","preco":200,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":1},"objetivos":["arquivos"],"tecnologia":"HDD"},
  {"nome":"HD 2TB 7200RPM","tipo":"Armazenamento","preco":320,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":1},"objetivos":["backup"],"tecnologia":"HDD"},
  {"nome":"Samsung 980 PRO 1TB","tipo":"Armazenamento","preco":780,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":7},"objetivos":["edicao"],"tecnologia":"NVMe"},
  {"nome":"Samsung 990 PRO 2TB","tipo":"Armazenamento","preco":1800,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":8},"objetivos":["edicao pesada","render"],"tecnologia":"NVMe"},
  {"nome":"WD Black SN770 1TB","tipo":"Armazenamento","preco":520,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":5},"objetivos":["games","edicao"],"tecnologia":"NVMe"},
  {"nome":"Fonte 450W 80 Plus","tipo":"Fonte","preco":250,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho"],"certificacao":"80+","marca":"Genérica"},
  {"nome":"Fonte 550W 80 Plus Bronze","tipo":"Fonte","preco":350,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"certificacao":"80+ Bronze","marca":"Corsair"},
  {"nome":"Fonte 650W 80 Plus Gold","tipo":"Fonte","preco":450,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"certificacao":"80+ Gold","marca":"Corsair"},
  {"nome":"Fonte 750W 80 Plus Gold","tipo":"Fonte","preco":520,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"certificacao":"80+ Gold","marca":"Seasonic"},
  {"nome":"Fonte 850W 80 Plus Platinum","tipo":"Fonte","preco":900,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["ultra","render"],"certificacao":"80+ Platinum","marca":"be quiet!"},
  {"nome":"Fonte 1000W 80 Plus Titanium","tipo":"Fonte","preco":2000,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["workstation","render"],"certificacao":"80+ Titanium","marca":"Seasonic"},
  {"nome":"Fonte 550W Modular 80+ Bronze","tipo":"Fonte","preco":420,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"certificacao":"80+ Bronze","marca":"EVGA"},
  {"nome":"Fonte 650W 80+ Bronze (Marca Genérica)","tipo":"Fonte","preco":300,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["budget"],"certificacao":"80+ Bronze","marca":"Genérica"},
  {"nome":"Gabinete compacto","tipo":"Gabinete","preco":200,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho"],"tamanho":"Mini Tower"},
  {"nome":"Gabinete Mid Tower","tipo":"Gabinete","preco":300,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"tamanho":"Mid Tower"},
  {"nome":"Gabinete com boa refrigeração","tipo":"Gabinete","preco":450,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","render"],"tamanho":"Mid Tower"},
  {"nome":"Gabinete Corsair 4000D Airflow","tipo":"Gabinete","preco":580,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"tamanho":"Mid Tower"},
  {"nome":"Gabinete Lian Li O11 Dynamic","tipo":"Gabinete","preco":900,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","showcase"],"tamanho":"Mid Tower"},
  {"nome":"Gabinete CoolerMaster H500","tipo":"Gabinete","preco":750,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["render"],"tamanho":"Full Tower"},
  {"nome":"Gabinete Phanteks P400A","tipo":"Gabinete","preco":420,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"tamanho":"Mid Tower"},
  {"nome":"Gabinete Thermaltake V200","tipo":"Gabinete","preco":240,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["budget"],"tamanho":"Mid Tower"},
  {"nome":"ASRock B450M","tipo":"Placa-mãe","preco":420,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho","games"],"socket":"AM4"},
  {"nome":"ASUS TUF B450","tipo":"Placa-mãe","preco":480,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"socket":"AM4"},
  {"nome":"MSI B550M","tipo":"Placa-mãe","preco":650,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"socket":"AM4"},
  {"nome":"ASUS ROG Strix B550-F","tipo":"Placa-mãe","preco":1200,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"socket":"AM4"},
  {"nome":"Gigabyte B660M DS3H","tipo":"Placa-mãe","preco":700,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho","games"],"socket":"LGA1700"},
  {"nome":"MSI PRO B760-P","tipo":"Placa-mãe","preco":900,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"socket":"LGA1700"},
  {"nome":"ASUS TUF Z690-PLUS","tipo":"Placa-mãe","preco":1500,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","overclock"],"socket":"LGA1700"},
  {"nome":"ASUS ROG X670E-E","tipo":"Placa-mãe","preco":3500,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao"],"socket":"AM5"},
  {"nome":"MSI MPG X570","tipo":"Placa-mãe","preco":1400,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao"],"socket":"AM4"},
  {"nome":"Gigabyte X670 Aorus Elite","tipo":"Placa-mãe","preco":2200,"desempenho":{"cpu":0,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","games"],"socket":"AM5"},
  {"nome":"Cooler Master Hyper 212","tipo":"Cooler","preco":199,"desempenho":{"cpu":1,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["trabalho","games"],"tipo_cooler":"Air"},
  {"nome":"Noctua NH-U12S","tipo":"Cooler","preco":399,"desempenho":{"cpu":3,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","overclock"],"tipo_cooler":"Air"},
  {"nome":"Arctic Freezer 34","tipo":"Cooler","preco":250,"desempenho":{"cpu":2,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"tipo_cooler":"Air"},
  {"nome":"Arctic Liquid Freezer II 240","tipo":"Cooler","preco":699,"desempenho":{"cpu":5,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao","render"],"tipo_cooler":"Water"},
  {"nome":"NZXT Kraken X63","tipo":"Cooler","preco":899,"desempenho":{"cpu":5,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["edicao"],"tipo_cooler":"Water"},
  {"nome":"Corsair H100i RGB","tipo":"Cooler","preco":850,"desempenho":{"cpu":4,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games","edicao"],"tipo_cooler":"Water"},
  {"nome":"Deepcool GAMMAXX 400","tipo":"Cooler","preco":120,"desempenho":{"cpu":1,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["budget"],"tipo_cooler":"Air"},
  {"nome":"Be quiet! Dark Rock 4","tipo":"Cooler","preco":500,"desempenho":{"cpu":4,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["silencio","overclock"],"tipo_cooler":"Air"},
  {"nome":"ID-COOLING Auraflow 240","tipo":"Cooler","preco":420,"desempenho":{"cpu":3,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"tipo_cooler":"Water"},
  {"nome":"Thermalright Peerless Assassin","tipo":"Cooler","preco":299,"desempenho":{"cpu":3,"gpu":0,"ram":0,"armazenamento":0},"objetivos":["games"],"tipo_cooler":"Air"}
];

try {
  const atual = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
  // Transformar em mapa por nome para evitar duplicatas
  const mapa = new Map();

  atual.forEach(item => {
    mapa.set(item.nome.trim().toLowerCase(), item);
  });

  novosItens.forEach(item => {
    // corrigir possíveis erros de digitação em chaves (ex: "armazenho")
    if (item.desempenho && item.desempenho.armazenho) {
      item.desempenho.armazenamento = item.desempenho.armazenho;
      delete item.desempenho.armazenho;
    }
    mapa.set(item.nome.trim().toLowerCase(), item);
  });

  const merged = Array.from(mapa.values());
  fs.writeFileSync(arquivoMerged, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`Gerado ${arquivoMerged} com ${merged.length} itens.`);

  // Opcional: sobrescrever o componentes.json (descomente se quiser)
  // fs.writeFileSync(arquivo, JSON.stringify(merged, null, 2), 'utf8');
  // console.log('componentes.json atualizado (sobrescrito).');

} catch (err) {
  console.error('Erro ao processar JSON:', err);
}
