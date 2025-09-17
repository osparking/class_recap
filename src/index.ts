class Player {
  public readonly last: string;
  public readonly first: string;
  private score = 0;
  constructor(last: string, first: string) {
    this.last = last;
    this.first = first;
  }

  public callMe() {    
    this.methodA();
  }
  private methodA() {
    console.log('이것은 1급 비밀이다.')
  }
}

const singer = new Player("갑자기 보다", "턴넬");
singer.methodA();
singer.callMe();