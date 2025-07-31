  const words = [
    "hatred",
    "river",
    "lucky",
    "statue",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "journey",
    "jeopardy",
    "developer",
    "establishment",
    "heroics",
    "javascript",
    "nutrition",
    "revolver",
    "echo",
    "siblings",
    "investigate",
    "horrendous",
    "symptom",
    "laughter",
    "magician",
    "master",
    "definition",
  ];

  const wordInput = document.getElementById("word-input");
  const currentWord = document.getElementById("current-word");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const message = document.getElementById("message");
  const seconds = document.getElementById("seconds");
  const difficultyDisplay = document.getElementById('difficulty')

  // const levels = {
  //   easy: 5,
  //   medium: 3,
  //   hard: 2,
  // };

  // const currentLevel = levels.medium;

  // let time = currentLevel;
  // let score = 0;
  // let isPlay = true;

  // window.addEventListener("load", init);

  // function init() {
  //   seconds.innerHTML = currentLevel;
  //   showWords(words);
  //   wordInput.addEventListener("input", startMatch);
  //   setInterval(countdown, 1000);
  //   setInterval(checkStatus, 50);
  // }

  // function startMatch() {
  //   if (matchWords()) {
  //     isPlay = true;
  //     time = currentLevel + 1;
  //     wordInput.value = "";
  //     showWords(words);
  //     score++;
  //   }

  //   if (score === -1) {
  //     scoreDisplay.innerHTML = 0;
  //   } else {
  //     scoreDisplay.innerHTML = score;
  //   }
  // }

  // function matchWords() {
  //   if (wordInput.value === currentWord.innerHTML) {
  //     message.innerHTML = "Correct";
  //     return true;
  //   } else {
  //     message.innerHTML = "";
  //     return false;
  //   }
  // }

  // function showWords(words) {
  //   const randIndex = Math.floor(Math.random() * words.length);
  //   currentWord.innerHTML = words[randIndex];
  // }

  // function countdown() {
  //   if (time > 0) {
  //     time--;
  //   } else if (time === 0) {
  //     isPlay = false;
  //   }
  //   timeDisplay.innerHTML = time;
  // }

  // function checkStatus() {
  //   if (!isPlay && time === 0) {
  //     message.innerHTML = "Game Over!!!";
  //     score = -1;
  //   }
  // }
  const levels = {
    Easy : 5,
    Medium : 4,
    Hard: 3,
    veryHard: 2
  }



  let currentLevel = levels.Easy
  let time = currentLevel;
  let score = 0
  let isPlay = true;

  window.addEventListener('load', init)

  function init(){
    timer() 
    updateDifficulty()   
    seconds.innerHTML = currentLevel
    showWords(words);
    wordInput.addEventListener('input', setGame);
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
  }

  function timer(){
    if(score <= 5){
      currentLevel = levels.Easy;
    }else if(score <= 10){
      currentLevel = levels.Medium
    }else if(score <= 15){
      currentLevel = levels.Hard
    }else if (score > 15){
      currentLevel = levels.veryHard
    }

    updateDifficulty()
  }

  function updateDifficulty(){
    difficultyDisplay.innerHTML = Object.keys(levels).find(key => levels[key] === currentLevel)
  }

  function showWords(words){
    let randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex]
  }

  function setGame(){
    if (!isPlay && time === 0) {
      score = 0;
      scoreDisplay.innerHTML = score;
      isPlay = true
    }
    if(bothComp()){
      isPlay = true
      timer()
      wordInput.value = '';
      showWords(words);
      time = currentLevel + 1;
      // score = -1
      score++; 
      scoreDisplay.innerHTML = score;
    }

  }

  function bothComp(){
    if(wordInput.value === currentWord.innerHTML){
      message.innerHTML = 'Correct';
      return true;
    }else{
      message.innerHTML = ''
      return false
    }
  }

  function countDown(){
    if(time > 0){
      time--
    }else if(time === 0){
      isPlay = false
    }
    timeDisplay.innerHTML = time;
  }

  function checkStatus(){
    if(!isPlay && time === 0){
      message.innerHTML = 'Game Over!!!'
    }
  }