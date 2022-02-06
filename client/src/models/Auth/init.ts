import { forward, guard, sample } from "effector";
import {
	$AuthIdStore,
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

forward({
	from: authFx.pending,
	to: $AuthorizationStore,
});

forward({
	from: [loginFx.doneData, authFx.doneData],
	to: $AuthIdStore,
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
		fn: (source) => source.every((i) => i),
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
