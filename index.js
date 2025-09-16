class Player {
  #score = 0;
  numShooting = 0;
  constructor(last, first) {
    this.last = last;
    this.first = first;
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
  }
}

const limYH = new Player("임", "요한");
limYH.updateScore(10000);
console.log(limYH.getScore());
