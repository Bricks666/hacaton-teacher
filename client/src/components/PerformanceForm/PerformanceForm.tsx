import classNames from "classnames";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { GET_PARAMS } from "../../config";
import { useAuthInfo, useGetParam, useUserPerformance } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { ChangePerformanceRequest } from "../../interfaces/requests";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Picture } from "../../ui/Picture";
import { ShowImage } from "../../ui/ShowImage";
import { Textarea } from "../../ui/Textarea";
import photoBG from "../../assets/photo.jpg";

import PerformanceFormStyle from "./PerformanceForm.module.css";

export const PerformanceForm: FC<ClassNameComponent> = ({ className }) => {
	const performanceId = useGetParam(GET_PARAMS.performanceId);
	const performance = useUserPerformance(performanceId) || {
		header: "",
		description: "",
		photo: photoBG,
	};

	const { register, formState, watch } = useForm<ChangePerformanceRequest>({
		defaultValues: performance,
	});

	const { photo, userName } = useAuthInfo();
	const { isDirty, isValid } = formState;
	const isDisabled = !isDirty || !isValid;

	const currentPhoto = watch("photo");
	const showedPhoto =
		typeof currentPhoto === "string"
			? currentPhoto
			: currentPhoto[0] ?? photoBG;

	return (
		<section className={classNames(PerformanceFormStyle.section, className)}>
			<Picture
				className={PerformanceFormStyle.photo}
				src={photo}
				alt={userName}
			/>
			<form className={PerformanceFormStyle.form}>
				<Input
					inputClassName={PerformanceFormStyle.field}
					{...register("header")}
					placeholder="Achievement name"
				/>
				<Textarea
					className={PerformanceFormStyle.textarea}
					{...register("description")}
					placeholder="What did you get?"
				/>
				<Button className={PerformanceFormStyle.button} disabled={isDisabled}>
					{performanceId ? "Save edit" : "Post performance"}
				</Button>
			</form>
			<Input
				className={PerformanceFormStyle.photoFile}
				{...register("photo")}
				type="file"
				inputClassName="visibility-hidden"
			>
				<ShowImage
					className={PerformanceFormStyle.showImage}
					photo={showedPhoto}
					alt="Performance's photo"
				/>
			</Input>
		</section>
	);
};
