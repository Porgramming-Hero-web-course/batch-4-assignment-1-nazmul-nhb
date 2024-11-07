// define function type
type CountWordOccurrences = (sentence: string, keyword: string) => number;

/**
 *
 * @param sentence - A sentence, must be a string.
 * @param keyword - A keyword to lookup in the sentence.
 * @returns Returns the number of times the keyword appears in the sentence
 */
const countWordOccurrences: CountWordOccurrences = (sentence, keyword) => {
	const wordCount: number =
		sentence.toLowerCase().split(keyword.toLowerCase()).length - 1;

	return wordCount;
};

// console.log(
// 	countWordOccurrences('typeScript is great. I love TypeScriptjashsdlkjg!', 'typescript'),
// );
