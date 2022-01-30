import React, { FC } from "react";
import classNames from "classnames";
import { RegistrationForm } from "../../components/RegistrationForm";
import { ClassNameComponent } from "../../interfaces/common";
import { Logo } from "../../ui/Logo";
import { Paragraph } from "../../ui/Paragraph";
import { SaveLink } from "../../components/SaveLink";

import RegistrationPageStyle from "./RegistrationPage.module.css";

export const RegistrationPage: FC<ClassNameComponent> = ({ className }) => {
	return (
		<main
			className={classNames(RegistrationPageStyle.registrationPage, className)}
		>
			<Logo className={RegistrationPageStyle.logo} type="image and text">
				The limits of my language are the limits of my world
			</Logo>
			<RegistrationForm className={RegistrationPageStyle.registrationForm} />
			<Paragraph className={RegistrationPageStyle.link}>
				Already got an account? <SaveLink to="/login">Log in</SaveLink>
			</Paragraph>
		</main>
	);
};
