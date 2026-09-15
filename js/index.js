const playButton = document.getElementById('play-button');

let cards = [['Comer','Eat'],['Ser/estar','Be'],['Poder','Can'],['Estar de pie', 'Stand'],['Morir', 'Die']];
localStorage.setItem('cards', JSON.stringify(cards));

console.log(cards)

function createCardsTable(cards){
    const cardsTable = document.getElementById('cards-table')
    let table = '<table >';


    for (let i=0; i<cards.length; i++){
        table += `<tr> 
                        <td><p class='table-text'>${cards[i][0]}</p></td> 
                        <td><p class='table-text'>${cards[i][1]}</p></td> 
                        <td><button>Trash</button></td>
                  </tr>`;
    }
    
    table += '</table>'

    cardsTable.outerHTML = table;
}


playButton.addEventListener('click', gotoGame);
function gotoGame(){
    window.location.href = 'game.html';
}


createCardsTable(cards);