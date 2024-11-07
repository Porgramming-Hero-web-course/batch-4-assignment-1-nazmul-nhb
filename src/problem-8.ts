// define function type
type ValidateKeys = <T extends object>(obj: T, keys: string[]) => boolean;

/**
 *
 * @param obj Any object with key-value pairs.
 * @param keys An array of strings to check if all the strings exist as keys in the object.
 * @returns Returns `true` if all of the specified keys exist in the object, otherwise it returns `false`.
 */
const validateKeys: ValidateKeys = (obj, keys) => {
	for (const key of keys) {
		if (!(key in obj)) {
			return false;
		}
	}
	return true;
};

// Sample Input:
// const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
// console.log(validateKeys(person, ['name', 'age']));
// console.log(validateKeys(person, ['name', 'phone']));
// --> Something's wrong with `validateKeys(obj: T, keys: (keyof T)[])`
// --> Fixed by allowing array of any strings`(obj: T, keys: string[])`
