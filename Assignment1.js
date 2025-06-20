// // Assignment No 1
const prompt = require('prompt-sync')(); 
 num1=Number(prompt("Enter a first number"));
 num2 = Number(prompt("enter a second number"));
console.log("Addition is",(num1+num2))
console.log("Substraction is",(num1-num2))
console.log("Multiplication is",(num1*num2))
console.log("Division is",(num1/num2))
console.log("Modulus is",(num1%num2))

// // Assignment No 2
// // first number is greater than second
console.log("Is the first number is greater than second",(num1>num2));
// // first number is less than second
console.log("Is the first number is less than second",(num1<num2));

// // two numbers equal
console.log("Are both the numbers equal",(num1==num2));

//Assignment no 3
// write a program to c
Math=Number(prompt("Enter Math Score:"))
Science=Number(prompt("Enter Science Score:"))
if(Math>=90 && Science>=85){
    console.log("Scholarship Eligibility:True")
}
else{
    console.log("Scholarship Eligibility:False")
}
// Assignment no 4
var x= 10;
console.log("Initial value of x: " +x)
x+=5
console.log("After adding 5: " +x)
x*=3
console.log("After multiplying by 3: " +x)
x-=10
console.log("After Substracting 10: " +x)
x/=2
console.log("After dividing by 2: " +x)
x%=3
console.log("Modulus with 3: " +x)

// Assignment No 5
//  1. 10+3*5
console.log("The result of the expression is",+(10+3*5))
console.log(`In the 1st expression first priority given to the multplication so firstly it calculates(3*5)   and then second priority given to the addition i.e (10+15). So the final answer is 25`)

// //(10+3)*5
console.log("The result of the expression is",+((10+3)*5))
console.log(`In the 2nd expression first priority given to the round braces, so firstly it calculates(10+3)   and then second priority given to the multiplication i.e 13*5. So the final answer is 65`)

// //20/2+3
console.log("The result of the expression is",+(20/2+3))
console.log(`In the 3rd expression first priority given to the division operator, so firstly it calculates 20/2   and then second priority given to the addition i.e 10+3. So the final answer is 13`)

// //20/(2+3)
console.log("The result of the expression is",+(20/(2+3)))
console.log(`In the 4th expression first priority given to the round braces, so firstly it calculates(2+3)   and then second priority given to the multiplication i.e 20/5. So the final answer is 4`)


// Assignment No 6
len=Number(prompt("Enter Length:"))
wid=Number(prompt("Enter Width:"))
perimeter=2*(len+wid)
console.log("Perimeter is:", perimeter)
Area=len*wid 
console.log("Area is:", Area )
console.log("Is perimeter greater than area ?: ", (perimeter>Area) )

// Assignment No 7
var Age=Number(prompt("Enter Age: "))
var Citizen=String(prompt("Are you a citizen(true/false)?"))
var Eligible=(Age>=18 && Citizen=="true")
console.log("Eligible to vote:", Eligible)


// Assignment No 8
var W = Number(prompt("Enter weight(kg):"))
var h = Number(prompt("Enter height(m):"))
const BMI = W/ (h*h)
console.log("BMI:", BMI)
if(BMI>=30){
    console.log("Category: Obesity")

}
else if(25<=BMI<29.9){
    console.log("Category: Overweight")

}
else if(18.5<=BMI<24.9){
    console.log("Category: Normal Weight")
}
else{
    console.log("Category: Underweight")

}

//Assignment No 9
var num5= Number(prompt("Enter a number:"))
if(num5%2==0){
    console.log("The number is even")
    
}
else{
    console.log("The number is odd")
}

//Assignment No 10
var amount=Number(prompt("Enter total Amount:"))
if(amount>100){
    const FinalAmount= amount-(amount*(10/100))
    console.log("Discounted Total is:", FinalAmount)
}
else{
    console.log("sorry! you does not get any discount")
}







