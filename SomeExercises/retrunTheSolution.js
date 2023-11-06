
function returnSolution(n){
    let temp ='';
    let finalString = ''
    let count = 0;

        for(let i=0;i<=n;i++){
            count += i;
            if(i<=n){
                if(i==0){
                    temp = "0 = 0";
                    finalString+=`${i}`;
                    console.log(temp);
                }
                else{
                    finalString+= ` + ${i} `;
                    temp = finalString + `= ${count}`;
                    console.log(temp);
                }
            }
    }
}


returnSolution(0);