//npm init -y
//npm install express
// npm install mysql2

import cors from 'cors';
import express from 'express';
import { retornaCampeonatos, retornaCampeonatoID } from './servicos/retornaCampeonato.js'
import { cadastraCampeonatos } from './servicos/cadastraCampeonato.js'


const app = express();
app.use (cors())
app.use(express.json());

app.post('/campeonatos', async (req, res) => {

    if (!req.body.campeao || !req.body.vice || !req.body.ano) {
      return res.status(400).json({ message: 'Campeao, vice e ano são obrigatórios' });
    }

    const ano = parseInt(req.body.ano, 10); 
  
    try {
      await cadastraCampeonatos(req.body.campeao, req.body.vice, ano);
      res.status(201).json({ message: 'Campeonato cadastrado com sucesso!' }); 
    } catch (error) {
      console.error('Erro ao cadastrar campeonato:', error);
      res.status(500).json({ message: 'Erro ao cadastrar campeonato' });
    }
  });
  

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