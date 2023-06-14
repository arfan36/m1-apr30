"use strict";
var _a, _b;
//# ternary operator
const age = 15;
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
const userName = isAuthenticatorUser !== null && isAuthenticatorUser !== void 0 ? isAuthenticatorUser : "Guest";
const userName2 = isAuthenticatorUser ? isAuthenticatorUser : "Guest2";
console.log({ userName }, { userName2 });
const manush = {
    name: "Manush",
    age: 100,
    address: {
        city: "No City",
        road: "No Road",
    },
};
const home = (_b = (_a = manush === null || manush === void 0 ? void 0 : manush.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; // default 'No Home';
// We can use optional chaining and nullish coalescing operator at a same time
console.log({ home });
