export default class HtmlListFormatter {
  #listItems = [] // TODO make this a collection class of ListItem objects with a toString() function
  #htmlStr = ''
  
  constructor(parsedDoc) {
    this.#setListItems(parsedDoc)
    this.#setHtmlStr()
  }
  
  getHtmlString() {
    return this.#htmlStr
  }

  #setListItems(parsedDoc) {
    const sentences = parsedDoc.getSentences()

    sentences.forEach(s => {
      const endType = s.getEndPunctuation()

      if (endType === '.')
        this.#listItems.push(`<li class="regular">${s.toString()}</li>`)
      else if (endType === '?')
        this.#listItems.push(`<li class="question">${s.toString()}</li>`)
      else if (endType === '!')
        this.#listItems.push(`<li class="exclamation">${s.toString()}</li>`)
      // else 
        // TODO throw exception if unrecognised sentence type
    })
  }

  #getListItemsStr() {
    let listStr = ''
    
    this.#listItems.forEach(li => {
      listStr += li + '\n'
    })

    return listStr
  }

  #setHtmlStr() {
    this.#htmlStr = `<!DOCTYPE html>\n
      <html>\n
      <head>\n
      <style>\n
      .question {\n
        font-weight: bold;\n
      }\n
      .exclamation {\n
        color: red;\n
      }\n
      .regular {\n
        font-style: italic;\n
      }\n
      </style>\n
      </head>\n
      <body>\n
      \n
      <ol type="a">\n
      ${this.#getListItemsStr()}
      </ol>\n
      \n
      </body>\n
      </html>\n
      `
  }
}
