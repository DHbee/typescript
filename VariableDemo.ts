/*
1. default data type
2. custom data type
3. inline datatype

*/

class VariableDemo {
	
	a : number = 10;
	
	b : boolean = true;
	
	c : { name: string, id : number} = {name: "deepika", id: 12342};
	
	d : Student;
	
	
	
}

interface Student{
	name: string;
	id : number;
}



var obj  = new VariableDemo();
console.log(obj.c.name);

obj.d = {name: "gokul", id: 19899};
console.log(obj.d.name);

