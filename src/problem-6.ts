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

const updateProfile: UpdateProfile = (profile, updateOptions) => {
	return { ...profile, ...updateOptions };
};
