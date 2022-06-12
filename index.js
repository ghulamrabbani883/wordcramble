const buttonHandle = document.getElementById("button-handle");
const message = document.getElementById("msg");
const inputWOrd = document.getElementById("input-word");

let inputGuessed = "";
let play = false;
let newWords = "";
let randomWrds = "";

let swords = [
  "python",
  "java",
  "javascript",
  "c++",
  "c",
  "ruby",
  "php",
  "c#",
  "html",
  "css",
  "go",
  "reactjs",
  "angular",
  "swift",
  "scala",
  "nodejs",
  "android",
  "sql",
];

const createNewWord = () => {
  let randomNum = Math.floor(Math.random() * swords.length);
  let newgeneratedWords = swords[randomNum];
  return newgeneratedWords;
};
const scramble = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

buttonHandle.addEventListener("click", () => {
  if (!play) {
    play = true;
    buttonHandle.innerText = "Guess";
    inputWOrd.classList.remove("hide-input");
    newWords = createNewWord();
    randomWrds = scramble(newWords.split(""));
    message.innerText = `Guess the correct word for : ${randomWrds.join("")}`;
  } else {
    inputGuessed = inputWOrd.value;
    if (inputGuessed === newWords) {
      play = false;
      message.innerText = `It's correct, the word is ${newWords}`;
      buttonHandle.innerText = "Start Again";
      inputWOrd.classList.add("hide-input");
      inputWOrd.value = "";
    } else {
      message.innerText = `It's wrong guess, Please try agian ${randomWrds.join("")}`;
      buttonHandle.innerText = "Guess";
    }
  }
});
