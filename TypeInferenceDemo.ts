/*

1. type is set based on operand type.
2. if array is having two types, allow only those types to be inserted. (union types)
3. enums 3 kinds, number enum, string enum, hetrogenius enum.


*/
class TypeInferenceDemo {
	
	a : number;
	b : string;
	c: number[];
	d: boolean;
	
	e = 0;
	//e = "a";

	f = [ 10, 20, null, 40];  
	
	g : any = [ 10, 20, 40];
	
	
	
	
}

enum Direction {
		UP,
		DOWN,
		LEFT,
		RIGHT
	}
	
var typeInferenceDemo = new TypeInferenceDemo();

console.log(typeInferenceDemo.a);
console.log(typeInferenceDemo.b);
console.log(typeInferenceDemo.c);
console.log(typeInferenceDemo.d);
console.log(typeInferenceDemo.e);
console.log(typeInferenceDemo.f[0]);
//typeInferenceDemo.f[0] = "a";

typeInferenceDemo.g[0] = "a";
console.log(typeInferenceDemo.g[0]);

console.log(Direction.DOWN);
