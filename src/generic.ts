// 방법 1: 각 타입마다 위와 비슷한 함수를 정의하는 방법

function numberIdentity(id: number): number {
  return id;
}

function stringIdentity(id: string): string {
  return id;
}

// 방법 2: any 형 사용

// function identity(id: any): any {
//   return id;
// }

// 헤법: generic function
function identity<T>(id: T): T {
  return id;
}

console.log(`고양이 : ${identity<string>("나비")}`);
console.log(`주문번호 : ${identity<number>(12345)}`);
console.log(`핫 소스 추가 : ${identity<boolean>(true)}`);

type Cat = {
  name: string;
  age: number;
};

const myCat = identity<Cat>({ name: "나비", age: 16 });
console.log(myCat);

function getRandomElement<T>(elements: T[]): T | undefined {
  if (elements.length === 0) {
    return undefined;
  } else {
    const idx = Math.floor(Math.random() * elements.length);
    return elements[idx];
  }
}

console.log(getRandomElement([1, 33, 2, 4545, -47]));
console.log(getRandomElement<number>([]));

function merge<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

function mergeObj<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

// console.log("156: ", mergeObj(  { song: "가요" }, 156));
console.log("{num: 156}: ", mergeObj(  { song: "가요" }, {num: 156}));

const combined1 = merge(
  { song: "가요" },
  { sport: ["배드민턴", "조깅", "헬쓰"] }
);

const combined2 = merge<{ song: string }, { sport: string[] }>(
  { song: "가요" },
  { sport: ["배드민턴", "조깅", "헬쓰"] }
);

const combined3: { song: string } & { sport: string[] } = merge<
  { song: string },
  { sport: string[] }
>({ song: "가요" }, { sport: ["배드민턴", "조깅", "헬쓰"] });

console.log(JSON.stringify(combined1));
console.log(JSON.stringify(combined2));
console.log(JSON.stringify(combined3));

interface hasLength {
  length: number
}

function isLongEnough<T extends hasLength>(instance: T) : boolean {
  return instance.length >= 3;
}

console.log(isLongEnough("아주좋아"));
// 배열
console.log("배열 - 2 인자: ", isLongEnough([true, false]));

// 함수 - 2 인자
function addTwo(a: number, b: number): number {
  return a + b;
}
console.log("함수 - 2 인자: ", isLongEnough(addTwo));

// 함수 - 3 인자
console.log("배열 - 3 인자: ", 
  isLongEnough((i: string, j: string, k: string) => {
    return i + j + k;
  })
);

function makeListOf<T = number>() : T[] {
  return [];
}

const points = makeListOf();
points.push(146);
points.push(500);

console.log("points: ", JSON.stringify(points));

interface Music {
  title: string;
  player: string;
}

interface YouTube {
  videoUrl : string;
  channel: string;
  runtimesec: number;
}

class MusicList {
  public musicList : Music[] = [];
}

class YouTubeList {
  public youTubeVideos : YouTube[] = [];
}