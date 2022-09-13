//Prática Guiada
//Exercicio 1 e 2

const megaSena = [
  [1, 3, 5, 7],
  [0, 2, 4, 6],
  [4, 8, 12, 18],
  [5, 10, 15, 20]
]

// if (megaSena.length === 4) {
//   for (let i = 0; i < megaSena.length; i++) {
//     console.log(`Sorteio ${i+1}: ${megaSena[i]}`);
//     for (let j = 0; j < megaSena[i].length; j++) {
//       console.log(megaSena[i][j]);
//     }
//   }

// } else {
//   console.log("É necessário alterar o número de itens do array")
// }

//Exercicio 3

// if (megaSena.length === 4) {
//   for (let i in megaSena) {
//     console.log(`Sorteio ${Number(i)+1}: ${megaSena[i]}`);
//     for (let j = 0; j < megaSena[i].length; j++) {
//       console.log(megaSena[i][j]);
//     }
//   }
// }else {
//   console.log("É necessário alterar o número de itens do array")
// }

//Exercicio 4

// if (megaSena.length === 4) {
//   for (let i in megaSena) {
//     let sorteio = `Sorteio ${Number(i) + 1}: `
//     for (let j of megaSena[i]) {
//       sorteio += j + " , "
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("É necessário alterar o número de itens do array")
// }

//Exercicio de fixação:

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// Parte 1

for (let i = 0; i < filmes.length; i++) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);

  for (let j = 0; j < filmes[i].length; j++) {
    console.log(`Tem no elenco: ${filmes[i][j].elenco}.`);
  
  }
}

//Parte 2

// for (let i in filmes) {
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);

//   let elenco = `Tem no elenco: ${filmes[i].elenco}.`
//   for (let j of filmes[i].elenco) {
//     console.log(elenco)
//   }
// }

//Parte 3

// for (let i in filmes) {
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);

//   let elenco = `Tem no elenco: ${filmes[i].elenco}.`
//   for (let j of filmes[i].elenco) {
//     console.log(elenco)
//   }
// }

// const arrayDeArrays = [
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
//   ];
  
//   for(let i = 0; i < arrayDeArrays.length; i++){
  
//     for(let j = 0; j < arrayDeArrays[i].length; j++){
//       console.log(arrayDeArrays[i][j]);
//     }
  
//   }