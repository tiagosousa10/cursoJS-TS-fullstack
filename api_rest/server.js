import app from './app';

const port = 3001; // definir a porta

app.listen(port, () => {
  console.log();
  console.log(`O server vai abrir na porta: ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
