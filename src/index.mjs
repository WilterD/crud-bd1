import express from 'express';
import ejs from 'ejs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio' });
});

app.listen(3000, () => {
  console.log('El servidor está corriendo en el puerto 3000');
});