const difficultySelect = document.getElementById('difficulty')
const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreElement = document.getElementById('score')
const timeElement = document.getElementById('time')
const endgameElement = document.getElementById('end-game-container')
const settingBtn = document.getElementById('setting-btn')
const settingForm = document.getElementById('settings-form')

const words = [
 'array',
 'bunch',
 'javascript',
 'squid',
 'money',
 'dorime',
 'chicks',
 'quick',
 'patience',
 'industry',
 'moobarrac',
 'minions',
 'master',
 'amatuer',
 'lorem',
 'superficial',
 'control',
 'cause',
 'bad',
 'habits',
 'tolerance',
 'perfect',
 'helper',
 'mathematics',
 'samsung', 
 'iphone',
  'island',
  'drip',
  'molly',
 'puzzle',
 'neighbour',
 'games',
 'couple',
  'family',
  'developer',
  'engineering',
  'dribble',
  'report'
];

let randomWord;
let score = 0;
let time = 20;

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

text.focus();

const timeInterval = setInterval(updateTime, 1000)

function getRandomWord() {
 return words[Math.floor(Math.random() * words.length)]
}

function addWord() {
 randomWord = getRandomWord()
 word.innerHTML = randomWord
}

function updateScore() {
 if(difficulty === 'hard'){
  score += 3;
 }else if(difficulty === 'medium'){
  score += 2;
 }else{
  score +=1;
 }

 scoreElement.innerHTML = score
}

function updateTime() {
 time--;
 timeElement.innerHTML = time + "s"

 if(time === 0) {
  clearInterval(timeInterval)
  gameOver();
 }
}

function gameOver() {
 endgameElement.innerHTML = `
 <h1>Time ran out</h1>
 <p>Your final score is ${score}</p>
 <button onclick="location.reload()">Replay</button>
 `
 endgameElement.style.display = 'flex'
}

addWord()

text.addEventListener('input', e => {
 const insertedText = e.target.value
 if(insertedText.toLowerCase() === randomWord){
  addWord()
  
  e.target.value = ''
  updateScore()
  
  if(difficulty === 'hard'){
   time += 2;
  }else if(difficulty === 'medium'){
   time += 3;
  }else{
   time += 5;
  }

  updateTime()
 }
})

settingBtn.addEventListener('click', () => {
 settings.classList.toggle('hide')
})

settingForm.addEventListener('change', e => {
 difficulty = e.target.value
 localStorage.setItem('difficulty', difficulty)
 time = 20;
 scoreElement.innerHTML = '0'
})