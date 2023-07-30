var a=123
var sum=0
while(a!=0){
    var rem=a%10
    a=(a-rem)/10

    sum+=rem
}
console.log(sum)