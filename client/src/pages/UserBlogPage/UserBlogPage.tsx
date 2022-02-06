import React, { FC } from "react";
import { UserPosts } from "../../components/UserPosts";
import { GET_PARAMS, POPUPS } from "../../config";
import { useIsPageOwner, usePrepareLink } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Button } from "../../ui/Button";
import { ContentWrapper } from "../../ui/ContentWrapper/ContentWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

export const UserBlogPage: FC<ClassNameComponent> = ({ className }) => {
	const isPageOwner = useIsPageOwner();
	const postFormLink = usePrepareLink({
		query: {
			[GET_PARAMS.popups]: POPUPS.post,
		},
	});
	return (
		<main className={className}>
			<ContentWrapper>
				<SectionHeader>Blog</SectionHeader>
				<Button
					buttonType="link"
					to={postFormLink}
					type="common"
					color="secondary"
				>
					Add post
				</Button>
				<UserPosts isPageOwner={isPageOwner} />
			</ContentWrapper>
		</main>
	);
};
