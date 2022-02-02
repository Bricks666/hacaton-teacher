/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useCallback, useRef, useState, MouseEvent } from "react";
import classNames from "classnames";
import { Popover } from "../../ui/Popover";
import { useUserInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../../ui/Picture";
import { ProfileLinkMenu } from "../ProfileLinkMenu";
import { Paragraph } from "../../ui/Paragraph";

import ProfileLinkStyle from "./ProfileLink.module.css";

export const ProfileLink: FC<ClassNameComponent> = ({ className }) => {
	const [isShow, setIsShow] = useState(false);

	const parentRef = useRef(null);

	const { photo, userName } = useUserInfo();
	const toggleShow = useCallback(
		(evt?: MouseEvent) => {
			evt && evt.stopPropagation();
			setIsShow(!isShow);
		},
		[setIsShow, isShow]
	);
	return (
		<div className={classNames(className)}>
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
