/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
  // ESCREVA SEUS TESTES ABAIXO:
  const functionTest = productDetails('Alcool gel', 'Máscara');
  // Teste que o retorno da função é um array.
  assert.ok(functionTest, typeof Array);
  // Teste que o array retornado pela função contém dois itens dentro.
  assert.strictEqual(Object.keys(functionTest).length, 2);
  // Teste que os dois itens dentro do array retornado pela função são objetos.
  assert.ok(Object.values(functionTest), typeof Object);
  // Teste que os dois objetos são diferentes entre si.
  const object1 = Object.entries(functionTest[0]);
  const object2 = Object.entries(functionTest[1]);
  assert.notDeepStrictEqual(object1, object2);
  // (Difícil) Teste que os dois productIds terminam com 123.
  const end1 = functionTest[0].details.productId.endsWith('123');
  const end2 = functionTest[1].details.productId.endsWith('123');
  const concatEnds = end1 && end2;
  assert.ok(concatEnds, true);
