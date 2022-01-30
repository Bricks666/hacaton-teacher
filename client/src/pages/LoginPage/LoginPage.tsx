import classNames from "classnames";
import React, { FC } from "react";
import { LoginForm } from "../../components/LoginForm";
import { SaveLink } from "../../components/SaveLink";
import { ClassNameComponent } from "../../interfaces/common";
import { Logo } from "../../ui/Logo";
import { Paragraph } from "../../ui/Paragraph";

import LoginPageStyle from "./LoginPage.module.css";

export const LoginPage: FC<ClassNameComponent> = ({ className }) => {
	return (
		<main className={classNames(LoginPageStyle.loginPage, className)}>
			<Logo className={LoginPageStyle.logo} type="image and text">
				The limits of my language are the limits of my world
			</Logo>
			<LoginForm className={LoginPageStyle.loginForm} />
			<Paragraph className={LoginPageStyle.link}>
				Don&apos;t have account?{" "}
				<SaveLink to="/registration">Create new account right now</SaveLink>
			</Paragraph>
		</main>
	);
};
