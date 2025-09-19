const msgOrAges: (number | string)[] = [];

const counts: Array<number> = [1, 2, 3];
const messages: Array<string> = ["한 그루", "갑자기", "음악과 찻잔 사이"];

abstract class Employee {
  constructor(public last: string, public first: string) {}
  greet(): void {
    console.log("안녕하세요?");
  }
  abstract getPay(): number;
}

class FullTimeEmp extends Employee {
  constructor(
    public last: string,
    public first: string,
    private salary: number
  ) {
    super(last, first);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmp extends Employee {
  constructor(
    public last: string,
    public first: string,
    private payPerHour: number,
    private hoursWorked: number
  ) {
    super(last, first);
  }
  getPay(): number {
    return this.payPerHour * this.hoursWorked;
  }
}

const officeGirl = new FullTimeEmp("김", "미숙", 2500000);
const gymTrainer = new PartTimeEmp("진", "종민", 15000, 170);

console.log(`관리사무소 직원 봉급: ${officeGirl.getPay()}`);
console.log(`체력단련실 직원 봉급: ${gymTrainer.getPay()}`);

class Player {
  constructor(
    public readonly last: string,
    public readonly first: string,
    protected _score: number
  ) {}

  public callMe() {
    this.methodA();
  }
  private methodA() {
    console.log("이것은 1급 비밀이다.");
  }

  get fullName(): string {
    return `${this.last}${this.first}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("음수 성적은 불가능합니다.");
    } else {
      this._score = this.score;
    }
  }
}

class SuperPlayer extends Player {
  public skillSet: string[] = [];
  addScoreBy10() {
    this._score = this._score + 10;
    console.log(`성적: ${this._score}`);
  }
}

const singer = new Player("제갈", "공명", 0);
console.log(singer.fullName);
// singer.score = -1;

const superStar = new SuperPlayer("던", "워릭", 90);
superStar.addScoreBy10();

interface Colorful {
  color: string;
}

class Vehicle implements Colorful {
  constructor(public color: string) {}
}

const k9 = new Vehicle("ivory");

class ElectricFan implements Colorful, Operatable {
  set value(newRunStep: number) {
    this._runStep = newRunStep;
  }

  constructor(
    public color: string,
    private _runStep: number,
    public brand: string
  ) {}

  get runStep() {
    return this._runStep;
  }

  set runStep(newRunStep: number) {
    this._runStep = newRunStep;
  }

  setRunStep(newRunStep: number): void {
    this._runStep = newRunStep;
  }

  describeStatus() {
    console.log(
      `이 ${this.color} ${this.brand} 선풍기는 ${this._runStep} 단으로 구동되고 있다.`
    );
  }
}

const myFan = new ElectricFan("검정색", 1, "한일");
myFan.describeStatus();
myFan.value = 2;
myFan.describeStatus();
myFan.setRunStep(3);
myFan.describeStatus();

interface Operatable {
  runStep: number;
  setRunStep(newRunStep: number): void;
}

const password = document.querySelector("#password")!;
const username = document.querySelector<HTMLInputElement>("#username")!;
console.log(username.value);
username.value = "bumTiger";
console.log(username.value);

const submitBtn = document.querySelector<HTMLButtonElement>(".btn")!;
