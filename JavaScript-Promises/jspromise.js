
const userLeft = false;
const userWatchingCatMeme = true;



let p = new Promise((resolve, reject) =>{
    if(userWatchingCatMeme){
        reject({
            name:'User watching Cat Meme',
            message:'Tutorial>Cat'
        })
    }else if(userLeft){
        reject({
            name:'User left',
            message:'KEKBYE'
        })
    }
    else{
        resolve('Thank you for watching!')
    }
});


p.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.name + ': ' + err.message);
});


////call all promise methods


const raceOne = new Promise((resolve, reject) =>{
    resolve('Race one');
})
const raceTwo = new Promise((resolve, reject) =>{
    resolve('Race two');
})
const raceThree = new Promise((resolve, reject) =>{
    resolve('Race three');
})

Promise.all(
    [raceOne, raceTwo, raceThree]
).then((result) =>{
    console.log(result)
});