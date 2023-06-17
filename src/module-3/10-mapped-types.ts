const arrayOfNumbers = [1, 2, 3]; // ['1', '2', '3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log("🚀 ~ arrayOfStrings:", arrayOfStrings);

type Volume = {
	height: number;
	width: string;
	depth: number;
};

// type Area = {
// 	[key in "height" | "width"]: string;
// };

type Area<T> = {
	// [key in keyof Volume]: Volume[key]; //: Volume['width'] --> number (property value)
	readonly [key in keyof T]: T[key]; //: [index in keyof Volume]
};

const area1: Area<{ height: number; width: string }> = {
	height: 10,
	width: "10",
};
// area1.height = 14;

type AreaString = {
	height: string;
	width: string;
};

type AreaReadOnly = {
	readonly height: number;
	readonly width: number;
};

const rectangularArea: AreaReadOnly = {
	height: 10,
	width: 12,
};

// rectangularArea.width = 10;

// type A = AreaNumber["height"]; //: look up types > property value
// type B = AreaNumber; //: 'width' | 'height

const obj_m3 = {
	name: "Persian",
};
obj_m3["name"]; // 'Persian'
