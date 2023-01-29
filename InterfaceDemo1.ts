interface Person {
	
	name: string;
	color: string;
	address: string;
	
}

let personInfo = (person: Person) => {
    console.log(person.name);
    console.log(person.color);	
	console.log(person.address);	
}

let person = {name: "ravi", color: "white", address: "nandyala"};

personInfo(person);
