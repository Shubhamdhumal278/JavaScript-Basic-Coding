
const str = "aabbcdd";
const res = firstNonRepeatedChar(str);
console.log(res);

function firstNonRepeatedChar(str){
    const countOfChar = {};

    for(const char of str){
        countOfChar[char] = countOfChar[char] + 1 || 1;
    }

    for(const char of str){
        if(countOfChar[char] === 1){
            return char;
        }
    }
    return null ;
}