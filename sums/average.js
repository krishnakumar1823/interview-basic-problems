var a=parseInt(prompt("Enter the number"))
var b=a
var count=0
var sum=0
while(a!=0){
    var rem=a%10
    a=(a-rem)/10
    sum+=rem
    count++
}
var result=document.getElementById("result")
result.innerHTML=`Average of the given number ${b} is = ${sum/count}`