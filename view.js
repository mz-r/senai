// Função para exibir a tela de cadastro de reserva
function mostrarCadastro() {
    document.getElementById('cadastro').style.display = 'block';
    document.getElementById('lista').style.display = 'none';
}

// Função para exibir a tela de lista de reservas
function mostrarLista() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('lista').style.display = 'block';
}

// Função para limpar o formulário de cadastro
function limparFormulario() {
    document.getElementById('placa').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('apartamento').value = '';
    document.getElementById('bloco').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('vaga').value = '';
}

// Função para exibir as reservas na lista
function atualizarLista() {
    const listaReservas = document.getElementById('listaReservas');
    listaReservas.innerHTML = '';

    const reservas = listarReservas();

    for (let i = 0; i < reservas.length; i++) {
        const reserva = reservas[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Placa: ${reserva.placa}<br>
            Nome: ${reserva.nome}<br>
            Apartamento: ${reserva.apartamento}<br>
            Bloco: ${reserva.bloco}<br>
            Modelo: ${reserva.modelo}<br>
            Cor: ${reserva.cor}<br>
            Vaga: ${reserva.vaga}<br>
            <button onclick="removerReserva(${i})">Remover</button>
        `;
        listaReservas.appendChild(listItem);
    }
}


// Inicialização da lista de reservas
atualizarLista();
