const calculate = document.getElementById('calculate');

function simularinvestimento () {
    const nome = document.getElementById('nome').value;
    const valorAplicado = document.getElementById('valorAplicado').value;
    const juros = document.getElementById('juros').value / 100;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    
    if (nome !== '' && valorAplicado !== '' && juros !== '' && tempo !== '') {
        const valorTotal = (valorAplicado * ((((1 + juros) ** tempo) - 1) / juros)).toFixed(2)
        resultado.textContent = `Olá ${nome}, se você aplicar R$ ${valorAplicado}, à taxa de juros de ${juros * 100}% ao mês, durante ${tempo} meses, acumulará uma poupança de R$ ${valorTotal}`;
    }else {
        resultado.textContent = 'Preencha todos os camps para simular o investimento';
    }
}
calculate.addEventListener('click', simularinvestimento);