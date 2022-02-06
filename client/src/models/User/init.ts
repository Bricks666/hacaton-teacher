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
import {
	login,
	auth,
	registration,
	logout,
	changeProfileInfo,
} from "../../api";
import { combineUserInfo } from "../../utils";

$LoginStore.on([loginFx.done, authFx.done], () => true);
$LoginStore.on(logoutFx.done, () => false);

sample({
	clock: [loginFx.doneData, authFx.doneData],
	target: $UserStore,
});

$AuthorizationStore.on(authFx, () => true);
$AuthorizationStore.on(authFx.done, () => false);

loginFx.use(login);
authFx.use(auth);
registrationFx.use(registration);
logoutFx.use(logout);
changeProfileInfoFx.use(changeProfileInfo);

sample({
	source: $UserStore,
	clock: changeProfileInfoFx.doneData,
	fn: combineUserInfo,
	target: $UserStore,
});
