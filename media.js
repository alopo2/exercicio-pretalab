//== comparação (valor)
//
//=== estritamente igual (valor e tipo)

//&& = E
//|| = OU

//Joãozinho, tirou 5 na primeira prova, e tirou 7 na segunda prova. A média para que João seja aprovado é: 6

let notaProva1 = 5;
let notaProva2 = 9;

let media = (notaProva1 + notaProva2) / 2;

if(media >= 6){
    console.log("João, arrasou. Sambou na cara da sociedade! Sua média foi: " + Math.round(media));
} else if(media < 6 && media > 5) {
    console.log("João, não desista. Faça uma pesquisa e me traga na segunda. Sua média foi: " + Math.round(media))
} else {
    console.log(`Deu ruim, boy! Sua média foi:  ${media}`);
}