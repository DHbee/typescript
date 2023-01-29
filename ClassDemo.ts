class ClassDemo{
	
	name: string;
	id: number;
	
	constructor(name ?: string, id ?: number){
		this.name = name;
		this.id = id;
	}
	
	
	getName() : string {
		return this.name;
	}
	
	getId() : number{
		return this.id;
	}
}

var classRef = new ClassDemo("ravi", 10);
console.log(classRef.getName());
console.log(classRef.getId());


var classRef = new ClassDemo("krish");
console.log(classRef.getName());
console.log(classRef.getId());
