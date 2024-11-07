// define function type
type RemoveDuplicates = (numbers: number[]) => number[];

/**
 *
 * @param numbers - Accepts an array of numbers only.
 * @returns Returns a new array with duplicates removed.
 */
const removeDuplicates: RemoveDuplicates = (numbers) => {
	// Could have done it in 1 line using Set

	const cleanArr: number[] = [];

	for (const number of numbers) {
		if (!cleanArr.includes(number)) {
			cleanArr.push(number);
		}
	}

	return cleanArr;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));