const express = require('express');

const app = express();
app.use(express.json());

// digite aqui embaixo

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app rodando na porta ${port}`));
