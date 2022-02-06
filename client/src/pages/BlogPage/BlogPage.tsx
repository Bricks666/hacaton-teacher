import React, { FC } from "react";
import { Posts } from "../../components/Posts";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import BlogPageStyle from "./BlogPage.module.css";

export const BlogPage: FC<ClassNameComponent> = ({ className }) => {
	const createPostLink = usePrepareLink({
		query: { [GET_PARAMS.popups]: POPUPS.post },
	});
	return (
		<main className={className}>
			<ContentWrapper className={BlogPageStyle.wrapper}>
				<SectionHeader className={BlogPageStyle.header}>Blog</SectionHeader>
				<Button
					className={BlogPageStyle.button}
					buttonType="link"
					to={createPostLink}
					color="secondary"
				>
					Add Post
				</Button>
				<Posts />
			</ContentWrapper>
		</main>
	);
};
