// Generic Interface

interface CrushInterface<T, U = null, V = undefined> {
	name: string;
	husband: T;
	wife?: U;
	other?: V;
}

const crush1: CrushInterface<boolean, string> = {
	name: "Kate Winslets",
	husband: true,
	wife: "Chokina",
};

interface PersonInterface {
	name: string;
	age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
	name: "Kate",
	husband: {
		name: "Persian",
		age: 30,
	},
	wife: {
		name: "Winslett",
		age: 40,
	},
};

const crush2: CrushInterface<string> = {
	name: "Kate Winslets",
	husband: "Persian",
};

interface HusbandInterface {
	name: string;
	salary: number;
}

const crush3: CrushInterface<HusbandInterface> = {
	name: "Kate Winslets",
	husband: {
		name: "Persian",
		salary: 0.001,
	},
};

type GenericTuple_1<X, Y> = [X, Y];

const relation_b4: GenericTuple_1<string, string> = ["Persian", "Kate Winslet"];

// type relationWithSalaryType = { name: string; salary: number };
interface RelationWithSalaryInterface {
	name: string;
	salary: number;
}

const relationWithSalary_b4: GenericTuple_1<
	RelationWithSalaryInterface,
	string
> = [
	{
		name: "Persian",
		salary: 1000000,
	},
	"Kate Winslet",
];
const relationWithSalary2_b4: GenericTuple_1<
	RelationWithSalaryInterface,
	string
> = [
	{
		name: "Persian",
		salary: 1000000,
	},
	"Kate Winslet",
];

type GenericArray_1<T> = Array<T>;

const rollNumbers_b4: GenericArray_1<number> = [44, 12, 4];
const rollNumbers2_b4: GenericArray_1<string> = ["44", "12", "4"];
const rollNumbers3_b4: GenericArray_1<Boolean> = [true, false];

type NameRollType_1 = { name: string; roll: number };

const userNameAndRollNumbers_b4: GenericArray_1<NameRollType_1> = [
	{
		name: "Mr. X",
		roll: 1,
	},
	{
		name: "Mr. Y",
		roll: 2,
	},
];
