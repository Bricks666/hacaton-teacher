interface UserInfo {
	readonly id: number;
	readonly login: string;
	readonly password: string;
	readonly photo: string;
	readonly userName: string;
}

export const mockUsers: UserInfo[] = [
	{
		id: 1,
		login: "user1",
		password: "user1",
		userName: "Moke",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.U9tN4drAxt-NXfe7ER7TVAHaEt%26pid%3DApi&f=1",
	},
	{
		id: 2,
		login: "user2",
		password: "user2",
		userName: "adfasdfe",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffotografy.ru%2Fwp-content%2Fuploads%2F2014%2F07%2F131.jpg&f=1&nofb=1",
	},
	{
		id: 3,
		login: "user3",
		password: "user3",
		userName: "asdJaiaj",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XyXqcJGj1Webn3zwLfWm0gHaE5%26pid%3DApi&f=1",
	},
	{
		id: 4,
		login: "user4",
		password: "user4",
		userName: "adfasdfeKakakakak",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iIb2Mv2vlZDZvACcarW0YAHaEc%26pid%3DApi&f=1",
	},
];
