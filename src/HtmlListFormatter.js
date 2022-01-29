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
      else 
        // TODO throw a SyntaxError if unrecognised sentence type
        throw new Error('sentence ends with unrecognised symbol')
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
    this.#htmlStr = `<!DOCTYPE html>
<html>
<head>
<style>
.question {
  font-weight: bold;
}
.exclamation {
  color: red;
}
.regular {
  font-style: italic;
}
</style>
</head>
<body>
<ol type="a">

${this.#getListItemsStr()}
</ol>
</body>
</html>
`
  }
}
