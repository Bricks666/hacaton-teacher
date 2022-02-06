import { createDomain } from "effector-logger";
import { ChangeProfileInfoRequest } from "../../interfaces/requests";

export interface Profile {
	readonly id: number;
	readonly userName: string;
	readonly email: string;
	readonly phone: string;
	readonly status: string;
	readonly photo: string;
	readonly organization: string;
	readonly group?: string;
}

export const ProfileDomain = createDomain("ProfileDomain");

export const $ProfileStore = ProfileDomain.createStore<Profile>(
	{
		id: 0,
		userName: "",
		status: "",
		photo: "",
		phone: "",
		email: "",
		organization: "",
	},
	{ name: "ProfileStore" }
);
export const $LoadingProfileInfo = ProfileDomain.createStore<boolean>(false, {
	name: "LoadingProfileInfo",
});

export const loadProfileInfoFx = ProfileDomain.createEffect<
	number | string,
	Profile
>("loadProfileInfoFx");
export const changeProfileInfoFx = ProfileDomain.createEffect<
	ChangeProfileInfoRequest,
	ChangeProfileInfoRequest
>("changeProfileInfoFx");

export const changeProfileInfo =
	ProfileDomain.createEvent<ChangeProfileInfoRequest>("changeProfileInfo");
export const loadProfileInfo =
	ProfileDomain.createEvent<number>("loadProfileInfo");
