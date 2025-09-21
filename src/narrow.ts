interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Rooster | Cow | Pig;

function getAnimalSound(animal : FarmAnimal) : string {
  switch (animal.kind) {
    case "cow": animal;
      animal;
      break;
    default:
      break;
  }
  return "";
}