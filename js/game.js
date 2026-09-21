const menuButton = document.getElementById('menu-button');
const cardParent = document.getElementById('card-parent');

const cards = JSON.parse(localStorage.getItem('cards')) || [];
let notUsedCards = [...cards];
let isBack = false;
let currentCard = null;

clickCard()

menuButton.addEventListener('click', gotoMenu);
function gotoMenu(){
  window.location.href = 'index.html';
}


let isFlipping = false;

cardParent.addEventListener('click', (e) => {
  if (!e.target.classList.contains('card-button') || isFlipping) return;
  isFlipping = true;
  e.target.classList.add('flip-out');
  setTimeout(() => {
    clickCard();
    isFlipping = false;
  }, 150);
});

function clickCard(){
  const frontStyle = '--card-bg: #fdfcf8; --card-fg: #1d2a3a; --card-accent: #d64545; --card-rule: #bcd2e4';
  const backStyle  = '--card-bg: #fff1a3; --card-fg: #1d2a3a; --card-accent: #d64545; --card-rule: #e6d27f';

  if (!isBack){ //front
    cardParent.innerHTML = `<button class="card-button" style="${frontStyle}">${getNextText()}</button>`;
  }else{
    cardParent.innerHTML = `<button class="card-button" style="${backStyle}">${getNextText()}</button>`;
  }
  
}

function getNextText() {
  console.log(notUsedCards);

  if (isBack) {
    isBack = false;
    return currentCard[1];
  }

  // moving to a new card
  if (notUsedCards.length === 0) return 'No cards left';

  let index = Math.floor(Math.random() * notUsedCards.length);
  currentCard = notUsedCards[index];
  notUsedCards.splice(index, 1);

  isBack = true;
  return currentCard[0];
}