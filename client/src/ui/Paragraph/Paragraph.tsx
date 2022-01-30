import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import ParagraphStyle from "./Paragraph.module.css";

export const Paragraph: FC<ClassNameComponent> = ({ className, children }) => {
	return (
		<p className={classNames(ParagraphStyle.paragraph, className)}>
			{children}
		</p>
	);
};
