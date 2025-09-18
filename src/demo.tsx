const findRandomElement = <T,>(elements: T[]): (T | undefined) => {
  if (elements.length === 0) {
    return undefined;
  } else {
    const idx = Math.floor(Math.random() * elements.length);
    return elements[idx];
  }
}

// function getRandomElement<T>(elements: T[]): T | undefined {
//   if (elements.length === 0) {
//     return undefined;
//   } else {
//     const idx = Math.floor(Math.random() * elements.length);
//     return elements[idx];
//   }
// }