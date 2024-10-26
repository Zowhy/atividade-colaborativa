function exibirDataAtual() {
    const dataAtual = new Date().toLocaleDateString();
    document.getElementById("data").textContent = `Data de hoje: ${dataAtual}`;
}


exibirDataAtual();
