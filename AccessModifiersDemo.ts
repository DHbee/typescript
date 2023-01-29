/*
1. access modifiers can be applied to properties and methods.
2. access modifiers can NOT be applied to class
3. default scope is public, if don't mention any access modifier
4. private properties/methods can be accessed in the same class
5. protected properties/methods can be accessed in the same class and sub class
6. public properties/methods can be accessed anywhere
7. super class variables can be accessed in sub class. but virtually will not come to subclass.


*/
class Animal {
	
	name: string = "teaser";
	protected color: string = "black";
	private isVeg: boolean = true;
    	
}

class Dog extends Animal{
	
	getColor() : string {
		return this.color;
	}
		
}

var dog : Dog = new Dog();

console.log(dog.name);
console.log(dog.getColor());
console.log(dog.isVeg);
