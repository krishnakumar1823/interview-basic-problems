var a=parseInt(prompt("Enter the number"))
var result=document.getElementById("result")
for(i=1;i<=20;i++){
    result.innerHTML+=`${i}*${a} =${i*a}`+"<br>"
}