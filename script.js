let userNumber = +prompt('Write your number, please');
let userNumberToMinus = +prompt('How much to take from the previous result?');
let userNumberToAdd = +prompt('How much to add from the previous result?');
let userNumberToMultiply = +prompt('How much to multiply from the previous result?');
let userNumberToDivide = +prompt('How much to divide from the previous result?');

let result = ((((userNumber - userNumberToMinus) + userNumberToAdd) * userNumberToMultiply ) / userNumberToDivide)

alert('((((' + userNumber + ' '+ '-' + ' ' + userNumberToMinus + ')' + '+' + userNumberToAdd + ')' + ' ' + '*' + userNumberToMultiply + ')' + ' ' + '/' + ' ' + userNumberToDivide + ')' + ' ' + '=' + ' ' + result);

