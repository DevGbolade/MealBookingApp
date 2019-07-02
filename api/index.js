import express from 'express';
import bodyParser from 'body-parser';
import mealRoutes from './routes/meal.route'
const app = express();

app.use(bodyParser.json());
const PORT = 1111;

app.use(bodyParser.json());

app.get('/', (req, res) => {
res.send('Api is bootstraped and its ready to roll')
})

app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    

})