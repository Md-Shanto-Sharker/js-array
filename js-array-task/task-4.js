
// 4. Checking if it's an Array
// Instructions:

//             1.Create different variables, each containing either an array or a non-array value.
//             2.Now use isArray to check if each variable is an array.
//             3.Print a message to the console indicating whether each variable is an array or no


const numbers =[12,45,6,98];
const friends=[];
const array ='[]';

if(Array.isArray(numbers)){
    console.log('This is an array');
}else{
    console.log('This is not an array');
}


if(Array.isArray(friends)){
    console.log("This is an array");
}else{
    console.log("This is not an array");
}

if(Array.isArray(array)){
    console.log("This is an array");
}else{
    console.log("This is not an array");
}