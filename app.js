import express from 'express';
import url from 'url';
import path from 'path';
import { indexRouter } from './routes/Index.js';
import { newRouter } from './routes/New.js';
const PORT = 8000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticPath = path.join(__dirname, 'public');
const app = express();

app.use(express.static(staticPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const logger = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next();

}
app.use(express.urlencoded({extended:true}));
app.use(logger);

app.use('/', indexRouter);
app.use('/new', newRouter);


app.listen(PORT, (err) => {
    if(err){
        throw err
    }
    console.log(`Server running on Port: ${PORT}`);
})



