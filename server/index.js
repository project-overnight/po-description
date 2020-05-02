const express = require('express');
const path = require('path');
const { query } = require('../database/query.js');

const app = express();
const PORT = 6009;


app.use('/', express.static('./dist'));

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/description/:id', (req, res) => {
  query(req.params.id)
    .then((document) => res.status(200).json(document))
    .catch((err) => res.status(422).json({ message: `Error: ${err}` }));
});



// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
