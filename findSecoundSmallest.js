const arr = [10 , 14 , 21 , 32 , 52 ];
const res = findSecoundLargestNo(arr);
console.log(res);

function findSecoundLargestNo(arr){
    if(arr.length < 2){
        return null ;
    }

    let smallest = Infinity ;
    let secoundSmallest = Infinity ;

    for(const num of arr){
        if(num < smallest){
            secoundSmallest = smallest ;
            smallest = num ;
        } else if( num < secoundSmallest && num !== smallest ){
            secoundSmallest = num ;
        }
    }

    if(secoundSmallest == Infinity){
        return null;
    }

    return secoundSmallest ;
}