function saudacao(nome) {
    if (!nome) {
        document.getElementById("mensagem").textContent = "Olá! Bem-vindo ao nosso site!";
    } else {
        const mensagem = `Olá, ${nome}! Bem-vindo ao nosso site!`;
        document.getElementById("mensagem").textContent = mensagem;
    }
}


saudacao("Daniel");
