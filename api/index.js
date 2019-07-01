import express from 'express';
var app = express();

const PORT = 1111;

app.get('/', (req, res) => {
res.send('Api is bootsraped and its ready to roll')
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    

})