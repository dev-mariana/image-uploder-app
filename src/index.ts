import express from 'express';
import multer from 'multer';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => console.log('listening on port 3000'));