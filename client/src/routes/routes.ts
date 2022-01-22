import { ComponentType } from "react";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";

interface Route {
	path: string;
	Component: ComponentType;
	isOnlyAuth?: boolean;
}

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: "/login",
	},
	{
		Component: RegistrationPage,
		path: "/registration",
		isOnlyAuth: true,
	},
];
