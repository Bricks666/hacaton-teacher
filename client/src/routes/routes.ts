import { ComponentType } from "react";
import { ClassNameComponent } from "../interfaces/common";
import { BlogPage } from "../pages/BlogPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { UserBlogPage } from "../pages/UserBlogPage";

interface Route {
	readonly path: string;
	readonly Component: ComponentType<ClassNameComponent>;
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
	{
		Component: BlogPage,
		path: "/blog/*",
	},
	{
		Component: UserBlogPage,
		path: "/profile/:id/blog",
	},
];
