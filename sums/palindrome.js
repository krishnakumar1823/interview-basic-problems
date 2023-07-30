//palindrome using numbers
var a=121
let b=a
var sum=0
while(a!=0){
    var rem=a%10
    a=(a-rem)/10

    sum=(sum*10)+rem
}
if(b==sum){
    console.log("the given number is palindrome")
}
else{
    console.log("the given number is not a palindrome")
}


//palindrome using string
var s="amma"
var check=s
var str=""
var strLen=s.length-1
for(strLen;strLen>=0;strLen--){
    str+=s[strLen]
}
if(check==str){
    console.log("the given input is palindrome")
}
else{
    console.log("the given input is not a palindrome")
}