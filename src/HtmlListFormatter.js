export default class HtmlListFormatter {
  #htmlListItems = [] // TODO make this a collection class of HtmlListItem objects that have a toString() function
  #htmlStr = ''
  
  constructor(parsedDoc) {
    this.#setHtmlListItems(parsedDoc)
    this.#setHtmlStr()
  }
  
  getHtmlString() {
    return this.#htmlStr
  }

  #setHtmlListItems(parsedDoc) {
    const sentences = parsedDoc.getSentences()

    sentences.forEach(s => {
      const endType = s.getEndPunctuation()

      if (endType === '.')
        this.#htmlListItems.push(`<li class="regular">${s.toString()}</li>`)
      else if (endType === '?')
        this.#htmlListItems.push(`<li class="question">${s.toString()}</li>`)
      else if (endType === '!')
        this.#htmlListItems.push(`<li class="exclamation">${s.toString()}</li>`)
      // else 
        // TODO throw exception if unrecognised sentence type
    })
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
      ${this.#htmlListItems[0]}\n
      </ol>\n
      \n
      </body>\n
      </html>\n
      `
  }
}
