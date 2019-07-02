import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());



app.get('/', (req, res) => {
res.send('Api is bootsraped and its ready to roll')
})

const PORT = 1111;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    

})