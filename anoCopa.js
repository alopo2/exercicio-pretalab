let anoCopa = 1930;
let limite = 2026
    while(anoCopa <= limite){
    //Laço de repetição que repete a instrução até que anoCopa que agora é 1930,
    //seja menor ou igual a 2020
    console.log(`Teve copa em ${anoCopa}`);
    //Chama a função mostra e apresenta na tela os anos que tiveram copa.
    anoCopa = anoCopa + 4;
    //Incrementa em anoCopa +4. 1930, 1934, 1938. Nesse caso, até 2020, por causa do while.
}
console.log("FIM")