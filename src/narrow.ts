function triple(argu: number | string) {
  if (typeof argu === "number") {
    return argu * 3;
  } else {
    return argu.repeat(3);
  }
}

console.log(triple(100));
console.log(triple("신기하다 "));

const printLetters = (word: string | null) => {
  if (word) {
    word.split("").forEach((letter) => console.log(letter));
  } else {
    console.log(`제공된 인자${word}는 스트링이 아니다.`);
  }
};

const elt = document.getElementById("someId");
if (elt) {
  console.log(elt);
} else {
  console.log(elt);
}