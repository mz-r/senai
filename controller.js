// Função para salvar uma reserva
function salvarReserva() {
    const placa = document.getElementById('placa').value;
    const nome = document.getElementById('nome').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    const reserva = new Reserva(placa, nome, apartamento, bloco, modelo, cor, vaga);

    adicionarReserva(reserva);
    limparFormulario();
    atualizarLista();

    // Exibe uma mensagem de sucesso
    alert('Reserva cadastrada com sucesso!');
}

// Inicialização da aplicação
mostrarCadastro();

// Função para remover uma reserva pelo índice
function removerReserva(index) {
    reservas.splice(index, 1);
    atualizarLista(); // Atualize a lista após remover a reserva
}
