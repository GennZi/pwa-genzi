const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Genzi PWA Teste!');
});

app.listen(3000, (req, res, error)=>{
    if(error){
      console.log(error)
    }else{
        console.log('SSServer listening on', 3000)
    } 
}) 