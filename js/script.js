function playGame(playerInput){
  console.log(playerInput);

  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'slap';
    }
      else if(argMoveId == 2){
      return 'punch';
    }
      else if(argMoveId == 3){
      return 'bat';
    }
      else{
      printMessage('I do not know what is ' + argMoveId + '.');
      return 'unknown move';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('My move is ' + argComputerMove + ' , your move is ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);

    if(argComputerMove == 'slap' && argPlayerMove == 'punch'){
      printMessage('You win!');
    }
      else if(argComputerMove == 'punch' && argPlayerMove == 'bat'){
      printMessage('You win!');
    }
      else if(argComputerMove == 'slap' && argPlayerMove == 'bat'){
      printMessage('You win!');
    }
      else if(argComputerMove == argPlayerMove){
      printMessage('Draw!');
    }
      else {
      printMessage('You lose!');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Random digit is: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('My move is: ' + computerMove);
  /*
  let playerInput = prompt('Choose your move! 1: Give a slap to pc, 2: Punch pc, 3: Fix this fkr with a baseball bat');
  */
  console.log('You would love to : ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('You would love to ' + playerMove + ' your pc');

  displayResult(playerMove, computerMove);
}
  document.getElementById('use-slap').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('use-punch').addEventListener('click', function(){
  playGame(2);
  });

  document.getElementById('use-bat').addEventListener('click', function(){
  playGame(3);
  });
