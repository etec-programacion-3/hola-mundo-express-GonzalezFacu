import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Ingrese el nombre en la URL');
});

app.get('/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
