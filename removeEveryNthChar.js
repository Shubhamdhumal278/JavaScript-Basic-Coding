
const str = "hello world";
const num = 2 ;
const res = removeEveryNth(str , num);
console.log(res);

function removeEveryNth(str , num){
    let temp = '';

    for(let i = 0 ; i < str.length ; i += num){
        temp = temp + str.charAt(i);
    }

    return temp ;

}