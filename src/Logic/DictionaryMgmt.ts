import { makeObservable, observable, action, computed } from "mobx";
import { arrayOfWords } from "./ArrayOfWords";
import debounce from "lodash.debounce"


export default class DictionaryMgmt {
  words: Array<string> = arrayOfWords;
  selectedLetter: string = "";

  constructor() {
    makeObservable(this, {
      selectedLetter: observable,
      setSelectedLetter: action,
      getCounters: computed,
    })
  }

  setSelectedLetter(letter: string | undefined) {
    this.selectedLetter = letter ? letter : "";
  }
  updateLetter = debounce((letter: string | undefined) => {
    this.setSelectedLetter(letter)
  }, 300);

  computeCounters() {
    let letterInDictionaryCounter = 0;
    let containCounter = 0;
    let startWithCounter = 0;
    let endWithCounter = 0;
    let doubleCounter = 0;
    this.words.forEach((word) => {
      letterInDictionaryCounter += (word.match(new RegExp(this.selectedLetter, "g")) || []).length;
      containCounter = word.indexOf(this.selectedLetter) !== -1 ? containCounter + 1 : containCounter;
      startWithCounter = word.indexOf(this.selectedLetter) === 0 ? startWithCounter + 1 : startWithCounter;
      endWithCounter = word.endsWith(this.selectedLetter) ? endWithCounter + 1 : endWithCounter;
      doubleCounter = word.indexOf(this.selectedLetter + this.selectedLetter) !== -1 ? doubleCounter + 1 : doubleCounter;
    });
    return {
      letterInDictionaryCounter, containCounter,
      startWithCounter, endWithCounter, doubleCounter
    };
  }

  get getCounters() {
    return this.computeCounters();
  }
}



