import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileInfo } from "../../components/ProfileInfo";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import ProfilePageStyle from "./ProfilePage.module.css";

export const ProfilePage: FC<ClassNameComponent> = ({ className }) => {
	return (
		<main className={className}>
			<ContentWrapper className={ProfilePageStyle.profilePage}>
				<SectionHeader>Profile</SectionHeader>
				<Routes>
					<Route path="change" />
					<Route path="*" element={<ProfileInfo />} />
				</Routes>
			</ContentWrapper>
		</main>
	);
};
