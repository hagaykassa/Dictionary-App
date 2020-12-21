import { makeObservable, observable, action } from "mobx";

  export default class DictionaryMgmt {
    words:Array<string>;
    startWithCounter:number;
    endWithCounter:number;
    containCounter:number;
    doubleCounter:number;
    letterInDictionaryCounter:number;

    constructor() {
        makeObservable(this, {
            startWithCounter: observable,
            endWithCounter: observable,
            containCounter: observable,
            doubleCounter: observable,
            letterInDictionaryCounter:observable,
            updateWords: action
        })
        this.words = ["apple", "juice","window","desk","watch","book","door","house"];
        this.startWithCounter = 0;
        this.endWithCounter = 0;
        this.containCounter = 0;
        this.doubleCounter = 0;
        this.letterInDictionaryCounter=0;
    }
        updateWords(filterLetter:string|undefined) {
            if(filterLetter){
            this.containCounter =this.words.filter((word)=> { return word.indexOf(filterLetter) !== -1; }).length;
            this.startWithCounter =this.words.filter((word)=> { return word.indexOf(filterLetter) === 0; }).length;
            this.endWithCounter =this.words.filter((word)=> { return word.endsWith(filterLetter)}).length;
            this.doubleCounter =this.words.filter((word)=> { return word.indexOf(filterLetter + filterLetter) !== -1; }).length; 
            this.letterInDictionaryCounter=0;
            this.words.forEach((word)=>{
            this.letterInDictionaryCounter+=(word.match(new RegExp(filterLetter, "g")) || []).length;});
            return true;
          }
          else return false;
    }
  }

 
  
