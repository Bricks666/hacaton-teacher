import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ChangeProfileInfoForm } from "../../components/ChangeProfileInfoForm";
import { ProfileInfo } from "../../components/ProfileInfo";
import { usePopups } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import ProfilePageStyle from "./ProfilePage.module.css";

export const ProfilePage: FC<ClassNameComponent> = ({ className }) => {
	usePopups();
	return (
		<main className={className}>
			<ContentWrapper className={ProfilePageStyle.profilePage}>
				<SectionHeader>Profile</SectionHeader>
				<Routes>
					<Route
						path="change"
						element={
							<ChangeProfileInfoForm className={ProfilePageStyle.profileInfo} />
						}
					/>
					<Route
						path="*"
						element={<ProfileInfo className={ProfilePageStyle.profileInfo} />}
					/>
				</Routes>
			</ContentWrapper>
		</main>
	);
};
