const validarNome = (nome) => {
    return nome.length >= 2;
  };
  
  
  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };
  
  
  const validarTelefone = (telefone) => {
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regexTelefone.test(telefone);
  };

  export function validarusuario(nome, email){
    const nomevalido = validarNome;
    const emailvalido = validarEmail;
    const usuariosValido = nomevalido && emailvalido
  }
  
  export { validarNome, validarEmail, validarTelefone };