import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ChangeProfileInfoForm } from "../../components/ChangeProfileInfoForm";
import { LastUserPerformance } from "../../components/LastUserPerformance";
import { LastUserPosts } from "../../components/LastUserPosts/LastUserPosts";
import { ProfileInfo } from "../../components/ProfileInfo";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { ProfileBlock } from "../../ui/ProfileBlock";
import { SectionHeader } from "../../ui/SectionHeader";

import ProfilePageStyle from "./ProfilePage.module.css";

export const ProfilePage: FC<ClassNameComponent> = ({ className }) => {
	const userBlog = usePrepareLink({
		query: {
			[GET_PARAMS.popups]: POPUPS.userBlog,
		},
	});

	return (
		<main className={className}>
			<ContentWrapper className={ProfilePageStyle.profilePage}>
				<SectionHeader className={ProfilePageStyle.header}>
					Profile
				</SectionHeader>
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
				<ProfileBlock label="Performance monitoring" to="performance">
					<LastUserPerformance />
				</ProfileBlock>
				<ProfileBlock label="Blog" to={userBlog}>
					<LastUserPosts />
				</ProfileBlock>
			</ContentWrapper>
		</main>
	);
};
