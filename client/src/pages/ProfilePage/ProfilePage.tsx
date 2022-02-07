import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ChangeProfileInfoForm } from "../../components/ChangeProfileInfoForm";
import { LastUserPerformance } from "../../components/LastUserPerformance";
import { LastUserPosts } from "../../components/LastUserPosts/LastUserPosts";
import { ProfileInfo } from "../../components/ProfileInfo";
import { GET_PARAMS, POPUPS } from "../../config";
import { useLoadingProfile, usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { ContentLoading } from "../../ui/ContentLoading";
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

	const userPerformance = usePrepareLink({
		query: {
			[GET_PARAMS.popups]: POPUPS.userPerformance,
		},
	});

	const isLoading = useLoadingProfile();

	return (
		<main className={className}>
			<ContentWrapper className={ProfilePageStyle.profilePage}>
				<SectionHeader className={ProfilePageStyle.header}>
					Profile
				</SectionHeader>
				<ContentLoading
					className={ProfilePageStyle.loading}
					isLoading={isLoading}
				>
					<Routes>
						<Route
							path="change"
							element={
								<ChangeProfileInfoForm
									className={ProfilePageStyle.profileInfo}
								/>
							}
						/>
						<Route
							path="*"
							element={<ProfileInfo className={ProfilePageStyle.profileInfo} />}
						/>
					</Routes>
					<ProfileBlock label="Performance monitoring" to={userPerformance}>
						<LastUserPerformance />
					</ProfileBlock>
					<ProfileBlock label="Blog" to={userBlog}>
						<LastUserPosts />
					</ProfileBlock>
				</ContentLoading>
			</ContentWrapper>
		</main>
	);
};
