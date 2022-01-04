import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';

const PORT_HTTP = 3333;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
  });

function startServer() {
    server.listen(PORT_HTTP, () => console.log('Running on http://localhost:' + PORT_HTTP));
}

startServer();
