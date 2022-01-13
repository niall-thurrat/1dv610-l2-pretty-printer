import Parser from 'doc-pars3r'
import HtmlListFormatter from './HtmlListFormatter.js'

const parser = new Parser()
const inputStr = 'one sentence. two? three!'
const doc = parser.parseDocument(inputStr)

const formatter = new HtmlListFormatter(doc)

console.log(`formatter.getHtmlString(): ${formatter.getHtmlString()}`)
