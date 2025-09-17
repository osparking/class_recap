class Player {
  constructor(
    public readonly last: string,
    public readonly first: string,
    private score: number
  ) {}

  public callMe() {
    this.methodA();
  }
  private methodA() {
    console.log("이것은 1급 비밀이다.");
  }

  get fullName() {
    return `${this.last}${this.first}`;
  }
}

const singer = new Player("제갈", "공명", 0);
console.log(singer.fullName);
