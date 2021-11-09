import Document from 'doc-pars3r'

const doc = new Document()
doc.parse('Hello world.')
const sentences = doc.getAllSentences()

console.log(`Test sentecnces: ${sentences}`)
