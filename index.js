const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Genzi PWA Teste!');
});

app.listen(3000, (req, res, error)=>{
    try {
        consoele.log('Server listening on', 3000)
    }
    catch (error) {}
})