

const arr = ["shubh" , "ajay" , "sachin" , "pratike"];
const res = largestString(arr);
console.log(res);

function largestString(arr){
    let largest = '';

    for(const str of arr){
        if(str.length > largest.length){
            largest = str;
        }
    }
    return largest;
}