const cors = require('cors');
const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

router(app);
app.get('*', function (req, res) {
	res.send('public/index.html');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
