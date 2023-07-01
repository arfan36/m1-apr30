interface Person {
	name: string;
	email?: string;
	contactNo: string;
}

//: Pick
type Contact = Pick<Person, "email" | "contactNo">;

//: Omit
type Name = Omit<Person, "email" | "contactNo">;
//

//: Partial
// To make all the properties be optional type
type Optional = Partial<Person>;

//: Required
// To make all the properties be required type
type RequiredProps = Required<Person>;

const person: Readonly<Person> = {
	name: "John",
	email: "john@gmail.com",
	contactNo: "25425252",
};
// person.name = "john2";

// type myObj = {
// 	a: string;
// 	b: string;
// 	c: string;
// };
//: using index signature
// type myObj = {
// 	[key: string]: string;
// };
// type myObj = {
// 	[key: 'a'|'b'|'c']: string;
// };

//: Record
type myObj = Record<"a" | "b" | "c" | "d", string>;

const obj: myObj = {
	a: "1",
	b: "2",
	c: "3",
	d: "4",
};

// check