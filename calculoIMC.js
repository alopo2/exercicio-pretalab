let nome = "Angela";
let pesoInformado = 47.7
let alturaInformada = 1.52
let imc = pesoInformado / (alturaInformada*alturaInformada);

    if(imc <= 18.5){
        console.log(`${nome}, o seu IMC é: ${Math.round(imc)}, você está abaixo do peso ideal.`);
    }   else if(imc >= 25 && imc < 30){
        console.log(`${nome}, o seu IMC é: ${Math.round(imc)}, você está com sobrepreso.`);
    }   else if (imc >= 30){
        console.log(`${nome}, o seu IMC é: ${Math.round(imc)}, você está acima do peso ideal.`);
    }   else if (imc > 18.5 || imc < 25){
        console.log(`${nome}, o seu IMC é: ${Math.round(imc)}, você está no peso ideal.`);
    }
