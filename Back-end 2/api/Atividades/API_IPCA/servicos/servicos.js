import historicoInflacao from '../dados/dados.js'

export const obterTodos = () => {
    return historicoInflacao
}

export const obterAnos = (anoInput) => {
    parseInt(anoInput, 10)

    if(anoInput <=2014 || anoInput >= 2025 || isNaN(anoInput)) {
        console.log('tipo' + typeof(anoInput) + 'sdsa' + typeof(Number))
        return {"erro" : "Nenhum histórico encontrado para o ano especificado."}
    }

    else{
        const dadosPorAno = historicoInflacao.filter(ano => (ano.ano == anoInput))
        return dadosPorAno
    }
}

export const obterPorId = (idInput) => {
    parseInt(idInput, 10)

    if(isNaN(idInput)){
        return {"erro" : "Elemento não pode ser uma string."}
    }
    else{
        const buscaId = historicoInflacao.find(id => id.id == idInput)
        if(!buscaId){
            return {"erro" : "Elemento não encontrado."}
        }

        return buscaId       
    }

}

export const calcularValor = (valorInicial, mesIni, anoIni, mesFim, anoFim) => {
    if ( isNaN(valorInicial) || isNaN(mesIni) || isNaN(anoIni) || isNaN(mesFim) || isNaN(anoFim)) {
        return { "erro": "Parâmetros inválidos" };
    }

    let resultado = valorInicial;
    let valorInicio = historicoInflacao.find(item => item.ano === anoIni && item.mes === mesIni);

    if(!valorInicio){
        return {"erro":"Dados não encontrados para algum período"}
    }

    let mesAtual = valorInicio.mes;
    let anoAtual = valorInicio.ano;

    while (anoAtual < anoFim || (anoAtual === anoFim && mesAtual <= mesFim)) {
        const itemAtual = historicoInflacao.find(item => item.ano === anoAtual && item.mes === mesAtual);
        if (!itemAtual) {
            return {"erro":"Dados não encontrados para algum período"};
        }
        
        resultado *= (1 + itemAtual.ipca / 100); 
        mesAtual += 1;

        if (mesAtual > 12) {
            mesAtual = 1;
            anoAtual += 1;
        }
    }

    return {"resultado": `${resultado.toFixed(2)}`};
};
