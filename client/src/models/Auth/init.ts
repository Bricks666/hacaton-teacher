import { forward, guard, sample } from "effector";
import {
	$AuthStore,
	$AuthorizationStore,
	$LoginStore,
	auth,
	authFx,
	login,
	loginFx,
	logout,
	logoutFx,
	registration,
	registrationFx,
} from ".";
import {
	auth as authAPI,
	login as loginAPI,
	logout as logoutAPI,
	registration as registrationAPI,
} from "../../api";

authFx.use(authAPI);
loginFx.use(loginAPI);
registrationFx.use(registrationAPI);
logoutFx.use(logoutAPI);

forward({
	from: authFx.pending,
	to: $AuthorizationStore,
});

forward({
	from: [loginFx.doneData, authFx.doneData],
	to: $AuthStore,
});

sample({
	clock: loginFx.done,
	fn: () => true,
	target: $LoginStore,
});

sample({
	clock: logoutFx.done,
	fn: () => false,
	target: $LoginStore,
});

guard({
	clock: auth,
	filter: sample({
		source: authFx.pending,
		fn: (isAuthorizing) => !isAuthorizing,
	}),
	target: authFx,
});

guard({
	clock: login,
	filter: sample({
		source: [$LoginStore, loginFx.pending],
		fn: (source) => source.every((i) => !i),
	}),
	target: loginFx,
});

guard({
	clock: registration,
	filter: sample({
		source: registrationFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: registrationFx,
});

guard({
	clock: logout,
	filter: sample({
		source: logoutFx.pending,
		fn: (isLoading) => !isLoading,
	}),
	target: logoutFx,
});
