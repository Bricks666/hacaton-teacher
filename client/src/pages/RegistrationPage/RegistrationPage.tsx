import React, { FC } from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import { ClassNameComponent } from "../../interfaces/common";
import { Logo } from "../../ui/Logo";
import { Paragraph } from "../../ui/Paragraph";
import { SaveLink } from "../../components/SaveLink";

export const RegistrationPage: FC<ClassNameComponent> = () => {
	return (
		<main>
			<Logo type="image and text" />
			<RegistrationForm />
			<Paragraph>
				Already got an account? <SaveLink to="/login">Log in</SaveLink>
			</Paragraph>
		</main>
	);
};
