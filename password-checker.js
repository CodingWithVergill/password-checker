async function execute() {
  const password = document.getElementById("password").value;
  const easterEgg = "you know";
  if (password === easterEgg) trigger();
  await loading();
  setTimeout(() => {
    checkStrength();
    document.getElementById("result").classList.remove("dots");
  }, 2000);
}
async function checkStrength() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");
  const easterEgg = "you know";

  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const noRepeat = !/(.)\1{3,}/.test(password);

  if (password === "") {
    result.textContent = "Enter your password😐";
  } else if (password === easterEgg) {
    trigger();
  } else if (password.length < 8) {
    result.textContent = "Too short,try add more🥴";
    result.style.color = "yellow";
  } else if (!hasNumber && !hasSymbol) {
    result.textContent = "foolishness😈";
    result.style.color = "red";
  } else if ((hasNumber && !hasSymbol) || (!hasNumber && hasSymbol)) {
    result.textContent = "Too easy to guess😛";
    result.style.color = "orange";
  } else if (hasNumber && hasSymbol && hasLower && !hasUpper) {
    result.textContent = "Not bad👍,try add uppercase";
    result.style.color = "green";
  } else if (hasNumber && hasSymbol && hasLower && hasUpper && !noRepeat) {
    result.textContent = "even better😮,try make pattern and no repeat 3 times";
    result.style.color = "darkblue";
  } else if (hasNumber && hasSymbol && hasLower && hasUpper && noRepeat) {
    result.textContent = "Boom baby!🔥🔥";
    result.style.color = "cyan";
  } else if (hasNumber && hasSymbol) {
    result.textContent = "add more vro🥀";
    result.style.color = "black";
  }

  result.classList.remove("show");
  setTimeout(() => {
    result.classList.add("show");
  }, 10);
}
async function loading() {
  const result = document.getElementById("result");
  result.style.opacity = 1;
  result.textContent = "Loading";
  result.classList.add("dots");
  result.style.color = "black";
}

document.body.classList.add("normal");
const lyricsContainer = document.getElementById("lyrics-container");
const audio = document.getElementById("bg-music");
const btn = document.getElementById("btn");
const pwContainer = document.querySelector(".container");
const lyrics = [
  { time: 0, text: "you know" },
  { time: 2, text: "you know" },
  { time: 3, text: "where you are with" },
  { time: 7, text: "you know where you are with" },
  { time: 11, text: "floor collapsing" },
  { time: 13, text: "flooooting" },
  { time: 16, text: "bouncing back and-" },
  { time: 18, text: "ONE DAAAYYYYY" },
  { time: 21, text: "i am gonna grow wings" },
];
let currentLine = 0;

function showLyric() {
  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;

    if (
      currentLine < lyrics.length &&
      currentTime >= lyrics[currentLine].time
    ) {
      const line = document.createElement("p");
      line.textContent = lyrics[currentLine].text;
      lyricsContainer.appendChild(line);
      lyricsContainer.scrollTop = lyricsContainer.scrollHeight; //auto scroll
      currentLine++;

      if (lyrics[currentLine].time === 2) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 2000);
      }
      if (lyrics[currentLine].time === 3) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 2000);
      }
      if (lyrics[currentLine].time === 7) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 3000);
      }
      if (lyrics[currentLine].time === 11) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 3500);
      }
      if (lyrics[currentLine].time === 13) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 1850);
      }
      if (lyrics[currentLine].time === 16) {
        line.classList.add("left");
        setTimeout(() => {
          line.classList.add("hidden");
        }, 3000);
      }
      if (lyrics[currentLine].time === 18) {
        setTimeout(() => {
          line.classList.add("hidden");
        }, 1870);
      }
      if (lyrics[currentLine].time === 21) {
        line.classList.add("shine");
        setTimeout(() => {
          line.classList.add("hidden");
        }, 2000);
      }
    }
  });
}

function trigger() {
  document.body.classList.remove("normal");
  document.body.classList.add("dark-mode");
  pwContainer.classList.add("hidden");
  audio.play();
  showLyric();
}
//done
