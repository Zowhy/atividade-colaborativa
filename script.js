function exibirDataAtual() {
    const dataAtual = new Date().toLocaleDateString();
    document.getElementById("data-exibicao").textContent = `Data de hoje: ${dataAtual}`;
}
