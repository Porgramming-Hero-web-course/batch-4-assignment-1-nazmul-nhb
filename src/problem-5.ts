// define function type
type GetProperty = <T, K extends keyof T>(obj: T, key: K) => T[K];

/**
 *
 * @param obj An object with any shape.
 * @param key A key that exists in the provided object.
 * @returns Returns the property value of the matching key.
 */
const getProperty: GetProperty = (obj, key) => {
	return obj[key];
};

// Sample Input:
// const person = { name: 'Alice', age: 30 };
// console.log(getProperty(person, 'name'));
// console.log(getProperty(person, 'hakuna'));
