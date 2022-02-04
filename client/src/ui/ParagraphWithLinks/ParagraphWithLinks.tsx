import React, { FC, ReactNode, ReactText } from "react";
import { ClassNameComponent } from "../../interfaces/common";
import { parseParagraphLink } from "../../utils";
import { Link } from "../Link";
import { Paragraph } from "../Paragraph";

interface ParagraphWithLinksComponent extends ClassNameComponent {
	readonly children?: ReactText;
}

const parseLink =
	/(\[[\w\s]{1,}\]\((?:https?:\/\/|\bwww\.)[\w\d\-/:.=?&]{1,}\)|(?:https?:\/\/|\bwww\.)[\w\d\-/:.=?&]{1,})|(\n+|(?:(?!(\[[\w\s]{1,}\]\((?:https?:\/\/|\bwww\.)[\w\d\-/:.=?&]{1,}\)|(?:https?:\/\/|\bwww\.)[\w\d\-/:.=?&]{1,})).)+)/gim;

export const ParagraphWithLinks: FC<ParagraphWithLinksComponent> = ({
	children,
	className,
}) => {
	const parsedText: ReactNode[] = [];
	children?.toString().replace(parseLink, (_, link, text) => {
		if (link) {
			const parsedLink = parseParagraphLink(link);

			parsedText.push(
				<Link
					to={parsedLink.href}
					type={parsedLink.refType}
					key={parsedLink.href}
				>
					{parsedLink.label}
				</Link>
			);
		} else {
			parsedText.push(text);
		}
		return "";
	});
	return <Paragraph className={className}>{parsedText}</Paragraph>;
};
