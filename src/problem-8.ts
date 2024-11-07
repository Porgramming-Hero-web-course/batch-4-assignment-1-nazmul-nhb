// define function type
type ValidateKeys = <T extends object>(obj: T, keys: string[]) => boolean;

/**
 *
 * @param obj Any object with key-value pairs.
 * @param keys An array string to check if all the strings are a key of the provided object.
 * @returns Returns `true` if all of the specified keys exist in the object, otherwise it returns `false`.
 */
const validateKeys: ValidateKeys = (obj, keys) => {
	for (const key of keys) {
		if (!(key in obj)) {
			return false;
		}
	}
	return true;

	// Alternative
	// const result: boolean[] = [];
	// for (const key of keys) {
	// 	if (!obj[key]) {
	// 		result.push(false);
	// 	}
	// 	result.push(true);
	// }

	// if (result.includes(false)) {
	// 	return false;
	// }
	// return true;
};

// Sample Input:
// const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
// console.log(validateKeys(person, ['name', 'age']));
// console.log(validateKeys(person, ["name", "phone"])); // --> Something's wrong
