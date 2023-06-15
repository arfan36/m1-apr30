// import * as Methods from "./1-module";
// import Jekono from "./1-module";
// import addTwo from "./utils/2-add";
// import multiply from "./utils/2-multiply";
// import average from "./utils/2-average";
import methods from "./utils/2-index";

const add = (param1: number, param2: number, param3: number): number => {
	return param1 + param2 + param3;
};

const res1 = methods.addTwo(4, 6);
const res2 = methods.multiply(4, 6);
const res3 = methods.average(4, 6);
