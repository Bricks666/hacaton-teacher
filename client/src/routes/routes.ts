import { ComponentType } from "react";
import { LoginPage } from "../pages/LoginPage";

interface Route {
	path: string;
	Component: ComponentType;
}

export const routes: Route[] = [
	{
		Component: LoginPage,
		path: "/login",
	},
];
