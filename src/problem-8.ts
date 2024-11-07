// define function type
type ValidateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => boolean;

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
const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(validateKeys(person, ['name', 'age']));
// console.log(validateKeys(person, ["name", "phone"])); // --> Something's wrong
