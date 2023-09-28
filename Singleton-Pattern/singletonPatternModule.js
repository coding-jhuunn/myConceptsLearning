 class  Messager{
    constructor()
    {
        if(Messager.instance == null) {
            this.logs = []; 
            Messager.instance = this;
        }
        return Messager.instance;
    }

    log(string){
        this.logs.push(string);
        console.log('Message: ' + string);
    }
    printLogCount(){
        console.log(`${this.logs.length} Logs`)
    }
}

const newMessager = new Messager();
Object.freeze(newMessager);
export default newMessager;

