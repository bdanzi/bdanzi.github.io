// # FASE DI PREPARAZIONE
// Recupero gli elementi di interesse dalla pagina
const grid = document.querySelector('.grid');
const scoreCounter = document.querySelector('.score-counter');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const endGameScreen = document.querySelector('.end-game-screen');
const playAgainButton = document.querySelector('.play-again');
const finalScore = document.querySelector('.final-score');
const turboButton = document.querySelector('#turbo');

// Prepariamo la griglia iniziale
const gridMatrix = [
  ['', '', '', '', '', 'grass', ''],
  ['', 'cones', '', '', '', '', 'fence'],
  ['', '', 'rock', '', '', '', ''],
  ['fence', '', '', '', '', '', ''],
  ['', '', 'grass', '', '', 'water', ''],
  ['', '', '', '', 'cones', '', ''],
  ['', 'water', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', 'rock', ''],
];

// Impostazioni di partenza
let turbo = 1;
let score = 0;
let speed = 500;
let kartPosition = { y: 7, x: 3 };

// # FUNZIONI RELATIVE ALLA GRIGLIA
// Funzione per disegnare la griglia
function renderGrid() {
  // Tolgo gli element di prima per sostituirli..
  grid.innerHTML = '';

  // Per ogni riga della griglia, recupero le celle
  gridMatrix.forEach(function (rowCells) {
    // Per ogni cella, recuper il contenuto
    rowCells.forEach(function (cellContent) {
      // Creo un elemento e gli do classe 'cell'
      const cell = document.createElement('div');
      cell.className = 'cell';

      // Aggiungo anche una classe con lo stesso contenuto della cella
      if (cellContent) cell.classList.add(cellContent);

      // Lo inserisco nella griglia
      grid.appendChild(cell);
    });
  })
}

// Funzione che raggruppa le funzioni di rendering
function renderElements() {
  // Posiziono il kart
  placeKart();

  // Renderizzo la griglia
  renderGrid();

  console.table(gridMatrix);
}

// # FUNZIONI RELATIVE AL KART
// Funzione per posizionare il kart sulla griglia
function placeKart() {
  // Recupero il contenuto della cella in cui dovrò spostare il kart
  const contentBeforeKart = gridMatrix[kartPosition.y][kartPosition.x];

  // Se c'è il bonus, aggiungiamo punti, altrimenti è collisione!
  if (contentBeforeKart === 'coin') getBonusPoints();
  else if (contentBeforeKart) gameOver();

  // Piazzo il kart sulle coordinate fornite
  gridMatrix[kartPosition.y][kartPosition.x] = 'kart';
}

// Funzione per muovere il kart
function moveKart(direction) {
  // Innanzitutto "sollevo" il kart per piazzarlo da un'altra parte
  gridMatrix[kartPosition.y][kartPosition.x] = '';

  // Sposto il kart a seconda della direzione
  switch (direction) {
    case 'left':
      if (kartPosition.x > 0) kartPosition.x--;
      break;
    case 'right':
      if (kartPosition.x < 6) kartPosition.x++;
      break;
    default:
      gridMatrix[kartPosition.y][kartPosition.x] = 'kart';
  }

  // Rirenderizzo tutti gli elementi
  renderElements();
}

// # FUNZIONI RELATIVE AGLI OSTACOLI
// Funzione per far scorrere gli ostacoli
function scrollObstacles() {
  // Rimuovo temporaneamente il kart: non deve scorrere
  gridMatrix[kartPosition.y][kartPosition.x] = '';

  // Verifichiamo se c'è il bonus in gioco
  const isBonusPresent = checkBonusPresence();

  // Rimuovo e metto da parte l'ultima riga
  let lastRow = gridMatrix.pop();

  // Se non c'è il bonus lo inserisco nella riga
  if (!isBonusPresent) lastRow = insertBonus(lastRow);

  // Mescolo casualmente gli elementi
  lastRow = shuffleElements(lastRow);

  // La reinserisco in cima
  gridMatrix.unshift(lastRow);

  // Ridisegno tutto
  renderElements();
}

// Funzione per mescolare casualmente gli elementi di una riga
function shuffleElements(row) {
  for (let i = row.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [row[i], row[j]] = [row[j], row[i]];
  }

  return row;
}

// # FUNZIONI RELATIVE AL BONUS
// Funzione per verificare se c'è un bonus in gioco
function checkBonusPresence() {
  // Verifichiamo se troviamo il bonus
  let bonusFound;

  // Per ogni riga della matrice, recuper le celle
  gridMatrix.forEach(function (rowCells) {
    if (rowCells.includes('coin')) bonusFound = true;
  })
  return bonusFound;
}

// Funzione per inserire il bonus in una riga
function insertBonus(row) {
  // Individuiamo la posizione della prima cella libera
  const emptyIndex = row.indexOf('');

  // Inseriamo lì il bonus
  row[emptyIndex] = 'coin';

  // Restituiamo la riga aggiornata
  return row;
}

// Funzione per guadagnare punti bonus
function getBonusPoints() {
  // Incrementiamo lo score
  score += 30;

  // Aggiorniamo il contatore
  scoreCounter.innerText = score;

  // Diamo un feedback all'utente mettendo la classe bonus
  scoreCounter.classList.add('bonus');

  // La rimuoviamo subito dopo in modo da poterla riassegnare nuovamente
  setTimeout(function () {
    scoreCounter.classList.remove('bonus')
  }, 1000);
}

// # FUNZIONI RELATIVE AL TURBO
// Funzione per accelerare 
function turboBoost() {
  // Se non siamo già al massimo
  if (turbo < 4) {
    // Cambiamo l'immagine' e aumentiamo il turbo per aumentare la lancetta
    turboButton.innerHTML = `<img src="Kart_Crash/images/gauge-${++turbo}.png">`;

    // incremento la velocità 
    incrementSpeed();
  }
}

// # FUNZIONI RELATIVE A PUNTI E VELOCITA'
// Funzione per incrementare i punti
function incrementScore() {
  scoreCounter.innerText = ++score;
}

// Funzione per incrementare la velocità
function incrementSpeed() {
  // Interrompo il ciclo corrente
  clearInterval(gameLoop);

  // Riduco l'intervallo
  speed -= 100;

  // Rilancio un nuovo flusso con la velocità aggiornata
  gameLoop = setInterval(runGameFlow, speed);
}

// # FUNZIONE DI FINE GIOCO
// Funzione di fine gioco
function gameOver() {
  // Interrompo il flusso
  clearInterval(gameLoop);

  // Preparo il punteggio finale
  finalScore.innerText = score;

  // Rivelo la schermata di fine gioco
  endGameScreen.classList.remove('hidden');

  // Metto il focus su gioca ancora
  playAgainButton.focus();
}

// # FUNZIONI RELATIVE AL FLUSSO DI GIOCO
// Funzione che raggruppa le operazioni da svolgere ciclicamente
function runGameFlow() {
  // incremento i punti
  incrementScore();

  //  faccio scorrere gli ostacoli
  scrollObstacles();
}

// # FUNZIONI DI RESET DEL GIOCO
function resetGame() {
  // Ripristina la griglia
  const gridMatrix = [
    ['', '', '', '', '', 'grass', ''],
    ['', 'cones', '', '', '', '', 'fence'],
    ['', '', 'rock', '', '', '', ''],
    ['fence', '', '', '', '', '', ''],
    ['', '', 'grass', '', '', 'water', ''],
    ['', '', '', '', 'cones', '', ''],
    ['', 'water', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', 'rock', ''],
  ];

  // Ripristina il punteggio
  score = 0;
  scoreCounter.innerText = score;

  // Ripristina il turbo
  turbo = 1;
  turboButton.innerHTML = `<img src="Kart_Crash/images/gauge-1.png">`;

  // Ripristina la posizione del kart
  kartPosition = { y: 7, x: 3 };

  // Nascondi la schermata di fine gioco
  endGameScreen.classList.add('hidden');

  // Avvia di nuovo il flusso di gioco
  gameLoop = setInterval(runGameFlow, speed);
}

// # CONTROLLI DI GIOCO
// Click sul bottone turbo
turboButton.addEventListener('click', turboBoost);

// Click sul bottone gioca ancora
playAgainButton.addEventListener('click', resetGame);

// Click sul bottone sinistro
leftButton.addEventListener('click', function () { moveKart('left') });

// Click sul bottone destro
rightButton.addEventListener('click', function () { moveKart('right') });

// Controlli con le freccette
document.addEventListener('keyup', function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      moveKart('left');
      break;
    case 'ArrowRight':
      moveKart('right');
      break;
    case ' ':
      turboBoost();
      break;
    default: return;
  }
})


// # ESECUZIONE FUNZIONI DI GIOCO
// Avvio il flusso di gioco
let gameLoop = setInterval(runGameFlow, speed);