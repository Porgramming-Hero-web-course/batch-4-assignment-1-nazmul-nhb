// declare function type
type SumArray = (numbers: number[]) => number;

const sumArray: SumArray = (numbers) => {
	return numbers.reduce((acc, number) => acc + number, 0);
};
