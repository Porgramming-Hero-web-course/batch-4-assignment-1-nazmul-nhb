// define function type
type CountWordOccurrences = (sentence: string, keyword: string) => number;

const countWordOccurrences: CountWordOccurrences = (sentence, keyword) => {
	return sentence.toLowerCase().split(keyword.toLowerCase()).length - 1;
};
