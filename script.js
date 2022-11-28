var arr = [1,2,3,4,5,6]
var odd = function(arr){
    var res = [];
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!=0){
            res.push(arr[i])
        }
        
    }
    return res;
}
console.log("Question-1.a (Anonymous Function)");
console.log(`${odd(arr)} are the odd numbers in the given array`); 

(function odd(arr){
    var res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            res.push(arr[i])
        }
    }
    console.log("Question-1.a (IIFE)")
    console.log(`${res} are the odd numbers in the given array`);
})([7,8,9,10,11,12])

var arr1 =["full stack developer"]
var title_caps = function(arr1){   
    var a = arr1.toString();
    var b = a.toUpperCase();
    return b
}
console.log("Question 1.b (Annonymous Function)")
console.log(`${title_caps(arr1)} is the title case of ${arr1}`)


var arr3 =[1,2,3,4,5];
var add = function(arr3){
    res = 0;
    for(let i=0; i<arr3.length;i++){
        res = res+arr3[i];
    }
    return res;
}
console.log("Question 1.c (Anonymous function)");
console.log(`${add(arr3)} is the addition of the given array`);

(function add(arr3){
    res = 0;
    for(let i=0; i<arr3.length;i++){
        res = res+arr3[i];
    }
    console.log("Question 1.c (IIFE)")
    console.log(`${res} is the addition of the given array`);
})([6,7,8,9,10])

var arr = [2,3,4,5,6] 
var prime = function(arr){
    res = [];
    res_not = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 2 || arr[i] == 3 || arr[i] == 5 || arr[i] == 7){
            res.push(arr[i]);
        }
        else if(arr[i]%2 == 0 || arr[i]%3 == 0 || arr[i]%5 == 0 || arr[i]%7 == 0 ){
            res_not.push(arr[i]);
        }
        else{
            res.push(arr[i]);
        }
    }
    return res
}
console.log("Question 1.d (Anonymous function)");
console.log(`${prime(arr)}  - these are prime numbers of given array` );

(function prime(arr){
    res = [];
    res_not = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 2 || arr[i] == 3 || arr[i] == 5 || arr[i] == 7){
            res.push(arr[i]);
        }
        else if(arr[i]%2 == 0 || arr[i]%3 == 0 || arr[i]%5 == 0 || arr[i]%7 == 0 ){
            res_not.push(arr[i]);
        }
        else{
            res.push(arr[i]);
        }
    }
    console.log("Question 2.d (IIFE)")
    console.log(`${res} - these are prime numbers of given array`)
})([7,8,9,10,11])

var arr = ["madam","dad","apple"]
var isPalindrome = function (s)
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
 
var PalindromicStrings = function (arr)
{
    let ans = [];
    for (let i = 0; i < arr.length; i++) {

        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log("Question 1.e (Anonymous Function)")
console.log(`${PalindromicStrings(arr)} are the given palindromes from the array`);

var a = ["apple","orange","apple","lemon"]
var remove_duplicates = function(a){
    return [...new Set(a)]
}
console.log("Question 1.g (Anonymous)")
console.log(remove_duplicates(a))

var odd = (arr)=>{
    var result =[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               result.push(arr[i]);
            }
        }
        return result;
}
console.log("Question 3.a")
console.log(`${odd([12,13,14,15,17,19,21])} are the odd numbers in the given array`)

var title_caps =(arr) =>{
    var a = arr.toString();
    var b = a.toUpperCase();
    return b;
}
console.log("Question 3.b")
console.log(title_caps(["full stack mern"]))

var sum = (arr) =>{
    res = 0;
    for(let i=0; i<arr.length;i++){
        res = res+arr[i];
    }
    return res;
}
console.log("Question 3.c")
console.log(`${sum([8,9,10,15])} is the sum of given array`);

var prime = (arr) =>{
    res = [];
    res_not = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 2 || arr[i] == 3 || arr[i] == 5 || arr[i] == 7){
            res.push(arr[i]);
        }
        else if(arr[i]%2 == 0 || arr[i]%3 == 0 || arr[i]%5 == 0 || arr[i]%7 == 0 ){
            res_not.push(arr[i]);
        }
        else{
            res.push(arr[i]);
        }
    }
    return res
}
console.log("Question 3.d")
console.log(`${prime([44,47,54,11,5])} are the prime numbers in given array`)

/* Output:
Question-1.a (Anonymous Function)
1,3,5 are the odd numbers in the given array
Question-1.a (IIFE)
7,9,11 are the odd numbers in the given array
Question 1.b (Annonymous Function)
FULL STACK DEVELOPER is the title case of full stack developer
Question 1.c (Anonymous function)
15 is the addition of the given array
Question 1.c (IIFE)
40 is the addition of the given array
Question 1.d (Anonymous function)
2,3,5  - these are prime numbers of given array
Question 2.d (IIFE)
7,11 - these are prime numbers of given array
Question 1.e (Anonymous Function)
madam,dad are the given palindromes from the array
Question 1.g (Anonymous)
['apple', 'orange', 'lemon']
Question 3.a
13,15,17,19,21 are the odd numbers in the given array
Question 3.b
FULL STACK MERN
Question 3.c
42 is the sum of given array
Question 3.d
47,11,5 are the prime numbers in given array

*/

