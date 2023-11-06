

let result =0;

for(let i = 0,a=0,b=0; i <=100; i++,a++,b++) {

    if(a<=10){
        result+=b;
    }
    if(a>=20){
         a =0;
    }

    console.log(`count: ${i} a: ${a} b: ${b}  result:${result}`);


}