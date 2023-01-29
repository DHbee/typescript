var a : any = "50";
var b =<number>a;
console.log(a);


var c : any = 20;
var d =<number> c;
console.log(d);


interface Student  {
	name: string;
	id : number;	
}

let stu = <Student>{};
stu.name = "deepika";
