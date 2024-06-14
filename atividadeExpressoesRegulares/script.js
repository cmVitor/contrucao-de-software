/*Implementação de um exemplo de validação de expressões regulares utilizando a linguagem javascript
  Nesse exemplo não utilizei input do usuario, pois para aplicar esse script o login e a senha serão extraídos do DOM 
*/



// Função para validar o login
function validarLogin(login) {
    const loginRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{5,30}$/;
    return loginRegex.test(login);
}

// Função para validar a senha
function validarSenha(senha) {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,12}$/;
    return senhaRegex.test(senha);
}


//validação do login
if (validarLogin(login)) {
    console.log('Login válido.');
} else {
    console.log('Login inválido. O login deve ter entre 5 e 30 caracteres e conter letras, números e caracteres especiais.');
}

//validação da senha
if (validarSenha(senha)) {
    console.log('Senha válida.');
} else {
    console.log('Senha inválida. A senha deve ter entre 8 e 12 caracteres e conter pelo menos uma letra maiúscula, um número e um caractere especial.');
}



