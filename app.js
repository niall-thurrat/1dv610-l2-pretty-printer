import Parser from 'doc-pars3r'
import HtmlListFormatter from './src/HtmlListFormatter.js'
import Printer from './src/Printer.js'

const parser = new Parser()
const inputStr = process.argv[2]
const doc = parser.parseDocument(inputStr)

const formatter = new HtmlListFormatter(doc)
const htmlStr = formatter.getHtmlString()

const printer = new Printer(htmlStr)
printer.outputToFile()
