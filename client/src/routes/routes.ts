import { ComponentType, lazy } from "react";
import { ClassNameProps } from "../interfaces/common";
import { BlogPage } from "../pages/BlogPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegistrationPage } from "../pages/RegistrationPage";

const LibraryPage = lazy(() => import("../pages/LibraryPage"));
const BookPage = lazy(() => import("../pages/BookPage"));
const SchoolEventsPage = lazy(() => import("../pages/SchoolEventsPage"));

interface Route {
	readonly path: string;
	readonly Component: ComponentType<ClassNameProps>;
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
		path: "/profile/:id/*",
		isOnlyAuth: true,
	},
	{
		Component: BlogPage,
		path: "/blog/*",
	},
	{
		Component: LibraryPage,
		path: "/library/*",
	},
	{
		Component: BookPage,
		path: "/library/:id",
	},
	{
		Component: SchoolEventsPage,
		path: "/events",
		isOnlyAuth: true,
	},
];
