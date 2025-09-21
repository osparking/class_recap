class CatType {
  constructor (public hasMom: boolean){};
}

class DogType {
  constructor(public regiNumber: number){};
}

const makeSound = (pet : CatType | DogType) => {
  if (isCat(pet)) {
    return `야옹. 엄마 있다: ${pet.hasMom}`;
  } else {
    pet
    return "멍멍";
  }
}

function isCat(pet : CatType | DogType) :pet is CatType {
  return (pet as CatType).hasMom !== undefined;
}

console.log(makeSound({hasMom: true}));