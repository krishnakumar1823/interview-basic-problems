var a=parseInt(prompt("Enter the number"))
var b=a
var check=a
var count=0

//count
while(a!=0){
    var rem=a%10
    a=(a-rem)/10

    count++
}
var sum=0
while(b!=0){
    var rem=b%10
    b=(b-rem)/10

    sum+=(rem**count)
}
var result=document.getElementById("result")
if(check==sum){
    result.innerHTML=`The given number ${check} is a Amstrong number`
}
else{
    result.innerHTML=`The given number ${check} is not a Amstrong number`
}