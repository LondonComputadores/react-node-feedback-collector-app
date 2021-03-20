const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});
console.log('Server Started and it is running on localhost:5000')

app.listen(5000);