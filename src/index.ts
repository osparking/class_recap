class Player {
  public readonly last: string;
  public readonly first: string;
  public score = 0;
  constructor(last: string, first: string) {
    this.last = last;
    this.first = first;
  }
}

const singer = new Player("갑자기 보다", "턴넬");
singer.score = 99;