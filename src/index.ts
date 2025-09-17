class Player {
  constructor(
    public readonly last: string,
    public readonly first: string,
    private _score: number
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

const singer = new Player("제갈", "공명", 0);
console.log(singer.fullName);
singer.score = -1;
