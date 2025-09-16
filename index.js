class Player {
  constructor(last, first) {
    this.last = last;
    this.first = first;
  }
  doSth() {
    console.log(this.last + this.first + "브라보!");
  }
}

const sonHM = new Player("박", "지성");
sonHM.doSth();

const parkJS = new Player("손", "흥민");
parkJS.doSth();