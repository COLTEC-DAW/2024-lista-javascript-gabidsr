function min(a, b) {
    if(a > b) {
        return b;
    }
    else {
        return a;
    }
}
function max(a, b) {
    if(a > b) {
        return a
    }
    else {
        return b;
    }
}
function mod2(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function mod(num, mod) {
    if(num % mod == 0) {
        return true;
    }
    else {
        return false;
    }
}
function countChars(frase, c) {
    var re = /[\W_]/g;
    frase = frase.toLowerCase().replace(re, '');
    var ocorrencias;

    for(let i = 0; i < frase.value.length()-1; i++) {
        if (frase[i] == c) {
            ocorrencias++;
        }
    }
    return ocorrencias;
}
console.log(min(1, 10));
console.log(max(1, 10));
console.log(mod2(5));
console.log(mod(9, 3));
console.log (countChars("An na", 'a'));