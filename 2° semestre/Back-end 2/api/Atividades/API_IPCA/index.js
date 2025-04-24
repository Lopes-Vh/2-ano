import { obterTodos, obterAnos, obterPorId, calcularValor } from "./servicos/servicos.js";
import express from "express";

const app = express()

app.get('/historicoIPCA', (req, res) => {
    const dados = obterTodos();
    const anoInput = req.query.ano;

    if(anoInput != undefined){
        const dadosPorAno = obterAnos(anoInput);
        res.json(dadosPorAno);
    }
    else{
        res.json(dados);
    }
});

app.get('/historicoIPCA/calculo', (req, res) => {
    const valorInicial = parseInt(req.query.valor);
    const mesIni = parseInt(req.query.mesInicial);
    const anoIni = parseInt(req.query.anoInicial);
    const mesFim = parseInt(req.query.mesFinal);
    const anoFim = parseInt(req.query.anoFinal);

    const resultado = calcularValor(valorInicial, mesIni, anoIni, mesFim, anoFim);

    res.json(resultado);
});

app.get('/historicoIPCA/:id', (req, res) => {
    const id = req.params.id;
    res.json(obterPorId(id));
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 em ' + new Date());
});
