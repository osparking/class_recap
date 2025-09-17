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
}

const singer = new Player("갑자기 보다", "턴넬", 0);
singer.callMe();
