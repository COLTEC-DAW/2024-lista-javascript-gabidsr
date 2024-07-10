function ordenacao(vetor) {
    for(let i = 0; i < vetor.length; i++) {
      for(let j = i + 1; j < vetor.length; j++) {
        if (vetor[i] > vetor[j]) {
            let aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
      }
    }
  return vetor
}

function cifraDeCesar(str) {
    var re = /[\W_]/g;
    str = str.toUpperCase().replace(re, '');
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'A':
                str[i] = 'D';
                break;
            case 'B':
                str[i] = 'E';
                break;
            case 'C':
                str[i] = 'F';
                break;
            case 'D':
                str[i] = 'G';
                break;
            case 'E':
                str[i] = 'H';
                break;
            case 'F':
                str[i] = 'I';
                break;
            case 'G':
                str[i] = 'J';
                break;
            case 'H':
                str[i] = 'K';
                break;
            case 'I':
                str[i] = 'L';
                break;
            case 'J':
                str[i] = 'M';
                break;
            case 'K':
                str[i] = 'N';
                break;
            case 'L':
                str[i] = 'O';
                break;
            case 'M':
                str[i] = 'P';
                break;
            case 'N':
                str[i] = 'Q';
                break;
            case 'O':
                str[i] = 'R';
                break;
            case 'P':
                str[i] = 'S';
                break;
            case 'Q':
                str[i] = 'T';
                break;
            case 'R':
                str[i] = 'U';
                break;
            case 'S':
                str[i] = 'V';
                break;
            case 'T':
                str[i] = 'W';
                break;
            case 'U':
                str[i] = 'X';
                break;
            case 'V':
                str[i] = 'Y';
                break;
            case 'W':
                str[i] = 'Z';
                break;
            case 'X':
                str[i] = 'A';
                break;
            case 'Y':
                str[i] = 'B';
                break;
            case 'Z':
                str[i] = 'C';
                break;
            default:
                console.log("Letra nao encontrada");
        }
    }
}

console.log(ordenacao([5, 6, 8, 0, 2]));
console.log(cifraDeCesar("cifra"));
