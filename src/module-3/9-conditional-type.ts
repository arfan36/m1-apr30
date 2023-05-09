// // a type is dependent on another type.
// type a1 = number;
// type a3 = undefined;
// type a4 = number;

// type a2 = a1 extends string ? string : null;
// // nested conditional type
// type d = a1 extends null
// 	? null
// 	: a3 extends number
// 	? number
// 	: a4 extends null
// 	? null
// 	: never;

// type Sheikh = {
// 	wife1: string;
// 	wife2: string;
// };

// type A = keyof Sheikh; // 'wife1' | 'wife2'

// //....................... 'wife1' extends 'wife1' | 'wife2'
// //....................... 'wife3' extends 'wife1' | 'wife2'
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

// type CheckWife3 = CheckProperty<Sheikh, "wife3">;

// // Check korbe ei Sheikh Type a wife3 ase kina? true : false

// // Matha kharap Example
// type Bandhubi = "Monica" | "Rachel" | "Phebe"; // string literal

// type RemoveBandhubi<T, K> = T extends K ? never : T;

// type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Rachel">;
