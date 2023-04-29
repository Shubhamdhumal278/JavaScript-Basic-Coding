
const str = "shubham";
const res = countVowels(str);
console.log(res);

function countVowels(str){
    const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
    let count = 0;

    for(const char of str.toLowerCase()){
        
        if(vowels.includes(char)){
            console.log(char);
            count++;
        }
    }

    return count;

}