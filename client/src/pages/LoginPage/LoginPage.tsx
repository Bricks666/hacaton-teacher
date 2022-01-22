import React, { FC } from "react";
import { LoginForm } from "../../components/LoginForm";
import { ClassNameComponent } from "../../interfaces/common";
import { SectionHeader } from "../../ui/SectionHeader";

export const LoginPage: FC<ClassNameComponent> = () => {
	return (
		<main>
			<SectionHeader>Вход</SectionHeader>
			<LoginForm />
		</main>
	);
};
