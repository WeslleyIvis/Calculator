const fs = require('fs');

// Nome do arquivo JSON
const fileName = 'data.json';

// Verifica se o arquivo já existe
if (fs.existsSync(fileName)) {
  // Lê o conteúdo do arquivo JSON
  const data = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  // Adiciona novos dados
  const newData = { name: 'Maria', age: 30 };
  data.push(newData);

  // Escreve os dados atualizados no arquivo JSON
  fs.writeFileSync(fileName, JSON.stringify(data));
} else {
  // Cria um novo arquivo JSON e salva os dados
  const data = [{ name: 'João', age: 25 }];
  fs.writeFileSync(fileName, JSON.stringify(data));
}
