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
    for (let letter of word) console.log(letter);
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
};

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

const getTotalRuntime = (watchStory: TvShow | NetFlexShow): number => {
  if ("episodeCount" in watchStory) {
    return watchStory.episodeCount * watchStory.episodeRunTime;
  } else {
    return watchStory.runTime;
  }
};

console.log(getTotalRuntime({ title: "명량", runTime: 130 }));
console.log(
  getTotalRuntime({ name: "오징어게임", episodeCount: 6, episodeRunTime: 60 })
);

class MyClass {
  constructor(public mood: string, public point: number){}
}

let xzy = new MyClass("좋아", 100);
console.log(xzy instanceof MyClass);

const today = new Date();
console.log("날짜인가?",  today instanceof Date);

const dateObj  = new Date("2025. 9. 21.");
console.log(dateObj.toLocaleDateString());

const getTimeAfterDays = (dayObjOrStr: Date | string, days: number): string => {
  if (dayObjOrStr instanceof Date) {
    // 날짜 객체이므로 날짜 증가 바로 가능
    dayObjOrStr.setDate(dayObjOrStr.getDate() + days);
  } else {
    dayObjOrStr = new Date(dayObjOrStr);
    dayObjOrStr.setDate(dayObjOrStr.getDate() + days);
  }
  return dayObjOrStr.toLocaleString();
};
