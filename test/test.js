import { expect } from 'chai'
import Parser from 'doc-pars3r'
import HtmlListFormatter from '../src/HtmlListFormatter.js'
// import WriteError from '../src/exceptions/WriteError.js'

const buildFormatter = (inputStr) => {
  const parser = new Parser()
  const doc = parser.parseDocument(inputStr)

  return new HtmlListFormatter(doc)
}

describe('HtmlListFormatter', () => {
  describe('TC1_Find_a_HTML_document_formatted_as_a_string', () => {
    it('should be a string with the HTML doctype declaration \'<!DOCTYPE html>\'', () => {
      const formatter = buildFormatter('a.')

      const htmlStr = formatter.getHtmlString()

      expect(htmlStr).to.be.a('string').to.contain('<!DOCTYPE html>')
    })
  })

  describe('TC2_Find_1_<li>_tag', () => {
    it('should be a string containing \'<li\' once', () => {
      const formatter = buildFormatter('a.')

      const htmlStr = formatter.getHtmlString()
      const count = (htmlStr.match(/<li/g) || []).length

      expect(htmlStr).to.be.a('string')
      expect(count).to.equal(1)
    })
  })

  describe('TC3_Find_2_<li>_tags', () => {
    it('should be a string containing \'<li\' twice', () => {
      const formatter = buildFormatter('a. b.')

      const htmlStr = formatter.getHtmlString()
      const count = (htmlStr.match(/<li/g) || []).length

      expect(htmlStr).to.be.a('string')
      expect(count).to.equal(2)
    })
  })

  describe('TC4_Find_0_<li>_tags', () => {
    it('should be a string not containing \'<li\'', () => {
      const formatter = buildFormatter('')

      const htmlStr = formatter.getHtmlString()
      const count = (htmlStr.match(/<li/g) || []).length

      expect(htmlStr).to.be.a('string')
      expect(count).to.equal(0)
    })
  })

  describe('TC5_Find_<li>_tags_for_different_sentence_types', () => {
    it('should be a string with <li> tags containing classes \'regular\', \'question\' and \'exclamation\'', () => {
      const formatter = buildFormatter('a. b? c!')

      const htmlStr = formatter.getHtmlString()

      expect(htmlStr).to.contain('class="regular"').and.to.contain('class="question"').and.to.contain('class="exclamation"')
    })
  })

  describe('TC6_Find_<li>_tag_with_correct_content', () => {
    it('should be an <li> tag with content \'a.\'', () => {
      const formatter = buildFormatter('a.')

      const htmlStr = formatter.getHtmlString()

      expect(htmlStr).to.contain('>a.</li>')
    })
  })
})
