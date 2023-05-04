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

// enum Level {
// 	junior = "junior",
// 	mid = "mid",
// 	senior = "senior",
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
