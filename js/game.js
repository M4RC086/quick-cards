const menuButton = document.getElementById('menu-button');
const cardParent = document.getElementById('card-parent');

const cards = JSON.parse(localStorage.getItem('cards'));
let notUsedCards = [...cards];
let isBack = false;
let currentCard = null;

cardParent.innerHTML = `<button class="card-button">${getNextText()}</button>`;


menuButton.addEventListener('click', gotoMenu);
function gotoMenu(){
  window.location.href = 'index.html';
}


cardParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('card-button')) {
    clickCard();
  }
});

function clickCard(){
  let inBack = false;

  cardParent.innerHTML = `<button class="card-button">${getNextText()}</button>`;
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