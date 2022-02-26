import express from "express";
import { uploads } from "../upload";

const app = express();

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.post('/upload', uploads.single('avatar'), (req, res) => {
    try {
        res.send('File was uploaded with success: ' + req.file.filename);
    } catch (error) {
        console.log(error);
    }
   
});

app.listen(3000, () => console.log('listening on port 3000!'))