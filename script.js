function saudacao(nome) {
    const mensagem = `Olá, ${nome}! Bem-vindo ao nosso site!`;
    document.getElementById("mensagem").textContent = mensagem;
}


saudacao("Daniel");
