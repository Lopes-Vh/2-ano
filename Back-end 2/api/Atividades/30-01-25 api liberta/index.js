//npm init -y
//npm install express
// npm install mysql2

import express from 'express';
import poll from './servicos/conexao.js'

const app = express()

app.listen(9000, async () => {
    const data = new Date ();
    const conexao = await poll.getConection()
    console.log(conexao.threadId)
    conexao.release()
})