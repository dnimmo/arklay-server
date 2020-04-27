import express from 'express';
import setUpRoutes from './routes';

const app = 
  express();


setUpRoutes(app);


console.log('listening on port 3080');
app.listen(3080);