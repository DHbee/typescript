class Student<N, I>{
	
	name: N;
	
	id : I;
	
	setName (name: N) : void {
		this.name = name;
	}
	
	setId(id : I) : void {
		this.id = id;
	}

    display<K, L>(name: K, id: L) : void {
		console.log(stu.name);
		console.log(stu.id);
	}		
	
}

let stu = new Student<string, number>();
stu.setName("deepika");
stu.setId(100);

console.log(stu.name);
console.log(stu.id);

stu.display<string, number>(stu.name, stu.id);
	