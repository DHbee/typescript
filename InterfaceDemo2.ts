interface Person {
	name : string;
}

interface PersonInfo extends Person{
	address: string;
}

interface Employee extends PersonInfo {
	code: number;
}

var emp1 = <Employee>{};

emp1.name= "deepika";
emp1.address= "bangalore";
emp1.code = 210812;
console.log(emp1.name);
console.log(emp1.address);
console.log(emp1.code);

//emp2 : Employee;

/*var emp3 : Employee; 
emp3.name= "gokul";
emp3.address= "tadipatri";
emp3.code = 08062014;
console.log(emp3.name);
console.log(emp3.address);
console.log(emp3.code);
*/

//var emp4 : Employee = {}; 

var emp5 : Employee = <Employee>{}; 
console.log(emp5.name);
console.log(emp5.address);
console.log(emp5.code);