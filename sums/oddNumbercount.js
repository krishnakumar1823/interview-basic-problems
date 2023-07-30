var a=123
var count=0
while(a!=0){
    var rem=a%10
    a=(a-rem)/10

    if(rem%2 != 0){
        count++
    }
}
console.log(count)