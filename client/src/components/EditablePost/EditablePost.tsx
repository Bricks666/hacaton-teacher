import React, { FC, useMemo } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { ExtractProps, Manipulation } from "../../interfaces/common";
import { Post } from "../../ui/Post";
import { CardHeaderWithEditing } from "../CardHeaderWithEditing";

export const EditablePost: FC<ExtractProps<typeof Post, "Header">> = (
	props
) => {
	const link = `/profile/${props.authorId}`;
	const editFormLink = usePrepareLink({
		addQueryParam: {
			[GET_PARAMS.popups]: POPUPS.post,
		},
	});

	const manipulations: Manipulation[] = useMemo(
		() => [
			{
				label: "Edit",
				type: "link",
				to: editFormLink,
			},
			{
				label: "Delete",
				type: "button",
				onClick: console.log,
			},
		],
		[editFormLink]
	);
	return (
		<Post
			{...props}
			Header={
				<CardHeaderWithEditing
					header={props.authorName}
					link={link}
					manipulations={manipulations}
				/>
			}
		/>
	);
};
