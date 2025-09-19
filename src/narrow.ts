function triple (argu : number | string) {
  if (typeof argu === "number") {
    return argu * 3;
  } else {
    return argu.repeat(3);
  }
}

console.log(triple(100));