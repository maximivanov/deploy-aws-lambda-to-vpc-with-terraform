const https = require('https')

exports.handler = async function () {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  const randomFact = JSON.parse(res).value

  return randomFact
}

async function fetch(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { timeout: 1000 }, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        return reject(new Error(`HTTP status code ${res.statusCode}`))
      }

      const body = []
      res.on('data', (chunk) => body.push(chunk))
      res.on('end', () => {
        const resString = Buffer.concat(body).toString()
        resolve(resString)
      })
    })

    request.on('error', (err) => reject(err))
    request.on('timeout', (err) => {
      console.log('timed out', err)
      reject(err)
    })
  })
}
