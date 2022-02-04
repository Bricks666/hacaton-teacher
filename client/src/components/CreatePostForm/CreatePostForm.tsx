import classNames from "classnames";
import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelectedPost } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { AddPostRequest } from "../../interfaces/requests";
import { addPostFx } from "../../models/Posts";
import { Button } from "../../ui/Button";
import { Textarea } from "../../ui/Textarea";

import CreatePostStyle from "./CreatePostForm.module.css";

export const CreatePostFrom: FC<ClassNameComponent> = ({ className }) => {
	const initialValues = useSelectedPost() || { content: "" };

	const { register, handleSubmit, reset, formState } = useForm<AddPostRequest>({
		defaultValues: initialValues,
	});

	const onSubmit = useCallback(
		async (value: AddPostRequest) => {
			await addPostFx(value);
			reset();
		},
		[reset]
	);

	const { isDirty, isSubmitting } = formState;

	return (
		<form
			className={classNames(CreatePostStyle.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Textarea
				className={CreatePostStyle.textarea}
				{...register("content")}
				placeholder="What's happening?"
				disabled={isSubmitting}
			/>
			<Button
				className={CreatePostStyle.button}
				type="submit"
				disabled={!isDirty || isSubmitting}
			>
				Publish
			</Button>
		</form>
	);
};
