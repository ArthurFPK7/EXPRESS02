//incorporar respostas a partir de outros arquivos
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor na área')
})

const funcoes=require('./functions.js')


//rota adição
app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const resultado=funcoes.add(a,b)
    res.send(`A soma de chaves ${a} e ${b} é igual a ${resultado}`);
})

//rota subtração
app.get('/sub/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const resultado=funcoes.sub(a,b)
    res.send(`A subtração de chaves ${a} e ${b} é igual a ${resultado}`);
})

//rota multiplicação
app.get('/mult/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const resultado=funcoes.mult(a,b)
    res.send(`A multiplicação de chaves ${a} e ${b} é igual a ${resultado}`);
})

//rota divisão
app.get('/div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const resultado=funcoes.div(a,b)
    res.send(`A divisão de chaves ${a} e ${b} é igual a ${resultado}`);
})
