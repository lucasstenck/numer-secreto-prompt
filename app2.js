let tentativas;
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() *numeroMaximo);
let chute = 1;


while (tentativas != numeroSecreto){
    tentativas = prompt ('Escolha um número de 1 a 100')

    if (tentativas < numeroSecreto){
        alert ('O Número Secreto é maior')
    } else if (tentativas > numeroSecreto){
        alert ('O Número Secreto é menor')
    } else {
        alert (`Você acertou o Número Secreto (${numeroSecreto}) com (${chute}) tentativas, parabéns!`)
    }
    chute=chute+1;
}