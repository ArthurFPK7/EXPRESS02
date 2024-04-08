//colocando parâmetro nas rotas

const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log('Servidor em execução');
});

//rotas
app.get('/',(req,res)=>{
    res.send("Teste1");
})

//rota com um parâmetro
app.get('/ola/:nome/',(req,res)=>{
    res.send("Teste2, tudo bem"+req,params.nome+"?");
})

//rota com dois parâmetro
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send("Teste2, tudo bem"+req,params.nome+"da empresa"+req);
})

//rota com soma de parâmetro
app.get('/soma/:a/:b',(req,res)=>{
    res.send("Resultado da soma é: "+(parseInt(req.params.a)+parseInt(req.params.b)));
})