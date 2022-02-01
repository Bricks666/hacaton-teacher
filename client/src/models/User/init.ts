import { sample } from "effector";
import {
	$AuthorizationStore,
	$LoginStore,
	$UserStore,
	authFx,
	changeProfileInfoFx,
	loginFx,
	logoutFx,
	registrationFx,
	UserStore,
} from ".";
import { mockServerResponse } from "../../mocks";
import { mockUser } from "../../mocks/mockUser";

$LoginStore.on([loginFx.done, authFx.done], () => true);
$LoginStore.on(logoutFx.done, () => false);

sample({
	clock: [loginFx.doneData, authFx.doneData],
	target: $UserStore,
});

$AuthorizationStore.on(authFx, () => true);
$AuthorizationStore.on(authFx.done, () => false);

loginFx.use(async () => await mockServerResponse(500, mockUser));

authFx.use(async () => await mockServerResponse(300, mockUser));

registrationFx.use(async () => await mockServerResponse(500, undefined));

logoutFx.use(async () => await mockServerResponse(300, undefined));

changeProfileInfoFx.use(
	async (newInfo) => await mockServerResponse(300, newInfo)
);

sample({
	source: $UserStore,
	clock: changeProfileInfoFx.doneData,
	/* 	fn: (
		{ photo: oldPhoto, ...currentProfileInfo },
		{ photo, ...newUserInfo }
	) => {
		const newUserStore: Partial<UserStore> = {};

		for (const key of Object.keys(currentProfileInfo)) {
			newUserInfo[key] = newUserInfo[key] || currentProfileInfo[key];
		}

		return newUserStore as UserStore;
	}, */
	target: $UserStore,
});
