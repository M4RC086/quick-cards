const menuButton = document.getElementById('menu-button');
const cardParent = document.getElementById('card-parent');

const cards = JSON.parse(localStorage.getItem('cards'));
let notUsedCards = [...cards];
cardParent.innerHTML = `<button class="card-button">${getNextCard()}</button>`;


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
  let nextCard = getNextCard();
  cardParent.innerHTML = `<button class="card-button">${nextCard}</button>`;
}

function getNextCard(){
  console.log(notUsedCards);
  if (notUsedCards.length === 0){
    return 'No cards left';
  }

  let index = Math.floor(Math.random() * notUsedCards.length);
  let card = notUsedCards[index];
  notUsedCards.splice(index, 1);
  return card;
}