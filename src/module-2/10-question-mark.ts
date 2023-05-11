// //# ternary operator
// const age: number = 15;

// // if (age >= 18) {
// // 	console.log("Yes");
// // } else {
// // 	console.log("No");
// // }

// const isAdult = age >= 18 ? "Yes" : "No";
// // console.log(isAdult);

// //# Nullish Coalescing Operator
// // Null and undefined
// const isAuthenticatorUser = "";
// const userName = isAuthenticatorUser ?? "Guest";
// const userName2 = isAuthenticatorUser ? isAuthenticatorUser : "Guest2";
// // console.log({ userName }, { userName2 });

// type Manush = {
// 	name: string;
// 	age: number;
// 	address: {
// 		city: "No City";
// 		road: "No Road";
// 		home?: "";
// 	};
// };

// const manush: Manush = {
// 	name: "Manush",
// 	age: 100,
// 	address: {
// 		city: "No City",
// 		road: "No Road",
// 	},
// };
// const home = manush?.address?.home ?? "No Home"; // default 'No Home'
// console.log({ home });
