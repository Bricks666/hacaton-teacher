import React, { FC } from "react";
import { RegistrationForm } from "../../components/RegistrationForm";
import { ClassNameComponent } from "../../interfaces/common";
import { SectionHeader } from "../../ui/SectionHeader";

export const RegistrationPage: FC<ClassNameComponent> = () => {
	return (
		<main>
			<SectionHeader>Регистрация</SectionHeader>
			<RegistrationForm />
		</main>
	);
};
