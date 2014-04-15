var name = "parent";

//共有属性和共有方法的声明需要在前面加上 this 关键字
this.value = "public value";
this.test = function(){
	console.log("public function");
}