import newMessager from './singletonPatternModule.js';




export default function firstLogger(){
    newMessager. printLogCount();
    newMessager.log('First');
    newMessager. printLogCount();

}