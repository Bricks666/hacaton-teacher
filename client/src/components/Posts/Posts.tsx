import React, { FC } from "react";
import classNames from "classnames";
import { usePosts } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { List } from "../../ui/List";
import { useLoadingPosts } from "../../hooks/useLoadingPosts";
import { ContentLoading } from "../../ui/ContentLoading";
import { PostCard } from "../PostCard";
import { EditablePost } from "../EditablePost";

import PostsStyle from "./Posts.module.css";

export const Posts: FC<ClassNameComponent> = ({ className }) => {
	const posts = usePosts();
	const isLoading = useLoadingPosts();

	return (
		<ContentLoading isLoading={isLoading}>
			<List
				className={classNames(PostsStyle.list, className)}
				items={posts}
				Card={EditablePost}
				indexedBy={"id"}
				type="unnumbered"
			/>
		</ContentLoading>
	);
};
