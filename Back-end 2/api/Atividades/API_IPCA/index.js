import { returnAll, returnYears, returnId, returnCalc } from "./servicos/servicos.js";
import express from "express";

const app = express()

app.get('/historicoIPCA', (req, res) =>{
    const dados = returnAll()
    const inputYear = req.query.ano

    if(inputYear != undefined){
        const dadosAno = returnYears(inputYear)
        res.json(dadosAno)
    }

    else{
        res.json(dados)
    }
})

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseInt(req.query.valor)
    const mesInicial = parseInt(req.query.mesInicial)
    const anoInicial = parseInt(req.query.anoInicial)
    const mesFinal = parseInt(req.query.mesFinal)
    const anoFinal = parseInt(req.query.anoFinal)
    
    const resultado = returnCalc(valor, mesInicial, anoInicial, mesFinal, anoFinal)

    res.json(resultado)
})

app.get('/historicoIPCA/:id', (req, res) => {
    const id = req.params.id
    res.json(returnId(id))
})





app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 em' + new Date())
})

