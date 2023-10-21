
const PalindromeChecker = (item:string):boolean=>{
    let box= []
    for(let i = 0; i<item.length; i++){

        box.push(item[i]);
    }
    box.reverse();
    let rWord:string= box.join('');

    if(rWord===item){
       return true
    }
    else{
        return false
    }
}


console.log(PalindromeChecker("pasdascxzczas"))