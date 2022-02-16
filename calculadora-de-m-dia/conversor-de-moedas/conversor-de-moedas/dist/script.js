function converter() {
  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function converterE() {
  var valorElementoEuro = document.getElementById("valorEuro");

  var valorE = valorElementoEuro.value;
  var valorEmEuroNumerico = parseFloat(valorE);

  var valorEmEuro = valorEmEuroNumerico * 6;
  console.log(valorEmEuro);

  var elementoValorConvertidoE = document.getElementById("valorConvertidoE");
  var valorConvertidoE = "O resultado em Real é R$ " + valorEmEuro;
  elementoValorConvertidoE.innerHTML = valorConvertidoE;
}
function converterB() {
  var valorElementoBit = document.getElementById("valorBitcoin");

  var valorB = valorElementoBit.value;
  var valorEmBitNumerico = parseFloat(valorB);

  var valorEmBit = valorEmBitNumerico * 246594.38;
  console.log(valorEmBit);

  var elementoValorConvertido = document.getElementById("valorConvertidoB");
  var valorConvertidoB = "O resultado em Real é R$ " + valorEmBit;
  elementoValorConvertido.innerHTML = valorConvertidoB;
}