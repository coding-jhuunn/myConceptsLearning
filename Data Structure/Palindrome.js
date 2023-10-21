function PalindromeChecker (item){
    let box = []
    for(let i = 0; i<item.length; i++){

        box.push(item[i]);
    }
    box.reverse();
    let rWord = box.join('');

    if(rWord==item){
       return true
    }
    else{
        return false
    }
}


console.log(PalindromeChecker("ANNA"))