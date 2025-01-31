import pool from "./conexao.js"

export async function  retornaCampeonato (){
    const conexao = await pool.getConnection();
    const campeonatos_tb= await conexao.query('SELECT id, campeao, vice, ano from campeonatos');
    const campeonatos= campeonatos_tb[0]
    conexao.release()
    return campeonatos;
};

export default retornaCampeonato;