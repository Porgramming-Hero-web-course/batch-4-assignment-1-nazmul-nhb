// define function type
type RemoveDuplicates = (numbers: number[]) => number[];

/**
 *
 * @param numbers - Accepts an array of numbers only.
 * @returns Returns a new array with duplicates removed.
 */
const removeDuplicates: RemoveDuplicates = (numbers) => {
	if (numbers.length <= 1) return numbers;

	// Could have done it in 2 lines using Set
	// const cleanArr = new Set(numbers);
	// return Array.from(cleanArr);

	const cleanArr: number[] = [];

	for (const number of numbers) {
		if (!cleanArr.includes(number)) {
			cleanArr.push(number);
		}
	}

	return cleanArr;
};

// console.log(removeDuplicates([1,1]));
