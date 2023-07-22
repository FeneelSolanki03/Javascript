function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Input must be a non-empty array.');
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  const numbers = [3, 7, 11, 9, 2, 6];
  const maxNumber = findMax(numbers);
  console.log(maxNumber); 

//   assignment 2
function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      throw new Error('Length and width must be positive numbers.');
    }
  
    const area = length * width;
    return area;
  }
  const length = 10;
const width = 5;
const area = calculateArea(length, width);
console.log(area);

    