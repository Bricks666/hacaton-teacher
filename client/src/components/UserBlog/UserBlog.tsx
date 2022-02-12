import React, { FC } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { useClosePopup, useIsPageOwner, usePrepareLink } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { FullScreenPopup } from "../../ui/FullScreenPopup";
import { UserPosts } from "../UserPosts";

import UserBlogStyle from "./UserBlog.module.css";

interface UserBlog extends ClassNameProps {
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
		<FullScreenPopup
			className={UserBlogStyle.layout}
			isOpen={isOpen}
			onClose={onClose}
			label="Blog"
		>
			{isPageOwner && (
				<Button
					className={UserBlogStyle.button}
					color="secondary"
					to={postFormLink}
				>
					Add post
				</Button>
			)}
			<UserPosts isPageOwner={isPageOwner} />
		</FullScreenPopup>
	);
};
