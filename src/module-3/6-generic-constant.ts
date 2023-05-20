// Spread Operator

// type MandatoryDataTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
	name: string;
	age: number;
	salary: number;
}

const addMeInMyCrushMind_b6 = <T extends MandatoryInterface>(myInfo: T) => {
	const crush = "Kate Winslets";
	const newData = { ...myInfo, crush };
	return newData;
};

type MyInfoType = {
	name: string;
	age: number;
	salary: number;
	other1: boolean;
	other2: null;
};

const myInfo_b6 = {
	name: "Persian",
	age: 100,
	salary: 1000000,
	other1: false,
	other2: null,
};

const result_b6 = addMeInMyCrushMind_b6(myInfo);
// result_b6
