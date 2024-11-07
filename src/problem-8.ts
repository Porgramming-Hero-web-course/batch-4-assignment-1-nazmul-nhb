// define function type
type ValidateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => boolean;

const validateKeys: ValidateKeys = (obj, keys) => {
	for (const key of keys) {
		if (!(key in obj)) {
			return false;
		}
	}
	return true;
};
