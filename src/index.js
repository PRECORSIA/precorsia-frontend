
// Nota

// Este código ainda segue o padrão utilizado no projeto TODO,
// visto que uma estrutura base Express é comum, e não necessita 
// de novas contribuições para servir a página estática deste projeto.


import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const app = express();
const port = process.env.PORT || 80;

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);
const publicPath = join(currentDir, '..', 'public');

app.get('/', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'));
});

app.use(express.static(publicPath));
app.listen(port, () => {
    console.log(`Server is running: PORT [${port}]`);
});