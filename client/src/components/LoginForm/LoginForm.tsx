import React, { FC, useCallback } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Location, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { ClassNameProps, SubmitHandler } from "../../interfaces/common";
import { LoginRequest } from "../../interfaces/requests";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { Field } from "../../ui/Field";
import { useLocationState } from "../../hooks";
import { createFullPath } from "../../utils";
import { login as loginEv } from "../../models/Auth";

import LoginFormStyle from "./LoginForm.module.css";

const initialValues: Partial<LoginRequest> = {
	login: "",
	password: "",
	remember: false,
};

const validationSchema = Joi.object<LoginRequest>({
	login: Joi.string()
		.pattern(new RegExp(/[a-z0-9.,_!?]{1,}/, "i"))
		.required()
		.messages({
			"string.pattern.base":
				"Пароль должен содержать только латинские буквы, цифры и символы '.', ',', '_', '!', '?'",
			"any.required": "Логин не должен быть пустым",
		}),
	password: Joi.string()
		.pattern(new RegExp(/[a-z0-9.,_!?]{1,}/, "i"))
		.required()
		.messages({
			"string.pattern.base":
				"Пароль должен содержать только латинские буквы, цифры и символы '.', ',', '_', '!', '?'",
			"any.required": "Пароль не должен быть пустым",
		}),
	remember: Joi.boolean(),
});

export const LoginForm: FC<ClassNameProps> = ({ className }) => {
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
				loginEv(values);
				reset();
				const to = state ? createFullPath(state) : "/";
				navigate(to, { replace: true });
			} catch (e) {
				e;
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
				buttonType="submit"
				disabled={isSubmitting || !isDirty}
			>
				Login
			</Button>
		</form>
	);
};
