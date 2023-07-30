//factorial of a number
var a=parseInt(prompt("Enter the number"))
let b=a
var sum=1
for(a;a>0;a--){
	sum*=a
}
console.log(sum)
var result=document.getElementById("result")
result.innerHTML=`Factorial of the given number ${b} is = ${sum}`