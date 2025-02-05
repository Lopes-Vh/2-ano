//npm init -y
//npm install express
// npm install mysql2

import express from 'express';
import { retornaCampeonatos, retornaCampeonatoID } from './servicos/retornaCampeonato.js'

const app = express();

app.get('/campeonatos', async(req, res) => {
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos)
})

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonatos = await retornaCampeonatoID(id);
    if (campeonatos.length >0 ){
        res.json(campeonatos);
    } else{
        res.status(404).json({ mensagem: 'nenhum campeonato encontrado'});
    }
   
})

app.listen(9000, async () => {
    const data = new Date ();

    console.log('servidor iniciado em' + data);

})