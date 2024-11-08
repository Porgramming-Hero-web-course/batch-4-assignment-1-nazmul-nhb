// define function type
type GetProperty = <T extends object, K extends keyof T>(
	obj: T,
	key: K,
) => T[K];

const getProperty: GetProperty = (obj, key) => {
	return obj[key];
};
