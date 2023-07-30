var amstrong=document.getElementById("src1")
amstrong.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the number"))
	if(a){
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
		if(check==sum){
			alert(`The given number ${check} is a Amstrong number`)
		}
		else{
			alert(`The given number ${check} is a Amstrong number`)
		}
	}
	else{
		alert("invalid input")
	}
})

var average=document.getElementById("src2")
average.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the number"))
	if(a){
		var b=a
		var count=0
		var sum=0
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10
			sum+=rem
			count++
		}
		alert(`Average of the given number ${b} is = ${sum/count}`)
	}
	else{
		alert("invalid input")
	}
})

var factorial=document.getElementById("scr3")
factorial.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the number"))
	if(a){
		let b=a
		var sum=1
		for(a;a>0;a--){
			sum*=a
		}
		alert(`Factorial of the given number ${b} is = ${sum}`)
	}
	else{
		alert("invalid input")
	}

})

var tables=document.getElementById("scr4")
tables.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the number"))
	if(a){
		for(i=1;i<=20;i++){
			console.log(`${i}*${a} =${i*a}`)
		}
		alert(`${i}*${a} =${i*a}`)
	}
})

var palindrome_num=document.getElementById("scr5")
palindrome_num.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the number"))
	if(a){
		let b=a
		var sum=0
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10

			sum=(sum*10)+rem
		}
		if(b==sum){
			alert(`The given number ${b} is a palindrome`)
		}
		else{
			alert(`The given number ${b} is not a palindrome`)
		}
	}
	else{
		alert("invalid input")
	}

})

var palindrome_str=document.getElementById("scr6")
palindrome_str.addEventListener("click",function(){
	var s=prompt("Enter the input")
	if(s){
		var check=s
		var str=""
		var strLen=s.length-1
		for(strLen;strLen>=0;strLen--){
			str+=s[strLen]
		}
		if(check==str){
			alert(`The given input ${s} is a palindrome`)
		}
		else{
			alert(`The given input ${s} is not a palindrome`)
		}
	}
	else{
		alert("Invalid input")
	}
})

var sumOfNumbers=document.getElementById("scr7")
sumOfNumbers.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the numbers"))
	if(a){
		var b=a
		var sum=0
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10

			sum+=rem
		}
		alert(`The sum of numbers ${b} is = ${sum}`)
	}
})

var oddNumbersAddition=document.getElementById("scr8")
oddNumbersAddition.addEventListener("click",function(){

	var a=parseInt(prompt("Enter the number"))
	let b=a
	if(a){
		var sum=0
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10

			if(rem%2 != 0){
				sum+=rem
			}
		}
		alert(`The Addition of odd numbers ${b} is = ${sum}`)
	}
	else{
		alert("invalid input")
	}
})


var oddNumbercount=document.getElementById("scr9")
oddNumbercount.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the numbers"))
	let b=a
	var count=0
	if(a){
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10

			if(rem%2 != 0){
				count++
			}
		}
		alert(`The odd numbers count ${b} is = ${count}`)
	}
	else{
		alert("invalid input")
	}
})


var oddNumbercount=document.getElementById("scr10")
oddNumbercount.addEventListener("click",function(){
	var a=parseInt(prompt("Enter the numbers"))
	let b=a
	var sum=0
	if(a){
		while(a!=0){
			var rem=a%10
			a=(a-rem)/10

			sum+=(rem*rem)
		}
		alert(`multiplication of individual numbers ${b} is = ${sum}`)
	}
	else{
		alert("invalid input")
	}
})