import React, { FC, useCallback, useRef, useState, MouseEvent } from "react";
import classNames from "classnames";
import { Popover } from "../../ui/Popover";
import { useUserInfo } from "../../hooks";
import { ClassNameComponent } from "../../interfaces/common";
import { Picture } from "../../ui/Picture";
import { ProfileLinkMenu } from "../ProfileLinkMenu";

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
			<div ref={parentRef}>
				<Picture
					className={ProfileLinkStyle.photo}
					onClick={toggleShow}
					src={photo}
					alt={userName}
				/>
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
