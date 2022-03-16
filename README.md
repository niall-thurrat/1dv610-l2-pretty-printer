# Pretty-print3r

This module prettifies parsed text documents!!!

## a university project

Assignment: [L2](https://github.com/niall-thurrat/doc-pars3r/blob/master/docs/L2-1DV610.pdf)  
Course: 1DV610 Software Quality, [Linnaeus University](https://lnu.se/en/)

Doc-pars3r is one of a series of three modules created for the completion a software quality course. The three modules are:  

- [Tokeniz3r](https://github.com/niall-thurrat/tokeniz3r) (fulfils assignment [L1](https://github.com/niall-thurrat/tokeniz3r/blob/master/docs/L1-1DV610.pdf)): This module creates a set of tokens based on two parameters: an input string and a set of grammar rules.  The module is a published npm package.
- [Doc-pars3r](https://github.com/niall-thurrat/pretty-printdoc-pars3r) (part of assignment [L2](https://github.com/niall-thurrat/doc-pars3r/blob/master/docs/L2-1DV610.pdf)): This module creates a parsed document based on one parameter: an input string. It has a set of internal hard coded grammar rules and uses this with the input string to get tokens from the tokeniz3r module (it's only dependency). Doc-pars3r fulfils a basic function of parsing three sentence types: regular sentences, questions and exclamations. It is therefore only for use in a local dev environment.
- Pretty-print3r (part of assignment [L2](https://github.com/niall-thurrat/doc-pars3r/blob/master/docs/L2-1DV610.pdf)): This is a very basic module set up as a method to demo and test Doc-pars3r. It takes a string argument in the start script and updates an output.html file with a list of parsed sentences, formatted according to sentence type. The module is only for use in a local dev environment.

## How does Pretty-print3r work?

Pretty-print3r is a simple nodejs module that takes a string argument as part of its start script and prints a .html document. The argument can be one or many sentences and must consist of either regular sentences, questions or exclamations.

The module prints to its internal output.html file in the IO directory. The format is a html document that identifies the three various sentence types and highlights them accordingly: regular sentences are italic, questions are bold and exclamations are red text.

Pretty printer depends on doc-pars3r to get a parsed document that can be broken down into its various parts and sub-parts, i.e. sentences, words and closing punctuation.

## Prerequisites

- Node.js [installed](https://nodejs.org/en/download/)
- NPM installed (this comes with node.js)

## Using Pretty-print3r

1. Clone the Pretty-print3r repository to your local machine.

NOTE: pretty-print3r is under development and is not published to npm. THEREFORE, PRETTY-PRINT3R SHOULD NOT AT PRESENT BE USED IN A PRODUCTION ENVIRONMENT.

```
git clone https://github.com/niall-thurrat/1dv610-l2-pretty-printer.git
```

2. Install npm dependencies from the root directory

```
npm install
```

3. Link the doc-pars3r npm package locally. This is one of Pretty-print3r's dependencies that is a non-published npm package. See the *Using Doc-pars3r* section in [doc-pars3r README.md](https://gitlab.lnu.se/1dv610/student/nt222fc/l2/-/blob/master/README.md) for instructions.

4. Use a start script with a string argument that contains one or many sentences.

NOTE: mid sentence punctuation e.g. commas, semi-colons, etc., are not handled and will throw errors.

```
npm start 'one sentence. two sentences? three sentences!'
```

5. Open the output.html file in a browser to see your pretty html list formatted results.

## How to test Pretty-print3r

When you have completed steps 1 and 2 under *Using Pretty-print3r* above, use the following command to run the mocha test suite:

```
npm test
```
