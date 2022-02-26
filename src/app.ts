import express from "express";
import multer from "multer";

export const app = express();
const upload = multer();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/upload', upload.single('avatar'), (req, res) => {
    try {
        res.send('File was uploaded with success: ' + req.file.originalname);
    } catch (error) {
        console.log(error);
    }
   
});