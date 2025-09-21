interface Rooster {
  name: string;
  weight: number;
  age: number;
}

interface Cow {
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  name: string;
  weight: number;
  age: number;
}

type FarmAnimal = Rooster | Cow | Pig;

function getAnimalSound(animal : FarmAnimal) : string {
  animal
  return "";
}