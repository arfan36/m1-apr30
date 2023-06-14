"use strict";
// const a : newType="age"
// const b: newTypeUsingKeyOf = "hh";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "Mr.X", age: 100 }, "age");
// ({name: 'Mr.X', age: 100}, 'age' )  // 100
// const a = {
// 	name: "Mr.X",
// 	age: 100,
// };
// a["age"];
