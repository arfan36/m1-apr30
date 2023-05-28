type GenericTuple<X, Y> = [X, Y]; //# X, Y can be number, string, boolean etc

const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];

// type relationWithSalaryType = { name: string; salary: number };
interface RelationWithSalaryInterface {
	name: string;
	salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
	{
		name: "Persian",
		salary: 1000000,
	},
	"Kate Winslet",
];
const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
	{
		name: "Persian",
		salary: 1000000,
	},
	"Kate Winslet",
];

type GenericArray<T> = Array<T>;

const rollNumbers_t_b3: number[] = [44, 12, 4];
const rollNumbers_t2_b3: Array<number> = [44, 12, 4]; //# same as previous line
const rollNumbers_b3: GenericArray<number> = [44, 12, 4];

// const rollNumbers2: string[] = ["44", "12", "4"];
// const rollNumbers2: Array<string> = ["44", "12", "4"];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<Boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
	{
		name: "Mr. X",
		roll: 1,
	},
	{
		name: "Mr. Y",
		roll: 2,
	},
];
