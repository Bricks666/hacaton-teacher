import React, { FC } from "react";
import classNames from "classnames";
import { usePosts } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { List } from "../../ui/List";
import { PostCard } from "../../ui/PostCard";
import { useLoadingPosts } from "../../hooks/useLoadingPosts";
import { LoadingWrapper } from "../../ui/LoadingWrapper";

import PostsStyle from "./Posts.module.css";

export const Posts: FC<ClassNameComponent> = ({ className }) => {
	const posts = usePosts();
	const isLoading = useLoadingPosts();

	return (
		<LoadingWrapper isLoading={isLoading}>
			<List
				className={classNames(PostsStyle.list, className)}
				items={posts}
				Card={PostCard}
				indexedBy={"id"}
				type="unnumbered"
			/>
		</LoadingWrapper>
	);
};
