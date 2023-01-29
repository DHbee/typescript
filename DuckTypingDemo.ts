class A {
	
	a1:string = "A - a1";
}

class B {
	
	a1 : string= "B - a2";
}

class C {
	
	a1 : string = "C - a3";
	a2 : string = "C - a4";
}

var aObj : A = new A();


var bObj : A = new B(); //should be same variable name + same variable type
console.log(bObj.a1);


//var cObj : C = new B();//target type should not have more properties w.r.t source type

var bOj1: B = new C();
console.log(bOj1.a1);