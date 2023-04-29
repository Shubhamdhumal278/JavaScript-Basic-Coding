
const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
const res = findOdd(arr);
console.log("oddno : " + res);
const evenNo = findEven(arr);
console.log("even no : " + evenNo)



function findOdd(arr){
    const temp = [];

    for(const num of arr){
        if(num % 2 !== 0 ){
            temp.push(num);
        } 
    }

    return temp ;
}

function findEven(arr){
    const temp = [];

    for(const num of arr){
        if(num % 2 === 0 ){
            temp.push(num);
        }
    }

    return temp ;
}