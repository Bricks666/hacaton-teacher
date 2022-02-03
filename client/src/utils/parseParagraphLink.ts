type RefType = "react" | "regular";
interface ParsedLink {
	readonly label: string;
	readonly href: string;
	readonly refType: RefType;
}

export const parseParagraphLink = (link: string): ParsedLink => {
	let label: string;
	let href: string;

	const isLabeledLink = link.includes("](");

	if (isLabeledLink) {
		const labelAndHref = link.split("](");
		label = labelAndHref[0].slice(1);
		href = labelAndHref[1].slice(0, -1);
	} else {
		label = link;
		href = link;
	}

	if (href[0] === "w") {
		href = `\\\\${href}`;
	}

	const refType: RefType = href.includes(window.location.hostname)
		? "react"
		: "regular";
	href = href.replace(window.location.origin, "");
	return {
		label,
		href,
		refType,
	};
};
