export default class WriteError extends Error {
  constructor (message) {
    super(message)
    this.name = 'WriteError'
  }
}
