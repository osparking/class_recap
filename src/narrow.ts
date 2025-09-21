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

interface Sheep {
  name: string;
  weight: number;
  age: number;
  종류: "sheep";
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getAnimalSound(animal : FarmAnimal) : string {
  switch (animal.종류) {
    case "cow":
      return "음머" ;
      break;
    case "rooster":
      return "꼬끼요.";
      break;
    case "pig":
      return "꿀꿀.";
      break;
    default:
      const ckeckAll: never = animal;
      console.log(ckeckAll);
      throw new Error(`처리 필요 '종류': ${ckeckAll}`);
      break;
  }
  return "";
}

const 꼬꼬 : Sheep = {
  name: "꼬꼬",
  weight: 1.8,
  age: 2,
  종류: "sheep"
}

console.log("꼬꼬 소리는? ", getAnimalSound(꼬꼬));