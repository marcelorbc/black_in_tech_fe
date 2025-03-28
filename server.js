const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importa a(s) rota(s) do diretório src/routes
const exampleRoute = require('./src/routes/exampleRoute');

app.use(express.json());

// Prefixa a rota. Ex: http://localhost:3000/api/example/
app.use('/api/example', exampleRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 