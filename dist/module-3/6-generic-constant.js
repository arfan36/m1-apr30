"use strict";
// Spread Operator
const addMeInMyCrushMind_b6 = (myInfo) => {
    const crush = "Kate Winslets";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo_b6 = {
    name: "Persian",
    age: 100,
    salary: 1000000,
    other1: false,
    other2: null,
};
const result_b6 = addMeInMyCrushMind_b6(myInfo_b6);
// result_b6
