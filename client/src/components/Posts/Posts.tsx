import React, { FC } from "react";
import classNames from "classnames";
import { usePosts } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { useLoadingPosts } from "../../hooks/useLoadingPosts";
import { PostCard } from "../PostCard";
import { FriendlyList } from "../../ui/FriendlyList";
import { Post } from "../../models/Posts";

import PostsStyle from "./Posts.module.css";

export const Posts: FC<ClassNameProps> = ({ className }) => {
	const posts = usePosts();
	const isLoading = useLoadingPosts();

	return (
		<FriendlyList<Post>
			className={classNames(PostsStyle.list, className)}
			items={posts}
			isLoading={isLoading}
			Card={PostCard}
			indexedBy="id"
			type="unnumbered"
			emptyLabel="Blog is empty"
			loadingClassName={PostsStyle.loading}
		/>
	);
};
