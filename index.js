const express = require('express')
const app = express()

app.get('/soma', (req, res) => {
const soma = 1+1;
res.send({soma:soma});
});
app.listen(3000)



