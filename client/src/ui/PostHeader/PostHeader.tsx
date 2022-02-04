import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { Link } from "../Link";

import PostHeaderStyle from "./PostHeader.module.css";

interface PostHeaderComponent extends ClassNameComponent {
	readonly link: string;
	readonly authorName: string;
}

export const PostHeader: FC<PostHeaderComponent> = ({
	link,
	authorName,
	children,
	className,
}) => {
	return (
		<header className={classNames(className)}>
			<p className={PostHeaderStyle.paragraph}>
				<Link className={PostHeaderStyle.link} to={link} type="react">
					{authorName}
				</Link>
			</p>
			{children}
		</header>
	);
};
