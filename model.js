// Definindo o modelo de reserva
class Reserva {
    constructor(placa, nome, apartamento, bloco, modelo, cor, vaga) {
        this.placa = placa;
        this.nome = nome;
        this.apartamento = apartamento;
        this.bloco = bloco;
        this.modelo = modelo;
        this.cor = cor;
        this.vaga = vaga;
    }
}

// Array para armazenar as reservas
const reservas = [];

// Função para adicionar uma reserva ao array
function adicionarReserva(reserva) {
    reservas.push(reserva);
}

// Função para listar todas as reservas
function listarReservas() {
    return reservas;
}

// Função para remover uma reserva pelo índice
function removerReserva(index) {
    reservas.splice(index, 1);
}
