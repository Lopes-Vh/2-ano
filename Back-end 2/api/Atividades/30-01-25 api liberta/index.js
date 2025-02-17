//npm init -y
//npm install express
// npm install mysql2

import cors from 'cors';
import express from 'express';
import { retornaCampeonatos, retornaCampeonatoID } from './servicos/retornacampeonato.js'
import { cadastraCampeonatos } from './servicos/cadastracampeonato.js'
import { atualizaCampeonato } from './servicos/atualizacampeonato_servico.js'
import { atualizaCampeonatoparcial } from './servicos/atualizacampeonato_servico.js'
import { deletaCampeonato } from "./servicos/deletacampeonatos_servicos.js";

const app = express();
app.use (cors());
app.use(express.json());

app.delete('/campeonatos/:id', async (req, res) =>{
    const id = req.params.id;
    const resultado = await deletaCampeonato(id);
    if (resultado.affectedRows >0) {
        res.status(202).send('Registro deletado com sucesso')
    } else {
        res.status(404).send('Registro nao encontrado')
    }
})

app.path('/campeonatos/:id', async (req, res) => {
  const { id } = req.params;
  const { campeao, vice, ano } = req.body;
  const camposAtualizados = {};

  if (campeao) camposAtualizados.campeao = campeao;
  if (vice) camposAtualizados.vice = vice; 
  if (ano) camposAtualizados.ano = ano; 

  if (Object.keys(camposAtualizados).length === 0) { 
    res.status(400).send("nenhum campo valido preenchido");
  } else {
    const resultado = await atualizaCampeonatoparcial(id, camposAtualizados);
    if (resultado.affectedRows > 0) {
      res.status(202).send("registro atualizado com sucesso");
    } else {
      res.status(404).send('Registro não encontrado');
    }
  }
});


app.put('/campeonatos/:id', async (req,res) => {
 const [id] = req.params;
 const [campeao,vice,ano] = req.body; 

 if (campeao == undefined || vice == undefined || ano == undefined) {
  res.status(400).send('Alguem campo esta faltando ...')
} else {
  const resultado = await atualizaCampeonato(id, campeao, vice, ano);
  if (resultado.affectedRows >0) {
    res.status(202).send('registro atualizado com sucesso')
  } else {
    res.status(400).send('Registro Nao encontrado')
  }
 }


})

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
        res.status(404).json({ mensagem: 'nenhum campeonato encontrado!!!'});
    }
   
})

app.listen(9000, async () => {
    const data = new Date ();

    console.log('servidor iniciado em' + data);

})