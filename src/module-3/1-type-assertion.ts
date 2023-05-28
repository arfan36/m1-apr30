let emni: any;

emni = "Next Level web development";

// (emni as string).length;
<string>emni.length; //# same as previous line

function kgToGram(param: string | number): string | number | undefined {
	if (typeof param === "string") {
		const value = parseFloat(param) * 1000;
		return `The Converted result is ${value} gram`;
	}
	if (typeof param === "number") {
		const value = param * 1000;
		return value + "gram";
	}
}

// const resultToBeNumber = kgToGram(1000) as number;
const resultToBeNumber = <number>kgToGram(1000); //# same as previous line
const resultToBeString = <string>kgToGram("1000");

type CustomErrorType = {
	message: string;
};

try {
} catch (err) {
	console.log((err as CustomErrorType).message);
}
