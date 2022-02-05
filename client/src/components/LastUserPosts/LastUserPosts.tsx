import React, { FC } from "react";
import { useLoadingUserPosts, useUserPosts } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { FriendlyList } from "../../ui/FriendlyList";
import { EditablePost } from "../EditablePost";

export const LastUserPosts: FC<ClassNameComponent> = ({ className }) => {
	const posts = useUserPosts();
	const isLoading = useLoadingUserPosts();

	return (
		<FriendlyList
			className={className}
			items={posts}
			Card={EditablePost}
			indexedBy="id"
			isLoading={isLoading}
			type="unnumbered"
			emptyLabel="We haven't any published pots yet"
			count={1}
		/>
	);
};
