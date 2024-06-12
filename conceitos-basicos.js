function triangulo(num_t) {
    var elementos = "#";

    for (var i = 0; i < num_t; i++) {
      console.log(elementos);
      elementos += "#";
    }
}
function xadrez(num_x) {
  var elementos = "# # # #";
  for (var i = 0; i < num_x; i++) {
    if (i % 2 !== 0) {
      console.log(" " + elementos);
    }
    else {
      console.log(elementos);
    }
  }
}
function palindromo(str) {
  var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');
  let str_inversa = str.split('').reverse().join('');
  return str === str_inversa;
}
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
      }
      else if (i % 5 === 0) {
        console.log("Buzz");
      }
      else if (i % 3 === 0) {
        console.log("Fizz");
      }
    }
  }

triangulo(5);
xadrez(4);
palindromo("A man, a plan, a canal.Panama");
fizzBuzz();
