/*

1. named function
2. anonymous function
3. optional paramters
4. default paramters
5. rest paramters

*/
class FunctionDemo{
	
	test(val: number) : number{		
		return val;
	};
	
	b = function(val: number) : number{		
		return val;
	};
	
	c = function(v1: number, v2 ?: number){	
		return v1;
	};
	
	d = function(v1: number = 80){	
		return v1;
	};
	
	e = function(v1: number, ...v2: number[]){		
          v2.forEach(item => {
			  console.log(item)
		  } );	
		return v1;
	};
	
}

var obj: FunctionDemo = new FunctionDemo();

console.log(obj.test(10));

console.log(obj.b(20));

console.log(obj.c(40));

console.log(obj.d());

console.log(obj.e(160 , 1, 2));