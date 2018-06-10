/**
 * Creates a bugshr URL.
 * @param {String} data
 * @returns {String}
 */
module.exports = function (data) {
  if (typeof data !== 'string') throw new Error('Data must be a string.')
  return `https://bugshr.github.io/?data=${encodeURIComponent(Buffer.from(data).toString('base64'))}`
}
