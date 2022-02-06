import React, { FC } from "react";
import { useLoadingUserPosts, useUserPosts } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { FriendlyList } from "../../ui/FriendlyList";
import { EditablePost } from "../EditablePost";
import { PostCard } from "../PostCard";

interface UserPostsComponent extends ClassNameComponent {
	readonly isPageOwner: boolean;
}

export const UserPosts: FC<UserPostsComponent> = ({
	className,
	isPageOwner,
}) => {
	const posts = useUserPosts();
	const isLoading = useLoadingUserPosts();

	return (
		<FriendlyList
			className={className}
			items={posts}
			Card={isPageOwner ? EditablePost : PostCard}
			indexedBy="id"
			isLoading={isLoading}
			emptyLabel="This user haven't had any posts"
			type="unnumbered"
		/>
	);
};
