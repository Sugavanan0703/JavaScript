// Functions in javaScript
//---------inbuilt function-------------
//1.alert()
//2.confirm()
//3.promt()
//4.parseInt();
//5.parseFloat();
//6.sqrt();
//------------alert()-------------
// var a=10
// if(a>10){
//     alert("Condition is true")
// }
// else{
//     alert("Condition is false")
// }
//--------------confirm()-------------
// var a=10
// if(a>10){
//     confirm("Condition is true")
// }
// else{
//     confirm("Condition is false")
// }
// ---------------prompt()-----------
// var str1=prompt("Enter the first String")
// var str2=prompt("Enter the second String")
// if(str1==str2){
//     alert("Condition is true: "+str1)
// }
// else{
//     alert(str1+str2)
// }
//--------------parseInt()-------------
// var num1=parseInt(prompt("Enter the first number"))
// var num2=parseInt(prompt("Enter the second number"))
// if (num1==num2) {
//     alert("both numbers are equal: "+num1)
// }
// else{
//     alert(num1+num2)
// }
// -------------parseFloat()-------------
// var num1=parseFloat(prompt("Enter the first number"))
// var num2=parseFloat(prompt("Enter the second number"))
// confirm(num1+num2)
//###############################################################################
// User Defined Function
//1.Function Declaration
//2.Function Expression
//3.Arrow Functions
//4.Anonymous Functions
//------------Function Decleration-------------------
// function display(a,b){
//     console.log(a+b);
// }
// var a=parseInt(prompt("Enter the first number"))
// var b=parseInt(prompt("Enter the second number"))
// display(a,b)
//-------------Function Expression----------------
// var display=function(a,b){
//     console.log(a+b)
// }
// var a=parseInt(prompt("Enter the number"))
// var b=parseInt(prompt("Enter the number"))
// display(a,b)
//---------------Arrow Function--------------
var display=(a,b)=>{
    return a+b
}
var a=parseInt(prompt("Enter the number"))
var b=parseInt(prompt("Enter the number"))
var res=display(a,b)
console.log(res)
