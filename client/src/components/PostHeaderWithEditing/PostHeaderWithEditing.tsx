import React, { FC, useCallback, useState } from "react";
import { Popover } from "../../ui/Popover";
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

	const onToggleShowPopover = useCallback(
		() => setShowPopover(!showPopover),
		[showPopover]
	);

	return (
		<PostHeader className={PostHeaderWithEditingStyle.header} {...props}>
			<button
				className={PostHeaderWithEditingStyle.button}
				onClick={onToggleShowPopover}
				ref={setParentRef}
			/>
			{showPopover && (
				<Popover reference={parentRef} onClose={onToggleShowPopover}></Popover>
			)}
		</PostHeader>
	);
};
