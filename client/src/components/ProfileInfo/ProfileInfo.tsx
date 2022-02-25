import classNames from "classnames";
import React, { FC } from "react";
import { useIsPageOwner, useProfileInfo } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { DataDescription } from "../../ui/DataDescription";
import { Datalist } from "../../ui/Datalist";
import { DataTerm } from "../../ui/DataTerm";
import { Picture } from "../../ui/Picture";

import ProfileInfoStyle from "./ProfileInfo.module.css";

export const ProfileInfo: FC<ClassNameProps> = ({ className }) => {
	const user = useProfileInfo();
	const isPageOwner = useIsPageOwner();

	return (
		<section className={classNames(ProfileInfoStyle.profileInfo, className)}>
			<Picture
				className={ProfileInfoStyle.photo}
				src={user.photo}
				alt={user.userName}
			/>
			{/* Возможно стоит вынести в отдельный компонент */}
			<Datalist className={ProfileInfoStyle.datalist}>
				<DataTerm className="visibility-hidden">Organization</DataTerm>
				<DataDescription
					className={classNames(
						ProfileInfoStyle.dataDescription,
						ProfileInfoStyle.dataDescription__organization
					)}
				>
					{user.organization}
				</DataDescription>
				<DataTerm className="visibility-hidden">User name</DataTerm>
				<DataDescription className={ProfileInfoStyle.dataDescription}>
					{user.userName}
				</DataDescription>
				<DataTerm className="visibility-hidden">Email</DataTerm>
				<DataDescription className={ProfileInfoStyle.dataDescription}>
					{user.email}
				</DataDescription>
				<DataTerm className="visibility-hidden">Phone</DataTerm>
				<DataDescription className={ProfileInfoStyle.dataDescription}>
					{user.phone}
				</DataDescription>
				<DataTerm className="visibility-hidden">Status</DataTerm>
				<DataDescription className={ProfileInfoStyle.dataDescription}>
					{user.status}
				</DataDescription>
			</Datalist>

			{isPageOwner && (
				<Button className={ProfileInfoStyle.button} to="change">
					Edit profile
				</Button>
			)}
		</section>
	);
};
