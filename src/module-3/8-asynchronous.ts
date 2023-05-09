// Mocking

// Json Place holder
interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	return response.json();
};

const getTodoData = async (): Promise<void> => {
	const result = await getTodo();
	console.log("🚀 ~ result:", result);
};

getTodoData();

const makePromise = () => {
	return new Promise<string>((resolve, reject) => {
		const data: string = "Data is fetched";
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};

const makePromiseBoolean = () => {
	return new Promise<boolean>((resolve, reject) => {
		const data: boolean = true;
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};

interface DataType {
	data: string;
}

const makePromiseObject = (): Promise<DataType> => {
	return new Promise<DataType>((resolve, reject) => {
		const data: DataType = { data: "Data is fetched" };
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};

const getPromiseData = async (): Promise<DataType> => {
	const data = await makePromiseObject();
	return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
	const data = await makePromiseBoolean();
	return data;
};

// Promise<string> Promise<boolean> Promise<Object>
