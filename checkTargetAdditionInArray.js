

const arr = [1 , 2 , 3 , 4 , 5 ];
const target = 7 ;
const result = hasPairWithSum(arr , target);
console.log(result);

function hasPairWithSum(arr , target){
    const complements = new Set();

    for(const num of arr){
        if(complements.has(num)){
            return true ;
        }

        complements.add(target - num);
    }

    return false
}

