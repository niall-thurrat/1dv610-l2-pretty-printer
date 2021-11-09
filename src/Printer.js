export default class Printer {
    #testPropety
    
    constructor (tp) {
      this.#testPropety = tp
    }
    
    printTest() {
      console.log(`Here is my test string: ${this.#testPropety}`)
    }
  }