
// Function to shuffle a copy of an array without modifying the original
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

// Function to select random items from an array
export function selectRandomItems<T>(array: T[], count: number): T[] {
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, count);
}
