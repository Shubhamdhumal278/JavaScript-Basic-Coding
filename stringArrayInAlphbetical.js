
const arr = ["banana" , "apple" , "orange" , "pear"];
const sortarr = sortString(arr);
console.log("original array "+ arr);
console.log("array after sorting : "+ sortarr);

//slice() method is used to create copy of the original array .
// so function doesnot modify original array

function sortString(arr){
    return arr.slice().sort();
}

//second method :  [...arr] used to create copy of array . 
/*
function sortString(arr){
    return [...arr].sort();
}
*/
