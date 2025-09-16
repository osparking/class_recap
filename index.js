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
}

const limYH = new Player("임", "요한");
limYH.#score = 10000;
limYH.printShotting();
limYH.increseShooting();
limYH.printShotting();
