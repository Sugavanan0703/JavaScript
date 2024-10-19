// console.log("Hello World!")
// console.log(3+2)
//----------------------------------- conditional Statements-------------------
// var a=10
// var b=20
// if(a>b){
//     console.log("A is greater than B")
// }
// else if(a==b){
//     console.log("A is equals to B")
// }
// else{
//     console.log("A is lesser than B")
// }
// ----------------------------------Switch Statements ------------------------
// var color="Black"
// switch(color){
//     case "Pink":
//         console.log("Color is Pink")
//         break
//     case "Red":
//         console.log("Color is Red")
//         break
//     case "Black":
//         console.log("Color is Black")
//         break
//     default:
//         console.log("Color not matching")
// }
// ------------------------Loops---------------------
// -----------While Loop-------------------
    // var a=1
    // while(a<=10){
    //     console.log(a)
    //     a++
    // }
// ---------do While loop--------------
    // var a=1
    // do{
    //     console.log(a)
    //     a++
    // }
    // while(a>10)
//---------for loop-------------
    // for(let i=1;i<=10;i++){
    //     console.log(i)
    // }
//--------for of loop---------
    // var arr=[1,2,3,4,5]
    // for(var a of arr){
    //     console.log(a)
    // }
    //whith condition
    // var arr=[1,2,3,4,5]
    // for(var a of arr){
    //     if(a%2==0){
    //         console.log(a)
    //     }
    // }
//---------for in loop---------
    var obj={
        name:"Sugavanan",
        age:23,
        gender:"Male"
    }
    for(var a in obj){
        console.log(a+":"+obj[a])
    }