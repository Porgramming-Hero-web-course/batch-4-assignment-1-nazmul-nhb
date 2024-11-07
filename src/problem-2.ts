// define function type
type RemoveDuplicates = (numbers: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (numbers) => {
	if (numbers.length <= 1) return numbers;

	const cleanArr: number[] = [];

	for (const number of numbers) {
		if (!cleanArr.includes(number)) {
			cleanArr.push(number);
		}
	}

	return cleanArr;
};
