/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useCallback, useRef, useState, MouseEvent } from "react";
import classNames from "classnames";
import { Popover } from "../../ui/Popover";
import { useAuthInfo } from "../../hooks";
import { ClassNameProps } from "../../interfaces/common";
import { ProfileLinkMenu } from "../ProfileLinkMenu";
import { Paragraph } from "../../ui/Paragraph";
import { BlockWrapper } from "../../ui/BlockWrapper";
import { Avatar } from "../../ui/Avatar";

import ProfileLinkStyle from "./ProfileLink.module.css";

export const ProfileLink: FC<ClassNameProps> = ({ className }) => {
	const [isShow, setIsShow] = useState(false);
	const parentRef = useRef(null);
	const { photo, userName } = useAuthInfo();

	const toggleShow = useCallback(
		(evt?: MouseEvent) => {
			evt && evt.stopPropagation();
			setIsShow(!isShow);
		},
		[setIsShow, isShow]
	);

	const modifiers = [
		{
			name: "offset",
			options: {
				offset: [0, 5],
			},
		},
	];

	return (
		<div className={classNames(className)}>
			<BlockWrapper>
				<div
					className={ProfileLinkStyle.info}
					ref={parentRef}
					onClick={toggleShow}
					role="button"
					aria-haspopup={true}
					tabIndex={0}
				>
					<Avatar src={photo} alt={userName} size="large" />
					<Paragraph className={ProfileLinkStyle.name}>{userName}</Paragraph>
				</div>
			</BlockWrapper>
			<Popover
				reference={parentRef.current}
				isOpen={isShow}
				onClose={toggleShow}
				placement="bottom-end"
				modifiers={modifiers}
			>
				<ProfileLinkMenu />
			</Popover>
		</div>
	);
};
