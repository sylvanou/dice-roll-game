const die = document.querySelector('#die');
const roll = document.querySelector('#roll');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const tiles = document.querySelectorAll('.tile');
const engineSound = document.querySelector('#engineSound');
const applause = document.querySelector('#applause');
// game state
let player1Position = 0;
let player2Position = 0;
let turn = player1;
