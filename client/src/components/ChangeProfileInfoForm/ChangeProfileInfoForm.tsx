import classNames from "classnames";
import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useUserInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { ChangeProfileInfoRequest } from "../../interfaces/requests";
import { changeProfileInfoFx } from "../../models/User";
import { Button } from "../../ui/Button";
import { FileInput } from "../../ui/FileInput";
import { Input } from "../../ui/Input";
import { ShowImage } from "../../ui/ShowImage";

import ChangeProfileInfoFormStyle from "./ChangeProfileInfoForm.module.css";

export const ChangeProfileInfoForm: FC<ClassNameComponent> = ({
	className,
}) => {
	const initialValue = useUserInfo();

	const photo = initialValue.photo;

	const { register, handleSubmit, watch, formState } =
		useForm<ChangeProfileInfoRequest>({
			defaultValues: { ...initialValue, photo: null },
		});

	const { isSubmitting, isDirty } = formState;
	const disableButton = isSubmitting || !isDirty;
	const newPhoto = watch("photo");

	const onSubmit = useCallback((values: ChangeProfileInfoRequest) => {
		changeProfileInfoFx(values);
	}, []);

	return (
		<form
			className={classNames(ChangeProfileInfoFormStyle.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FileInput {...register("photo", { disabled: isSubmitting })}>
				<ShowImage
					className={ChangeProfileInfoFormStyle.photo}
					photo={(newPhoto && newPhoto[0]) || photo}
					alt="Your photo"
				/>
			</FileInput>
			<div className={ChangeProfileInfoFormStyle.fieldBlock}>
				<Input {...register("organization", { disabled: isSubmitting })}>
					Organization
				</Input>
				<Input {...register("userName", { disabled: isSubmitting })}>
					Name
				</Input>
				<Input {...register("email", { disabled: isSubmitting })}>Email</Input>
				<Input {...register("phone", { disabled: isSubmitting })}>Phone</Input>
				<Input {...register("status", { disabled: isSubmitting })}>
					Status
				</Input>
			</div>

			<Button
				className={ChangeProfileInfoFormStyle.button}
				type="submit"
				disabled={disableButton}
			>
				Save edit
			</Button>
		</form>
	);
};
