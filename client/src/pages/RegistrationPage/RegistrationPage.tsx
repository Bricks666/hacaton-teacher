import React, { FC } from "react";
import classNames from "classnames";
import { RegistrationForm } from "../../components/RegistrationForm";
import { ClassNameComponent } from "../../interfaces/common";
import { Logo } from "../../ui/Logo";
import { Paragraph } from "../../ui/Paragraph";
import { SaveLink } from "../../components/SaveLink";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";

import RegistrationPageStyle from "./RegistrationPage.module.css";

export const RegistrationPage: FC<ClassNameComponent> = ({ className }) => {
	return (
		<main className={classNames(className)}>
			<ContentWrapper className={RegistrationPageStyle.registrationPage}>
				<Logo className={RegistrationPageStyle.logo} type="image and text" />
				<RegistrationForm className={RegistrationPageStyle.registrationForm} />
				<Paragraph className={RegistrationPageStyle.link}>
					Already got an account? <SaveLink to="/login">Log in</SaveLink>
				</Paragraph>
			</ContentWrapper>
		</main>
	);
};
