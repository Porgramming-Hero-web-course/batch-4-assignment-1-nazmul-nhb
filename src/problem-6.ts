// define interface
interface Profile {
	name: string;
	age: number;
	email: string;
}

// define function type
type UpdateProfile = (
	profile: Profile,
	updateOptions: Partial<Profile>,
) => Profile;

/**
 *
 * @param profile An object of type Profile.
 * @param updateOptions An object of type Partial of Profile representing the updates.
 * @returns Returns the updated profile.
 */
const updateProfile: UpdateProfile = (profile, updateOptions) => {
	return { ...profile, ...updateOptions };
};

// Sample Input:
// const myProfile = { name: 'Alice', age: 25, email: 'alice@example.com' };
// console.log(updateProfile(myProfile, { age: 26, name: 'Abdul' }));
