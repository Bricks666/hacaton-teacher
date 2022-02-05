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
} from ".";
import { mockServerResponse, mockUser } from "../../mocks";
import { combineUserInfo } from "../../utils";

$LoginStore.on([loginFx.done, authFx.done], () => true);
$LoginStore.on(logoutFx.done, () => false);

sample({
	clock: [loginFx.doneData, authFx.doneData],
	target: $UserStore,
});

$AuthorizationStore.on(authFx, () => true);
$AuthorizationStore.on(authFx.done, () => false);

loginFx.use(async () => await mockServerResponse(500, mockUser));

authFx.use(async () => await mockServerResponse(3000, mockUser));

registrationFx.use(async () => await mockServerResponse(500, undefined));

logoutFx.use(async () => await mockServerResponse(300, undefined));

changeProfileInfoFx.use(
	async (newInfo) => await mockServerResponse(300, newInfo)
);

sample({
	source: $UserStore,
	clock: changeProfileInfoFx.doneData,
	fn: combineUserInfo,
	target: $UserStore,
});
