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