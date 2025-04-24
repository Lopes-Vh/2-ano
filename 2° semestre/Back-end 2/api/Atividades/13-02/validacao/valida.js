function validaNome(nome){
    const regexNome =  /^[a-zA-ZÀ-Ỹ\s\-']+$/;
    const isvalid = nome.length >=2 && regexNome.test(nome);
    return isvalid;
}

function validaEmail(email){
    const regexEmail =  /^[^@]+@[^@]+\.[^@]+$/;
    const isvalid = email.length >=2 && regexEmail.test(email);
    return isvalid;
}

function validaTelefone(){
    const regexTelefone =  /^[a-zA-ZÀ-Ỹ\s\-']+$/;
    const isvalid = Telefone.length >=2 && regexTelefone.test(Telefone);
    return isvalid;
}

