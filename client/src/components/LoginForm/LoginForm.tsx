import React, { FC } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginFx } from "../../effects";
import { ClassNameComponent } from "../../interfaces/common";
import { LoginRequest } from "../../interfaces/requests";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { Field } from "../../ui/Field";
import { useCreateSubmitHandler } from "../../hooks";

const initialValues: Partial<LoginRequest> = {
	login: "",
	password: "",
	remember: false,
};

const validationSchema = Joi.object<LoginRequest>({
	login: Joi.string().alphanum().min(6).max(30).required(),
	password: Joi.string().min(6).max(32).required(),
	remember: Joi.boolean(),
});

export const LoginForm: FC<ClassNameComponent> = () => {
	const { handleSubmit, register, setError, reset, formState } =
		useForm<LoginRequest>({
			defaultValues: initialValues,
			resolver: joiResolver(validationSchema),
		});

	const { login, password } = formState.errors;
	const { isSubmitting, isDirty } = formState;

	const onSubmit = useCreateSubmitHandler(loginFx, reset, setError);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field {...register("login")} label="Логин" error={login} />
			<Field {...register("password")} label="Пароль" error={password} />
			<Checkbox {...register("remember")} label="Запомнить меня" />
			<Button type="submit" disabled={isSubmitting || !isDirty}>
				Login
			</Button>
		</form>
	);
};
