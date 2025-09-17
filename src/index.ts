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
