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
function identity<T>(id: T) : T {
  return id;
}

console.log(`고양이 : ${identity<string>("나비")}`);
console.log(`주문번호 : ${identity<number>(12345)}`);
console.log(`핫 소스 추가 : ${identity<boolean>(true)}`);