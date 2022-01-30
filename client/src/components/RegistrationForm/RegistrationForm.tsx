import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Location, useNavigate } from "react-router-dom";
import {
	MAX_LOGIN_LENGTH,
	MAX_PASSWORD_LENGTH,
	MIN_LOGIN_LENGTH,
	MIN_PASSWORD_LENGTH,
} from "../../constants";
import { useLocationState } from "../../hooks";
import { ClassNameComponent, SubmitHandler } from "../../interfaces/common";
import { RegistrationRequest } from "../../interfaces/requests";
import { registrationFx } from "../../models/Login";
import { Button } from "../../ui/Button";
import { Field } from "../../ui/Field";

const initialValues: Partial<RegistrationRequest> = {
	login: "",
	password: "",
	repeatPassword: "",
};

const validationSchema = Joi.object<RegistrationRequest>({
	login: Joi.string()
		.pattern(new RegExp(/[a-z0-9.,_!?]{6,32}/, "i"))
		.min(MIN_LOGIN_LENGTH)
		.max(MAX_LOGIN_LENGTH)
		.required()
		.messages({
			"string.pattern.base":
				"Пароль должен содержать только латинские буквы, цифры и символы '.', ',', '_', '!', '?'",
			"string.min": `Логин должен быть длиннее ${MIN_LOGIN_LENGTH}`,
			"string.max": `Логин должен быть короче ${MAX_LOGIN_LENGTH}`,
			"any.required": "Логин не должен быть пустым",
		}),
	password: Joi.string()
		.pattern(new RegExp(/[a-z0-9.,_!?]{6,32}/, "i"))
		.min(MIN_PASSWORD_LENGTH)
		.max(MAX_PASSWORD_LENGTH)
		.required()
		.messages({
			"string.pattern.base":
				"Пароль должен содержать только латинские буквы, цифры и символы '.', ',', '_', '!', '?'",
			"string.min": `Пароль должен быть длиннее ${MIN_LOGIN_LENGTH}`,
			"string.max": `Пароль должен быть короче ${MAX_LOGIN_LENGTH}`,
			"any.required": "Пароль не должен быть пустым",
		}),
	repeatPassword: Joi.string()
		.valid(Joi.ref("password"))
		.messages({ "any.only": "Пароли должны совпадать" }),
});

export const RegistrationForm: FC<ClassNameComponent> = () => {
	const { handleSubmit, register, reset, formState } =
		useForm<RegistrationRequest>({
			resolver: joiResolver(validationSchema),
			defaultValues: initialValues,
		});

	const state = useLocationState<Location>();
	const navigate = useNavigate();

	const onSubmit = useCallback<SubmitHandler<RegistrationRequest>>(
		async (values) => {
			try {
				await registrationFx(values);
				reset();
				navigate("/login", { replace: true, state });
			} catch (e) {
				console.log(e);
			}
		},
		[navigate, reset, state]
	);

	const { errors, isDirty, isSubmitting } = formState;
	const { login, repeatPassword, password } = errors;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register("login")}
				label="Логин"
				error={login}
				disabled={isSubmitting}
			/>
			<Field
				{...register("password")}
				type="password"
				label="Пароль"
				error={password}
				disabled={isSubmitting}
			/>
			<Field
				{...register("repeatPassword")}
				type="password"
				label="Повторите пароль"
				error={repeatPassword}
				disabled={isSubmitting}
			/>
			<Button type="submit" disabled={!isDirty || isSubmitting}>
				Зарегистрироваться
			</Button>
		</form>
	);
};
