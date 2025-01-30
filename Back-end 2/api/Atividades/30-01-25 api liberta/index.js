//npm init -y
//npm install express
// npm install mysql2

import express from 'express';
import poll from './servicos/conexao.js'

const app = express();

app.listen(9000, async () => {
    const data = new Date ();
    
    console.log('servidor iniciado em' + data);

    const conexao = await poll.getConnection();

    console.log(conexao.threadId);

    conexao.release();
})