import newMessager from './singletonPatternModule.js';




export default function secondLogger(){
    newMessager. printLogCount();
    newMessager.log('Second');
    newMessager. printLogCount();
}