// define function type
type CountWordOccurrences = (sentence: string, keyword: string) => number;

const countWordOccurrences: CountWordOccurrences = (sentence, keyword) => {
	const wordCount: number =
		sentence.toLowerCase().split(keyword.toLowerCase()).length - 1;

	return wordCount;
};
