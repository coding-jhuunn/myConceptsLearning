for (let i = 0, x=0,y=0; i <=99; i++,x++) {
    if(x<11){
        y+=i;
    }
    if(x>=20){
        x=0;
    }
    console.log(`${i} ${x} ${y}`);
}