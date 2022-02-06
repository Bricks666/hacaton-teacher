import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { useClosePopup, useIsPageOwner, usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { FullScreenPopup } from "../../ui/FullScreenPopup";
import { SectionHeader } from "../../ui/SectionHeader";
import { UserPosts } from "../UserPosts";

interface UserBlog extends ClassNameComponent {
	readonly isOpen: boolean;
}

export const UserBlog: FC<UserBlog> = ({ isOpen }) => {
	const onClose = useClosePopup();
	const isPageOwner = useIsPageOwner();
	const postFormLink = usePrepareLink({
		addQueryParam: {
			[GET_PARAMS.popups]: POPUPS.post,
		},
	});

	return (
		<FullScreenPopup isOpen={isOpen} onClose={onClose}>
			<SectionHeader>Blog</SectionHeader>
			{isPageOwner && (
				<Button buttonType="link" to={postFormLink}>
					Add post
				</Button>
			)}
			<UserPosts isPageOwner={isPageOwner} />
		</FullScreenPopup>
	);
};
