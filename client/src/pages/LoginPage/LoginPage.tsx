import classNames from "classnames";
import React, { FC } from "react";
import { LoginForm } from "../../components/LoginForm";
import { SaveLink } from "../../components/SaveLink";
import { ClassNameProps } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { Logo } from "../../ui/Logo";
import { Paragraph } from "../../ui/Paragraph";

import LoginPageStyle from "./LoginPage.module.css";

export const LoginPage: FC<ClassNameProps> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<ContentWrapper className={LoginPageStyle.loginPage}>
				<Logo className={LoginPageStyle.logo} type="image and text" />
				<LoginForm className={LoginPageStyle.loginForm} />
				<Paragraph className={LoginPageStyle.link}>
					Don&apos;t have account?{" "}
					<SaveLink to="/registration">Create new account right now</SaveLink>
				</Paragraph>
			</ContentWrapper>
		</main>
	);
};
