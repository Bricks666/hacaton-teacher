import { Post } from "../models/Posts";

export const mockUserPosts: Post[] = [
	{
		id: 1,
		authorId: 1,
		authorName: "Kolay Nikol",
		authorPhoto:
			"https://www.imagesafaris.com/wp-content/uploads/2019/06/african_wildlife_photo_safaris_Amboseli-NP_Kenya_5102.jpg",
		content:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. ",
	},
	{
		id: 2,
		authorId: 1,
		authorName: "Kolay Nikol",
		authorPhoto:
			"https://www.imagesafaris.com/wp-content/uploads/2019/06/african_wildlife_photo_safaris_Amboseli-NP_Kenya_5102.jpg",
		content:
			"It is a [github](https://github.com/bricks666/hacaton-teacher) established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
	},
];
