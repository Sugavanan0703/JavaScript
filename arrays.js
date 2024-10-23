//------------------Arrays in JavaScript-----------------
//ways to create Array in javaScript-------------
//---------1.tredtional way
// var arr=[1,2,3,4,5];
// console.log(arr);
//---------2.using empty square brakets word
// var arr=[]
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=4;
// arr[4]=5;
// console.log(arr);
//---------3.using Arrays Constructor
// var arr=new Array()
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=4;
// arr[4]=5;
// console.log(arr);
//------------Inserting values to the array
//------------1.using push() method
//------------It adds the elements at rare end or tail end-------
// var arr=new Array()
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// console.log(arr)
//------------2.using unshift() method
//-----------It adds the element at the front end--------
// var arr=new Array();
// arr.unshift(1)
// arr.unshift(2)
// arr.unshift(3)
// arr.unshift(4)
// arr.unshift(5)
// console.log(arr)
//--------------3.using index positions
//--------------It adds the elements at the particular index. 
//--------------If any elements present at the index it will override that.
// var arr=new Array()
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=4;
// arr[4]=5;
// console.log(arr)
// arr[0]=5
// console.log(arr)
// ----------------4. using splice() method
//-----------------It adds the elements at the particular index.
//-----------------If any elements already present in the index it will shift it to the s=next index.
// var arr=new Array()
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=4;
// arr[4]=5;
// console.log(arr)
// arr.splice(2,0,22)
// console.log(arr)
//------------Deleting elements in the Arrays 
//-----------1.using pop() method 
//-----------It delets the elements at the rear-end or tail-end.
// var arr=[1,2,3,4,5]
// console.log(arr)
// arr.pop()
// console.log(arr)
//----------2.using shift() method
//----------It delets the elements in the front-end.
// var arr=[1,2,3,4,5]
// console.log(arr)
// arr.shift()
// console.log(arr)
//---------3.using delete() method 
//---------It delete the elements at the particular index.
//---------but it will make it as empty space.
// var arr=[1,2,3,4,5]
// console.log(arr)
// delete arr[0]
// console.log(arr)
//---------4.using splice method()
//---------It delets the elements at the particular index
// var arr=[1,2,3,4,5]
// console.log(arr)
// arr.splice(2,1)
// console.log(arr)
//----------------Arrays concatination-----------
// var arr=[1,2,3,4,5]
// console.log(arr)
// var arr1=[6,7,8,9,10]
// console.log(arr1)
// var arr=arr.concat(arr1)
// console.log(arr)
//-----------------Arrays Sorting-------
// var arr=[10,2,34,21,1]
// console.log(arr)
// arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr)
//-------------Converting arrays to string------
//-------------1.using toSting() method
// var arr=[1,2,3,4,5]
// console.log(arr)
// var str=arr.toString()
// console.log(str)
//-------------2.using join() method-------
// var arr=[1,2,3,4,5]
// console.log(arr)
// var str=arr.join("-")
// console.log(str)
//--------------reverse method()------------
// var arr=[1,2,3,4,5]
// var arr1=arr.reverse()
// console.log(arr1)
//-------------slice() method---------
//-------------It gives sub array of the arrays
// var arr=[1,2,3,4,5,6,7]
// console.log(arr)
// console.log(arr.slice(1,5))
//-------------at() method----------
//-------------gives the value at the given index
// var arr=[1,2,3,4,5,6,7]
// var num=arr.at(5)
// console.log(num)
//---------------Advance methods in arrays in JS-------------------
//---------------1.indexOf(value) method
//---------------It gives the index of firstOccerence of the given value
// var arr=[1,2,3,4,5,6,7]
// console.log(arr.indexOf(5))
//--------------2.indexOf(value, startsFrom)
//--------------It starts from the given index and gives first occurrence of the given value 
// var arr=[1,2,3,4,5,6,7,5]
// console.log(arr.indexOf(5,5))
//--------------3.lastindexOf() method
//--------------It gives the last index of the given elements
// var arr=[1,2,3,4,5,6,7,5]
// console.log(arr.lastIndexOf(5))
//--------------4.includes() method
//--------------It checks if the element present or not
// var arr=[1,2,3,4,5,6,7]
// console.log(arr.includes(2))
//--------------5.find() method 
//-------------It used to check do some operations and then returns only one value
// var arr=[1,2,3,4,5,6,7]
// var num=arr.find(greater)
// console.log(num)
// function greater(value){
//     return value>4
// }
//-------------6.filter() method
//-------------It used to perform some operations and returns all the values passes the operation
// var arr=[1,2,3,4,5,6,7]
// var num=arr.filter(greater)
// console.log(num)
// function greater(value){
//     return value>4
// }
//------------7.map() method
//------------It used to perform some operation and manipulate the data and returns all velues
// var arr=[1,2,3,4,5,6,7]
// var num=arr.map(squar)
// console.log(num)
// function squar(value){
//     return value**2
// }
