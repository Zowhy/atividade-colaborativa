function exibirDataAtual() {
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    document.getElementById("data").textContent = `Data de hoje: ${dataAtual}`;
}

exibirDataAtual();
