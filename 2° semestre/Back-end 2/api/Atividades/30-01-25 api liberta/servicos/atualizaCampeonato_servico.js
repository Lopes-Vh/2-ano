import pool from "./conexao.js"

export async function atualizaCampeonato(id, campeao, vice, ano) {
    const conexao = await pool.getConnection ();
    const query = "UPDATE campeonatos SET campeao= ?, vice = ?, ano = ? WHERE id = ?";
    const [resposta] = conexao.execute(query, [campeao, vice, ano, id]);
    console.log(resposta);
    return resposta;

}

export async function atualizaCampeonatoparcial(id, campos) {
    const conexao = await pool.getConnection ();
    
    const colunas = Object.keys(campos).map(campo => `${campo} = ?`).join(", ")
    const valores = Object.values(campos);
    const query = `UPDATE campeonatos SET ${colunas} WHERE id = ?`;
    valores.push(id);
    const [resposta] = conexao.execute(query, valores);
    conexao.release();
    return resposta;
}