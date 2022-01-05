import Parser from 'doc-pars3r'

const parser = new Parser()
const doc = parser.parseDocument('one sentence. two sentences? three sentences!') // TODO get input from start script
const sentences = doc.getSentences()

sentences.forEach(s =>
  console.log(s.toString())
)
