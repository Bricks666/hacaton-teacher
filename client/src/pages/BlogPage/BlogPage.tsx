import React, { FC } from "react";
import { Posts } from "../../components/Posts";
import { GET_PARAMS, POPUPS } from "../../config";
import { useIsLogin, usePrepareLink } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import BlogPageStyle from "./BlogPage.module.css";

export const BlogPage: FC<ClassNameProps> = ({ className }) => {
	const createPostLink = usePrepareLink({
		query: { [GET_PARAMS.popups]: POPUPS.post },
	});
	const isLogin = useIsLogin();

	return (
		<main className={className}>
			<ContentWrapper className={BlogPageStyle.wrapper}>
				<SectionHeader
					className={BlogPageStyle.header}
					label="Blog"
					align="center"
				/>
				{isLogin && (
					<Button
						className={BlogPageStyle.button}
						to={createPostLink}
						color="secondary"
					>
						Add Post
					</Button>
				)}
				<Posts />
			</ContentWrapper>
		</main>
	);
};
