
const num = 5 ;
const res = factorial(num);
console.log(res);

function factorial(num){
    
    let ans = 1 ;

    for(let i = 1 ; i <= num ;i++){
        ans =  ans * i ;
    }

    return ans ;
}