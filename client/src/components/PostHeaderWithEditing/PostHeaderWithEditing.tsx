import React, { FC, useCallback, useState, useMemo } from "react";
import { GET_PARAMS, POPUPS } from "../../config";
import { usePrepareLink } from "../../hooks";
import { CardManipulationMenu } from "../../ui/CardManipulationMenu";
import { PostHeader } from "../../ui/PostHeader";

import PostHeaderWithEditingStyle from "./PostHeaderWithEditing.module.css";

type PostHeaderWithEditingComponent = Parameters<typeof PostHeader>[0] & {
	readonly id: number;
};

export const PostHeaderWithEditing: FC<PostHeaderWithEditingComponent> = ({
	id,
	...props
}) => {
	const [parentRef, setParentRef] = useState<HTMLButtonElement | null>(null);
	const [showPopover, setShowPopover] = useState(false);
	const editFormLink = usePrepareLink({
		query: {
			[GET_PARAMS.popups]: POPUPS.post,
			[GET_PARAMS.postId]: id,
		},
	});

	const onToggleShowPopover = useCallback(
		() => setShowPopover(!showPopover),
		[showPopover]
	);

	const manipulations: Parameters<
		typeof CardManipulationMenu
	>[0]["manipulations"] = useMemo(
		() => [
			{
				label: "Edit",
				type: "link",
				to: editFormLink,
			},
			{
				label: "Delete",
				type: "button",
				onCLick: console.log,
			},
		],
		[editFormLink]
	);

	return (
		<PostHeader className={PostHeaderWithEditingStyle.header} {...props}>
			<button
				className={PostHeaderWithEditingStyle.button}
				onClick={onToggleShowPopover}
				ref={setParentRef}
			/>
			{showPopover && (
				<CardManipulationMenu
					reference={parentRef}
					onClose={onToggleShowPopover}
					manipulations={manipulations}
				/>
			)}
		</PostHeader>
	);
};
