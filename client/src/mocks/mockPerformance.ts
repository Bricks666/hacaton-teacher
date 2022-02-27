import { Performance } from "../models/Performance";
export const mockPerformances: Performance[] = [
	{
		id: 1,
		header: "HGghkasjahjksbfdjhasbdfjhbasdf",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.abicart.com%2Fshop%2F21614%2Fart14%2Fh5001%2F8085001-origpic-14e3ad.jpg%3Fmax-width%3D1440%26max-height%3D1440%26quality%3D70&f=1&nofb=1",
		description:
			"One way to make sure that only one instance can be created, is by creating a variable called instance. In the constructor of Counter, we can set instance equal to a reference to the instance when a new instance is created. We can prevent new instantiations by checking if the instance variable already had a value. If that's the case, an instance already exists. This shouldn't happen: an error should get thrown to let the user know",
	},
	{
		id: 2,
		header: "HGghkasjahjksbfdjhasbdfjhbasdf",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.diplomacompany.com%2Fwp-content%2Fuploads%2Ffake-diploma.jpg&f=1&nofb=1",
		description:
			"However, this class doesn’t meet the criteria for a Singleton! A Singleton should only be able to get instantiated once. Currently, we can create multiple instances of the Counter class.",
	},
	{
		id: 3,
		header: "HGghkasjahjksbfdjhasbdfjhbasdf",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.ArZfzw9khOmpC4a74x5C1w%26pid%3DApi&f=1",
		description:
			"Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.",
	},
	{
		id: 4,
		header: "HGghkasjahjksbfdjhasbdfjhbasdf",
		photo:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UqkADrkuAWGoHwr0FsC0qwHaF7%26pid%3DApi&f=1",
		description: `Let's take a look at an application that implements the Counter example. We have the following files:

      counter.js: contains the Counter class, and exports a Counter instance as its default export
      index.js: loads the redButton.js and blueButton.js modules
      redButton.js: imports Counter, and adds Counter's increment method as an event listener to the red button, and logs the current value of counter by invoking the getCount method
      blueButton.js: imports Counter, and adds Counter's increment method as an event listener to the blue button, and logs the current value of counter by invoking the getCount method

  logo
  logo
  logo
  logo

  Both blueButton.js and redButton.js import the same instance from counter.js. This instance is imported as Counter in both files.`,
	},
];
