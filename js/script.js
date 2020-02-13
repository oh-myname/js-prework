let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Random digit is: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'slap';
}

else if(randomNumber == 2){
  computerMove = 'punch'
}

else if(randomNumber == 3){
  computerMove = 'bat'
}

printMessage('My move is: ' + computerMove);
