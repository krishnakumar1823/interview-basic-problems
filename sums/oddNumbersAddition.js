var a=3584
var sum=0
while(a!=0){
    var rem=a%10
    a=(a-rem)/10

    if(rem%2 != 0){
        sum+=rem
    }
}
console.log(sum)