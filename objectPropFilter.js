
const arr = [
    { name : "shubham" , age: 25 , gender : "male" } ,
    {name : "ajay" , age : 26 } ,
    {name : "sachin" , age : 27 , gender : "male"} ,
    {name : "pratik" , age : 25 } 
]

const prop = "gender";
const res = propFilter(arr , prop);
console.log(res);

function propFilter(arr , prop){
    let temp = [];

    for(const obj of arr){
        if(obj.hasOwnProperty(prop)){
            temp.push(obj);
        }
    }

    return temp ;
}