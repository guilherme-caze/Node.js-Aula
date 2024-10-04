// Importa o >>módulo<< http do Node.Js
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta como 'text/plain'
    res.writeHead(200, { 'Content-Type': 'text/plain'});

    // Envia a resposta "Hello, World!" para o cliente
    res.end('Hello, World!');
});

// Define a porta do servidor (ex: 3000)
const port = 3000;

// Faz o servidor escutar na porta 3000
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});