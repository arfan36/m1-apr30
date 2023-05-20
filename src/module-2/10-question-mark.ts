//# ternary operator
const age: number = 15;

// if (age >= 18) {
// 	console.log("Yes");
// } else {
// 	console.log("No");
// }

const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);

//# Nullish Coalescing Operator
// only apply on //# Null and undefined
const isAuthenticatorUser = "";
const userName = isAuthenticatorUser ?? "Guest";
const userName2 = isAuthenticatorUser ? isAuthenticatorUser : "Guest2";
console.log({ userName }, { userName2 });

type Manush = {
	name: string;
	age: number;
	address: {
		city: "No City"; // This is called literal type
		road: "No Road"; // This is called literal type
		home?: ""; // This is called optional
	};
};

const manush: Manush = {
	name: "Manush",
	age: 100,
	address: {
		city: "No City",
		road: "No Road",
	},
};
const home = manush?.address?.home ?? "No Home"; // default 'No Home';
// We can use optional chaining and nullish coalescing operator at a same time
console.log({ home });
