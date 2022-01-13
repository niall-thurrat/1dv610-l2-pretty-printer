import fs from 'fs-extra'
import WriteError from './exceptions/WriteError.js'

export default class Printer {
    #path = './IO/output.html'
    #output
    
    constructor (outputStr) {
      this.#output = outputStr
    }
    
    outputToFile() {
      fs.open(this.#path, "w", (err, fd) => {
        if (err)
          throw new WriteError(err.message)
        else {
          fs.write(fd, this.#output, (err, bytes) => {
            if (err)
              throw new WriteError(err.message)
            else
              console.log('Success! ' + bytes + ' bytes written to file')
          })        
        }
      })
    }
  }