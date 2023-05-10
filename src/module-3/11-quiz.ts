// function getArrayItem<T, K extends keyof T>(
// 	arr: T[],
// 	index: number,
// 	key: K
// ): T[K] {
// 	const item = arr[index];
// 	return item[key];
// }

// interface Person {
// 	name: string;
// 	age: number;
// 	email: string;
// }

// const people: Person[] = [
// 	{ name: "Alice", age: 25, email: "alice@example.com" },
// 	{ name: "Bob", age: 30, email: "bob@example.com" },
// 	{ name: "Charlie", age: 35, email: "charlie@example.com" },
// ];

// const name2 = getArrayItem(people, 1, "name");
// console.log(name2); // Output: Bob

// const age = getArrayItem(people, 2, "age");
// console.log(age); // Output: 35

// const email = getArrayItem(people, 0, "email");
// console.log(email); // Output: alice@example.com

/* 
.
.
.
.
.
.*/

// What will be the type of the fullName function?
interface Person {
	firstName: string;
	lastName: string;
}

function fullName<T extends Person>(person: T): string {
	return `${person.firstName} ${person.lastName}`;
}

console.log(typeof fullName);
