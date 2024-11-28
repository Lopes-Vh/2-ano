import historicoInflacao from '../dados/dados.js'

export const returnAll = () => {
    return historicoInflacao
}

export const returnYears = (yearInput) => {
    parseInt(yearInput, 10)

    if(yearInput <=2014 || yearInput >= 2025 || isNaN(yearInput)) {
        console.log('tipo' + typeof(yearInput) + 'sdsa' + typeof(Number))
        return {"erro" : "Nenhum histórico encontrado para o ano especificado."}
    }

    else{
        const allForYear = historicoInflacao.filter(year => (year.ano == yearInput))
        return allForYear
    }
}

export const returnId = (inputId) => {
    parseInt(inputId, 10)

    if(isNaN(inputId)){
        return {"erro" : "Elemento não pode ser uma string."}
    }
    else{
        const searchId = historicoInflacao.find(id => id.id == inputId)
        if(!searchId){
            return {"erro" : "Elemento não encontrado."}
        }

        return searchId       
    }

}

export const returnCalc = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    if ( isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)) {
        return { "erro": "Parâmetros inválidos" };
    }

    let resultado = valor;
    let initValue = historicoInflacao.find(item => item.ano === anoInicial && item.mes === mesInicial);

    if(!initValue){
        return {"erro":"Dados não encontrados para algum período"}
    }

    let currentMes = initValue.mes;
    let currentAno = initValue.ano;


    while (currentAno < anoFinal || (currentAno === anoFinal && currentMes <= mesFinal)) {
        const currentItem = historicoInflacao.find(item => item.ano === currentAno && item.mes === currentMes);
        if (!currentItem) {
            return {"erro":"Dados não encontrados para algum período"};
        }
        
        resultado *= (1 + currentItem.ipca / 100); // é  a mesmo coisa que: resultado = valor * ((1 + (ipca1/100)) * (1 + (ipca2/100)) * (1 + (ipcaN/100)))
        currentMes += 1;

        if (currentMes > 12) {
            currentMes = 1;
            currentAno += 1;
        }
    }

    return {"resultado": `${resultado.toFixed(2)}`};
};
