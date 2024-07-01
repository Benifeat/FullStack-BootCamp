/** VARIABLES */

/** FOR CLOCK */

const dateDiv = document.querySelector('.date');
const timeDiv = document.querySelector('.time');

const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/** FOR QUOTES */

// Palindrome
const palindromeTextarea = document.querySelector('.the-palindrome');
const getPalindromeBtn = document.querySelector('.get-palindrome');
const checkPalindromeBtn = document.querySelector('.is-palindrome');
const palindromeResult = document.querySelector('.yes-no');

function getRandomPalindrome() {
  const randomIndex = Math.floor(Math.random() * palindromes.length);
  return palindromes[randomIndex];
}

function displayRandomPalindrome() {
  const randomPalindrome = getRandomPalindrome();
  palindromeTextarea.value = randomPalindrome;
  palindromeResult.textContent = ''; // Clear previous result
}

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9א-ת]/g, '').toLowerCase();
  const hebrewMap = {
    ם: 'מ',
    ן: 'נ',
    ץ: 'צ',
    ך: 'כ',
    ף: 'פ'
  };
  const normalizedStr = cleanStr.replace(/[םןץךף]/g, match => hebrewMap[match]);
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
}

function checkPalindrome() {
  const inputText = palindromeTextarea.value.trim();
  if (inputText !== '') {
    const result = isPalindrome(inputText) ? 'Yes!' : 'No:(';
    palindromeResult.textContent = result;
  }
}

getPalindromeBtn.addEventListener('click', displayRandomPalindrome);
checkPalindromeBtn.addEventListener('click', checkPalindrome);

// Gematria
const gematriInput = document.querySelector('.gem-input');
const calculateBtn = document.querySelector('.gem-calc');
const gematriaResult = document.querySelector('.res-calc');

const gematriaValues = {
  א: 1, ב: 2, ג: 3, ד: 4, ה: 5, ו: 6, ז: 7, ח: 8, ט: 9,
  י: 10, כ: 20, ל: 30, מ: 40, נ: 50, ס: 60, ע: 70, פ: 80, צ: 90,
  ק: 100, ר: 200, ש: 300, ת: 400, ך: 500, ם: 600, ן: 700, ף: 800, ץ: 900
};

function calculateGematria() {
  const inputText = gematriInput.value.trim();
  const cleanStr = inputText.replace(/[^א-ת]/g, '');
  const value = cleanStr.split('').reduce((sum, char) => sum + (gematriaValues[char] || 0), 0);
  gematriaResult.textContent = value;
}

calculateBtn.addEventListener('click', calculateGematria);

//DATE & TIME

function displayDate() {
    
    let currDate = new Date();
    let y = currDate.getFullYear();
    let m = currDate.getMonth() + 1;
    let d = currDate.getDate();
    
    let weekDay = weekDays[currDate.getDay()];
    
    dateDiv.innerText = `${weekDay} | ${d}/${m}/${y}`
}

function displayTime() {
    
    let currDate = new Date();
    let hour = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();
    

    if(hour >= 12){
    if(min < 10 && sec < 10){ 
    timeDiv.innerText = `${hour}:0${min}:0${sec} pm`
    }
    else if(sec < 10){
    timeDiv.innerText = `${hour}:${min}:0${sec} pm`
}
    else if(min < 10){
        timeDiv.innerText = `${hour}:0${min}:${sec} pm`
    }
    else{
        timeDiv.innerText = `${hour}:${min}:${sec} pm`
    }
}
else{
    if(min < 10 && sec < 10){ 
        timeDiv.innerText = `${hour}:0${min}:0${sec} am`
        }
        else if(sec < 10){
        timeDiv.innerText = `${hour}:${min}:0${sec} am`
    }
        else if(min < 10){
            timeDiv.innerText = `${hour}:0${min}:${sec} am`
        }
        else{
            timeDiv.innerText = `${hour}:${min}:${sec} am`
        }
}
    let t = setTimeout(displayTime, 500);
}

displayDate();
displayTime();





/** FOR QUOTES */
const quoteDiv = document.querySelector('.the-quote');
const getQuoteBtn = document.querySelector('.get-quote');


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}


function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  quoteDiv.innerHTML = randomQuote;
}


getQuoteBtn.addEventListener('click', displayRandomQuote);


displayRandomQuote();





//anagrams
const newAnagramBtn = document.querySelector('.new-anagram');
const anagramInput = document.getElementById('anagram');
const yourAnagramInput = document.getElementById('your-anagram');
const checkAnagramBtn = document.querySelector('.check-anagram');
const compAnagramInput = document.getElementById('comp-anagram');
const anagramReaction = document.querySelector('.anagram-reaction');

function getRandomAnagram() {
  const randomIndex = Math.floor(Math.random() * anagrams.length);
  return anagrams[randomIndex];
}

function displayRandomAnagram() {
  const randomAnagram = getRandomAnagram();
  anagramInput.value = randomAnagram;
  yourAnagramInput.value = '';
  compAnagramInput.value = '';
  anagramReaction.textContent = '';
}

function findAnagrams(word) {
  const sortedWord = word.split('').sort().join('');
  return anagrams.filter(anagram => anagram !== word && anagram.split('').sort().join('') === sortedWord);
}

function checkAnagram() {
  const anagramWord = anagramInput.value.trim();
  const yourAnagrams = yourAnagramInput.value.trim().split(',').map(anagram => anagram.trim());
  const correctAnagrams = findAnagrams(anagramWord);

  if (yourAnagrams.length === 0) {
    anagramReaction.textContent = 'Please enter an anagram!';
  } else if (yourAnagrams.some(anagram => !correctAnagrams.includes(anagram))) {
    anagramReaction.textContent = 'This is not an anagram!';
  } else if (yourAnagrams.length < correctAnagrams.length) {
    anagramReaction.textContent = 'You did not find all the anagrams!';
  } else {
    anagramReaction.textContent = 'Great, you did find all the anagrams!';
  }

  compAnagramInput.value = correctAnagrams.join(', ');
  compAnagramInput.style.display = 'block';
  document.querySelector('.the-answer').style.display = 'inline';
}

newAnagramBtn.addEventListener('click', displayRandomAnagram);
checkAnagramBtn.addEventListener('click', checkAnagram);




/* WORDS IN WORDS */
const startGameBtn = document.querySelector('.start-game');
const masterWordInput = document.querySelector('.master-word');
const checkWordsBtn = document.querySelector('.check-words');
const yourWordsTextarea = document.querySelector('.your-words');
const yourWordsDiv = document.querySelector('.y-words-div');
const yourPointsP = document.querySelector('.your-points');
const compWordsTextarea = document.querySelector('.comp-words');
const compWordsDiv = document.querySelector('.c-words-div');
const compPointsP = document.querySelector('.comp-points');

let masterWord = '';
let validWords = [];
const MIN_WORD_LENGTH = 4;
const MIN_MASTER_WORD_LENGTH = 7;

function getRandomMasterWord() {
    const longWords = vocab.filter(word => word.length >= MIN_MASTER_WORD_LENGTH);
    return longWords[Math.floor(Math.random() * longWords.length)];
}

function findValidWords(word) {
    return vocab.filter(vocabWord => {
        if (vocabWord.length < MIN_WORD_LENGTH) return false;
        if (vocabWord === word) return false;
        return isComposedOf(vocabWord, word);
    });
}

function isComposedOf(word, masterWord) {
    const masterLetters = masterWord.split('').reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});
    
    for (let letter of word) {
        if (!masterLetters[letter]) return false;
        masterLetters[letter]--;
    }
    return true;
}

function startGame() {
    masterWord = getRandomMasterWord();
    masterWordInput.value = masterWord;
    validWords = findValidWords(masterWord);
    yourWordsTextarea.value = '';
    compWordsTextarea.value = '';
    yourWordsDiv.innerHTML = '';
    compWordsDiv.innerHTML = '';
    yourPointsP.textContent = '0';
    compPointsP.textContent = '0';
    yourWordsTextarea.style.display = 'block';
    compWordsTextarea.style.display = 'none';
    yourWordsDiv.style.display = 'none';
    compWordsDiv.style.display = 'none';
}

function checkWords() {
  const yourWords = yourWordsTextarea.value.toLowerCase().split('\n').filter(word => word.trim() !== '');
  let yourPoints = 0;
  let compPoints = 0;

  yourWordsDiv.innerHTML = '';
  compWordsDiv.innerHTML = '';

  const yourValidWords = new Set();
  const compValidWords = new Set(validWords);
  const commonWords = new Set();

  yourWords.forEach(word => {
      const wordElement = document.createElement('p');
      const wordSpan = document.createElement('span');
      const pointSpan = document.createElement('span');
      
      wordSpan.textContent = word;
      pointSpan.textContent = word.length;
      
      if (validWords.includes(word) && word.length >= MIN_WORD_LENGTH) {
          yourValidWords.add(word);
          if (compValidWords.has(word)) {
              commonWords.add(word);
              wordSpan.classList.add('common-word');
              pointSpan.classList.add('common-word');
          }
      } else {
          pointSpan.classList.add('invalid');
          if (word.length < MIN_WORD_LENGTH) {
              pointSpan.classList.add('too-short');
          } else {
              highlightInvalidLetters(wordSpan, masterWord);
          }
      }
      
      wordElement.appendChild(wordSpan);
      wordElement.appendChild(document.createTextNode(' '));
      wordElement.appendChild(pointSpan);
      yourWordsDiv.appendChild(wordElement);
  });

  compValidWords.forEach(word => {
      const wordElement = document.createElement('p');
      const wordSpan = document.createElement('span');
      const pointSpan = document.createElement('span');
      
      wordSpan.textContent = word;
      pointSpan.textContent = word.length;
      
      if (commonWords.has(word)) {
          wordSpan.classList.add('common-word');
          pointSpan.classList.add('common-word');
      }
      
      wordElement.appendChild(wordSpan);
      wordElement.appendChild(document.createTextNode(' '));
      wordElement.appendChild(pointSpan);
      compWordsDiv.appendChild(wordElement);
  });

  yourPoints = Array.from(yourValidWords)
      .filter(word => !commonWords.has(word))
      .reduce((sum, word) => sum + word.length, 0);
  
  compPoints = Array.from(compValidWords)
      .filter(word => !commonWords.has(word))
      .reduce((sum, word) => sum + word.length, 0);

  yourPointsP.textContent = yourPoints;
  compPointsP.textContent = compPoints;

  yourWordsTextarea.style.display = 'none';
  compWordsTextarea.style.display = 'none';
  yourWordsDiv.style.display = 'block';
  compWordsDiv.style.display = 'block';
}

function highlightInvalidLetters(wordSpan, masterWord) {
  const masterLetters = masterWord.split('').reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
  }, {});
  
  wordSpan.innerHTML = wordSpan.textContent.split('').map(letter => {
      if (masterLetters[letter]) {
          masterLetters[letter]--;
          return letter;
      } else {
          return `<span class="wrong-letter">${letter}</span>`;
      }
  }).join('');
}

startGameBtn.addEventListener('click', startGame);
checkWordsBtn.addEventListener('click', checkWords);