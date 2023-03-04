const notaProva1 = 5;
const notaProva2 = 4;
const trabalhoExtra = 5;

let media = (notaProva1 + notaProva2 + trabalhoExtra) / 3;

if (media >= 7) {
  console.log("Parabés, você passou com média: " + media);
} else if (media > 5 && media < 7) {
  console.log("você ficou de recuperação, com média: " + media);
} else {
  console.log("Reprovado, com média:" + Math.round(media));
}