const menuButton = document.getElementById('menu-button');
const cardParent = document.getElementById('card-parent');

const cards = JSON.parse(localStorage.getItem('cards'));
let notUsedCards = [...cards];
let isBack = false;
let currentCard = null;

clickCard()

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
  const frontStyle = 'color: #ff4c4c';
  const backStyle = 'color:  #ff9090';

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