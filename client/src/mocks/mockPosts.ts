import { Post } from "../models/Posts";

export const mockPosts: Post[] = [
	{
		id: 1,
		authorId: 4,
		authorName: "David Jackson",
		authorPhoto:
			"https://habrastorage.org/getpro/habr/branding/2df/b89/248/2dfb89248ab9bc5d3c0794e44d25f33c.png",
		content:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ",
	},
	{
		id: 2,
		authorId: 3,
		authorName: "Jenifer Lue",
		authorPhoto:
			"https://popper.js.org/static/popper-text-45fb69958c6fc80df98607583c280b4b.svg",
		content:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
	},
];
