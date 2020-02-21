import express from 'express';
import routes from './app/routes/recipe';

const app = express();
const port = 3000;
// this only possible in express version 4.16.0 onwards
// it is used to get the parsed data
app.use(express.json());

routes(app)

app.listen(port, ()=>{
    console.log('app is listening on port 3000'); 
});