"use strict";
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(typeof fullName);
