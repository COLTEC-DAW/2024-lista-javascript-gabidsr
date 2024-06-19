function range(min, max) {
    var array = [];
  	var aux = min;

    for(let i = 0; i < max; i++) {
        array[i] = aux;
      	aux++;
    }
   return array;
}
function range(min, max, i) {
    var array = [];
    var aux = min;
    var j = 0;
     while(aux <= max) {
     		array[j] = aux;
        aux += i;
        j++;
      }
    
  	return array;
}

function reverseArray(array) {
    let array_inverso = array.split('').reverse().join('');
    return array_inverso;
}
function toList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(range(1, 10))
console.log(range(1, 10, 2));
console.log(reverseArray('123456'));
console.log(toList('123456'));