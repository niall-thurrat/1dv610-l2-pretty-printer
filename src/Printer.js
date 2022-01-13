export default class Printer {
    #output
    
    constructor (outputStr) {
      this.#output = outputStr
    }
    
    outputToConsole() {
      console.log(`Here is my test output: ${this.#output}`)
    }
  }