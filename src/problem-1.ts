// declare function type
type SumArray = (numbers: number[]) => number;

/**
 *
 * @param numbers Accepts an array of numbers only.
 * @returns Returns the sum of the numbers of the provided array.
 */
const sumArray: SumArray = (numbers) => {
	return numbers.reduce((acc, number) => acc + number, 0);
};

// Sample Input:
// console.log(sumArray([1, 2, 3, 4, 5]));
