const menuButton = document.getElementById('menu-button');
let cards = JSON.parse(localStorage.getItem('cards'));

console.log(cards);


menuButton.addEventListener('click', gotoMenu);
function gotoMenu(){
    window.location.href = 'index.html';
    
}