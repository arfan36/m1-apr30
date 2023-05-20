type NoobDeveloper = {
	name: string;
};

// type JuniorDeveloper = {
// 	name: string;
// 	expertise: string;
// 	experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
	expertise: string;
	experience: number;
};

//# enum type
// enum Level {
// 	junior = "junior", // default value-> junior = 0;
// 	mid = "mid", // default value-> mid = 1;
// 	senior = "senior", // default value-> senior =2
// }

type NextLevelDeveloper = JuniorDeveloper & {
	leadershipExperience: number;
	level: "junior" | "mid" | "senior";
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
	name: "Moznu Mia",
	expertise: "JavaScript",
	experience: 2,
};

const developer: NextLevelDeveloper = {
	name: "Next Bhai",
	expertise: "Typescript",
	experience: 2,
	leadershipExperience: 1,
	level: "senior",
};
