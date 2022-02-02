import React, { FC, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CreatePost } from "../../components/CreatePost";
import { Posts } from "../../components/Posts";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { MainPopup } from "../../ui/MainPopup";
import { SectionHeader } from "../../ui/SectionHeader";

import BlogPageStyle from "./BlogPage.module.css";

export const BlogPage: FC<ClassNameComponent> = ({ className }) => {
	const navigate = useNavigate();
	const onClose = useCallback(() => {
		navigate("", { replace: true });
	}, [navigate]);

	return (
		<main className={className}>
			<ContentWrapper className={BlogPageStyle.wrapper}>
				<SectionHeader className={BlogPageStyle.header}>Blog</SectionHeader>
				<Button
					className={BlogPageStyle.button}
					type="link"
					to="add"
					color="yellow"
				>
					Add Post
				</Button>
				<Posts />
				<Routes>
					<Route
						path="add"
						element={
							<MainPopup
								isOpen={true}
								onClose={onClose}
								title={"Create new post"}
							>
								<CreatePost />
							</MainPopup>
						}
					/>
				</Routes>
			</ContentWrapper>
		</main>
	);
};
