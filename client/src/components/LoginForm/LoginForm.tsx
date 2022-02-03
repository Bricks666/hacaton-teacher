import React, { FC, useCallback } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Location, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ClassNameComponent, SubmitHandler } from "../../interfaces/common";
import { LoginRequest } from "../../interfaces/requests";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { Field } from "../../ui/Field";
import {
	MAX_LOGIN_LENGTH,
	MAX_PASSWORD_LENGTH,
	MIN_LOGIN_LENGTH,
	MIN_PASSWORD_LENGTH,
} from "../../constants";
import { useLocationState } from "../../hooks";
import { createFullPath } from "../../utils";
import { loginFx } from "../../models/User";

import LoginFormStyle from "./LoginForm.module.css";

const initialValues: Partial<LoginRequest> = {
	login: "",
	password: "",
	remember: false,
};

const validationSchema = Joi.object<LoginRequest>({
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
	remember: Joi.boolean(),
});

export const LoginForm: FC<ClassNameComponent> = ({ className }) => {
	const { handleSubmit, register, reset, formState } = useForm<LoginRequest>({
		defaultValues: initialValues,
		resolver: joiResolver(validationSchema),
	});

	const { login, password } = formState.errors;
	const { isSubmitting, isDirty } = formState;

	const navigate = useNavigate();
	const state = useLocationState<Location>();

	const onSubmit = useCallback<SubmitHandler<LoginRequest>>(
		async (values) => {
			try {
				await loginFx(values);
				reset();
				const to = state ? createFullPath(state) : "/";
				navigate(to, { replace: true });
			} catch (e) {
				e
			}
		},
		[reset, state, navigate]
	);

	return (
		<form
			className={classNames(LoginFormStyle.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field {...register("login")} error={login}>
				Логин
			</Field>
			<Field {...register("password")} type="password" error={password}>
				Пароль
			</Field>
			<Checkbox {...register("remember")} label="Запомнить меня" />
			<Button
				className={LoginFormStyle.button}
				type="submit"
				disabled={isSubmitting || !isDirty}
			>
				Login
			</Button>
		</form>
	);
};
