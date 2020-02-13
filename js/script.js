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

let playerInput = prompt('Choose your move! 1: Give a slap to pc, 2: Punch pc, 3: Fix this fkr with a baseball bat');

console.log('You would love to : ' + playerInput);

let playerMove = 'start learning new things, like counting from one to three. Your move is not recognized by';

if(playerInput == '1'){
  playerMove = 'slap';
}

else if(playerInput == '2'){
  playerMove = 'punch'
}

else if(playerInput == '3'){
  playerMove='bat'
}

printMessage('You would love to ' + playerMove + ' your pc');

if(computerMove == 'slap' && playerMove == 'slap'){
  printMessage('Draw!');
}

else if(computerMove == 'punch' && playerMove == 'punch'){
  printMessage('Draw!');
}

else if(computerMove == 'bat' && playerMove == 'bat'){
  printMessage('Draw!');
}

else if(computerMove == 'slap' && playerMove == 'punch'){
  printMessage('You win!');
}

else if(computerMove == 'slap' && playerMove == 'bat'){
  printMessage('You win!');
}

else if(computerMove == 'punch' && playerMove == 'slap'){
  printMessage('Pc wins!');
}

else if(computerMove == 'bat' && playerMove == 'punch'){
  printMessage('Pc wins!');
}
