import { $LoginStore, loginFx, logoutFx, registrationFx } from ".";

$LoginStore.on(loginFx.done, () => true);
$LoginStore.on(logoutFx.done, () => false);

loginFx.use(
	(loginValues) =>
		new Promise((resolve) => {
			setTimeout(() => {
				// eslint-disable-next-line no-alert
				alert(JSON.stringify(loginValues));
				resolve();
			}, 3000);
		})
);

registrationFx.use(() => {
	return new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
});

logoutFx.use(() => {
	return new Promise((resolve) => {
		setTimeout(resolve, 4000);
	});
});
