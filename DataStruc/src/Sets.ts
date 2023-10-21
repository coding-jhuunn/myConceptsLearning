class Sets {
    collection = [1,2,3,4,5,6];

    getCheck(value:any):boolean {
        for (let i = 0; i < this.collection.length; i++){
            if(this.collection[i]=== value){
                return true;
            }
            
        }
        return false;
    }
    getReturn(){
        return this.collection;
    }
    getAdd(value:any):string {
        if(!this.getCheck(value)){
            this.collection.push(value);
            return "Added"
        }
        return "Already Exists";
    }
    getRemove(value:any) {
        if(this.getCheck(value)){
            this.collection.splice(this.collection.indexOf(value),1);
            return "Removed"
        }
        return "Not Exists";
        
    }
    getLength(){
        return this.collection.length;
    }
    getCombine(value:any[]){
        let thisSets = this.collection;
        let otherSets = new Sets;
        otherSets.collection = value;

        for(let i = 0; i < otherSets.collection.length; i++){
            thisSets.push(otherSets.collection[i]);
        }

        return this.collection;
    }
    getSame(value:any[]){
        let otherSets = new Sets;
        otherSets.collection = value;
       const newCollection = this.collection.filter(index =>
        otherSets.collection.includes(index));
        return newCollection;

    }
    getDifference (value:any[]){
        let otherSets = new Sets;
        otherSets.collection = value;
       const newCollection = this.collection.filter(index =>
            !otherSets.collection.includes(index))
        .concat(otherSets.collection.filter(index=> 
            !this.collection.includes(index)));
        return newCollection;
    }

}


const newSets = new Sets;
console.log(newSets.getReturn())
console.log(newSets.getSame([1,4,6,3]));
console.log(newSets.getReturn())
console.log(newSets.getDifference([2,555,4,6,77]));
console.log(newSets.getReturn())

