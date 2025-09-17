class Player {
  #score = 0;
  numShooting = 0;

  static description = "게임 참여자";

  static newPlayer() {
    return new Player("김", "길동");
  }

  constructor(last, first) {
    this.last = last;
    this.first = first;
  }

  get score() {
    return this.#score;
  }

  set fullname(newFullname) {
    const [last, first] = newFullname.split(" ");
    this.last = last;
    this.first = first;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("성적에 음수를 배정할 수 없습니다.");
    }
    this.#score = newScore;
  }

  get fullname() {
    return `${this.last} ${this.first}`;
  }

  increseShooting() {
    this.numShooting++;
  }
  printShotting() {
    console.log(this.numShooting);
  }

  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
    this.#topSecret();
  }
  #topSecret() {
    console.log("쉿, 우리끼리 얘긴데...");
  }
}

class AdminPlayer extends Player {
  area = "홍보"

  constructor(last, first, area) {
    super(last, first);
    this.area = area;
  }
}

const admin = new AdminPlayer("임", "요한", ['기획', '재정']);

const limYH = new Player("임", "요한");
// limYH.fullname = "김 길동";
// console.log(limYH);
console.log(Player.description);
console.log(limYH.description);

const newPlayer = Player.newPlayer();
console.log(newPlayer);
