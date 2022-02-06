/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useCallback, useRef, useState, MouseEvent } from "react";
import classNames from "classnames";
import { Popover } from "../../ui/Popover";
import { useAuthInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../../ui/Picture";
import { ProfileLinkMenu } from "../ProfileLinkMenu";
import { Paragraph } from "../../ui/Paragraph";
import { BlockWrapper } from "../../ui/BlockWrapper";

import ProfileLinkStyle from "./ProfileLink.module.css";

export const ProfileLink: FC<ClassNameComponent> = ({ className }) => {
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
					<Picture
						className={ProfileLinkStyle.photo}
						src={photo}
						alt={userName}
					/>
					<Paragraph className={ProfileLinkStyle.name}>{userName}</Paragraph>
				</div>
			</BlockWrapper>
			{isShow && (
				<Popover
					reference={parentRef.current}
					onClose={toggleShow}
					placement="bottom-end"
				>
					<ProfileLinkMenu />
				</Popover>
			)}
		</div>
	);
};
