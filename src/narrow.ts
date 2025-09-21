interface Rooster {
  name: string;
  weight: number;
  age: number;
  종류: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  종류: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  종류: "pig";
}

type FarmAnimal = Rooster | Cow | Pig;

function getAnimalSound(animal : FarmAnimal) : string {
  switch (animal.종류) {
    case "cow": 
      break;
    case "rooster":
      return "꼬끼요.";
      break;
    default:
      break;
  }
  return "";
}

const 꼬꼬 : Rooster = {
  name: "꼬꼬",
  weight: 1.8,
  age: 2,
  종류: "rooster"
}

console.log("꼬꼬 소리는? ", getAnimalSound(꼬꼬));