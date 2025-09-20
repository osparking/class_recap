function triple(argu: number | string) {
  if (typeof argu === "number") {
    return argu * 3;
  } else {
    return argu.repeat(3);
  }
}

console.log(triple(100));
console.log(triple("신기하다 "));

const printLetters = (word?: string) => {
  if (word) {
    for (let letter of word) 
      console.log(letter);
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

const eqNarrowDemo = (x: string | number, y: string | boolean) => {
  if (x == y) {
    console.log("같은 값", x.toUpperCase(), y.toUpperCase());
  } else {
    console.log("다른 형");
  }
}

eqNarrowDemo("3", "3");

interface TvShow {
  title: string;
  runTime: number;
}

interface NetFlexShow {
  name: string;
  episodeCount: number;
  episodeRunTime: number;
}
