import React, { FC } from "react";
import { Posts } from "../../components/Posts";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

import BlogPageStyle from "./BlogPage.module.css";

export const BlogPage: FC = () => {
	return (
		<main>
			<ContentWrapper className={BlogPageStyle.wrapper}>
				<SectionHeader className={BlogPageStyle.header}>Blog</SectionHeader>
				<Posts />
			</ContentWrapper>
		</main>
	);
};
