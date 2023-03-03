// Criar uma página com HTML/JS que vai pedir o valor do salário, o percentual de reajuste e vai escrever na tela (document.write) o resultado com o novo salário.
const salario = +prompt('Digite o salário:')
const reajuste = +prompt('Qual o percentual de reajuste?')

const resultado = salario + (salario * (reajuste / 100))

if ( salario && reajuste ) {
    document.write(`Salario reajustado: R$${resultado}`)
}
