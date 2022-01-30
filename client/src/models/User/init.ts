import { sample } from "effector";
import { $LoginStore, $UserStore, loginFx, logoutFx, registrationFx } from ".";
import { mockServerResponse } from "../../mocks";
import { mockUser } from "../../mocks/mockUser";

$LoginStore.on(loginFx.done, () => true);
$LoginStore.on(logoutFx.done, () => false);

loginFx.use(async () => await mockServerResponse(500, mockUser));

registrationFx.use(async () => await mockServerResponse(500, undefined));

logoutFx.use(async () => await mockServerResponse(300, undefined));

sample({
	clock: loginFx.doneData,
	target: $UserStore,
});
