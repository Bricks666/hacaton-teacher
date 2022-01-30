import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
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
import { registrationFx } from "../../models/User";
import { Button } from "../../ui/Button";
import { Field } from "../../ui/Field";

import RegistrationFormStyle from "./RegistrationForm.module.css";

const initialValues: Partial<RegistrationRequest> = {
	userName: "",
	educationOrg: "",
	email: "",
	group: "",
	password: "",
	phoneNumber: "",
	repeatPassword: "",
	status: "",
};

const validationSchema = Joi.object<RegistrationRequest>({
	userName: Joi.string()
		.pattern(new RegExp(/[a-z0-9.,_!?]{6,32}/, "i"))
		.min(MIN_LOGIN_LENGTH)
		.max(MAX_LOGIN_LENGTH)
		.required()
		.messages({
			"string.pattern.base":
				"Имя должен содержать только латинские буквы, цифры и символы '.', ',', '_', '!', '?'",
			"string.min": `Имя должен быть длиннее ${MIN_LOGIN_LENGTH}`,
			"string.max": `Имя должен быть короче ${MAX_LOGIN_LENGTH}`,
			"any.required": "Имя не должен быть пустым",
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

export const RegistrationForm: FC<ClassNameComponent> = ({ className }) => {
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
	const {
		userName,
		phoneNumber,
		repeatPassword,
		email,
		password,
		educationOrg,
		status,
		group,
	} = errors;

	return (
		<form
			className={classNames(RegistrationFormStyle.registrationForm, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field
				{...register("userName")}
				label="Имя"
				error={userName}
				disabled={isSubmitting}
			/>
			<Field
				{...register("phoneNumber")}
				type="tel"
				label="Номер телефона"
				error={phoneNumber}
				disabled={isSubmitting}
			/>
			<Field
				{...register("email")}
				type="email"
				label="Почта"
				error={email}
				disabled={isSubmitting}
			/>

			<Field
				{...register("educationOrg")}
				label="Образовательная организация"
				error={educationOrg}
				disabled={isSubmitting}
			/>
			<Field
				{...register("status")}
				label="Статус"
				error={status}
				disabled={isSubmitting}
			/>
			<Field
				{...register("group")}
				label="Группа"
				error={group}
				disabled={isSubmitting}
			/>
			<Field
				{...register("password")}
				label="Пароль"
				error={password}
				disabled={isSubmitting}
			/>
			<Field
				{...register("repeatPassword")}
				label="Повторить пароль"
				error={repeatPassword}
				disabled={isSubmitting}
			/>
			<Button
				className={RegistrationFormStyle.button}
				type="submit"
				disabled={!isDirty || isSubmitting}
			>
				Зарегистрироваться
			</Button>
		</form>
	);
};
