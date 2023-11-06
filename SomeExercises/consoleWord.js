
const mainWord = 'hello world';
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']
let result = []
let temp =[];
for(let i = 0; i <mainWord.length; i++) {
    for(let j = 0; j <alpha.length; j++) {
        temp.push(alpha[j]);
        console.log(temp.join(''));
        if(alpha[j] === mainWord[i]) {
            result.push(alpha[j]);
            break;
        }
        temp.pop();
    }
}
console.log(result);