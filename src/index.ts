class Player {
  last: string;
  first: string;
  score = 0;
  constructor(last: string, first: string) {
    this.last = last;
    this.first = first;
  }
}

const singer = new Player("갑자기 보다", "턴넬");
