import { ComponentType } from "react";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegistrationPage } from "../pages/RegistrationPage";

interface Route {
	readonly path: string;
	readonly Component: ComponentType;
	readonly isOnlyAuth?: boolean;
}

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: "/login",
	},
	{
		Component: RegistrationPage,
		path: "/registration",
	},
	{
		Component: ProfilePage,
		path: "/profile/*",
		isOnlyAuth: true,
	},
];
