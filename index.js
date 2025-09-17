class Player {
  #score = 0;
  numShooting = 0;
  constructor(last, first) {
    this.last = last;
    this.first = first;
  }

  get score() {
    return this.#score;
  }

  get fullname() {
    // return this.last + " " + this.first;
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

const limYH = new Player("임", "요한");
limYH.score = 10000000;
console.log(limYH.score);
