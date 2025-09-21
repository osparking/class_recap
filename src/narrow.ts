class CatType {
  constructor (public hasMom: boolean){};
}

class DogType {
  constructor(public regiNumber: number){};
}

const makeSound = (pet : CatType | DogType) => {
  if (isCat(pet)) {
    return `야옹. 엄마 있다:`;
  } else {
    return "멍멍";
  }
}

function isCat(pet : CatType | DogType){
  return (pet as CatType).hasMom !== undefined;
}

console.log(makeSound({hasMom: true}));