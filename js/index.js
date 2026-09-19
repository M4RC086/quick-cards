const cardsTableParent = document.getElementById('cards-table');
const importInput = document.getElementById('import-input');

let cards = JSON.parse(localStorage.getItem('cards')) ||
    [];

createCardsTable(cards);

function createCardsTable(cards){
    let table = '<table>';
    table += `<tr>
                <td><input type="text" id="front-input" placeholder="front"></td>
                <td><input type="text" id="back-input" placeholder="back"></td>
                <td><button class="table-button" id="add-card-button">Add</button></td>
              </tr>`;

    for (let i = 0; i < cards.length; i++){
        table += `<tr data-index="${i}">
                        <td><p class="table-text">${cards[i][0]}</p></td>
                        <td><p class="table-text">${cards[i][1]}</p></td>
                        <td><button class="table-button" id="trash-button">Trash</button></td>
                  </tr>`;
    }

    table += '</table>';
    cardsTableParent.innerHTML = table;
    localStorage.setItem('cards', JSON.stringify(cards));
}

function addCard(){
    const frontInput = document.getElementById('front-input');
    const backInput = document.getElementById('back-input');
    const front = frontInput.value.trim();
    const back = backInput.value.trim();

    if (!front || !back) return; // Don't add blank cards

    cards.push([front, back]);
    createCardsTable(cards);
}

function deleteCard(index){
    cards.splice(index, 1);
    createCardsTable(cards);
}


cardsTableParent.addEventListener('click', function(e){
    if (e.target.id === 'add-card-button'){
        addCard();
    } else if (e.target.id == 'trash-button'){
        const row = e.target.closest('tr');
        const index = Number(row.dataset.index);
        deleteCard(index);
    }
});

document.getElementById('export-button').addEventListener('click', exportJSON);
function exportJSON() {
  const jsonString = JSON.stringify(cards, null, 2); // pretty-printed
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = "quick-cards.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url); // cleanup
}

const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function(){
    window.location.href = 'game.html';
});



importInput.addEventListener('change', (event) => {
  const file = event.target.files[0]; // first selected file

  const reader = new FileReader();
  
  reader.onload = (e) => {
    const text = e.target.result;
    cards = JSON.parse(text);
    createCardsTable(cards);
    console.log(JSON.parse(text));
  };
  reader.readAsText(file);
});


