const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());

router(app);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;
