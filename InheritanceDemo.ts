class Animal {
	
	color: string;

    setColor(color: string) : void {
       this.color = color;
	}

    getColor() : string {
        return this.color;
	}		
	
}

class Dog extends Animal {
	
	name: string;
	
	setName(name : string) : void {
		this.name = name;
	}
	
	getName() : string {
		return this.name;
	}
}

var dogRef = new Dog();
dogRef.setName("browney");
dogRef.setColor("brown");

console.log(dogRef.getName());
console.log(dogRef.getColor());