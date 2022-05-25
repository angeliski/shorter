const fs = require('fs');

const prefix = process.env.APP_WEBSITE || 'shorter.app'
const SHORT_URL_KEY_POSITION = 0
const ORIGINAL_URL_POSITION = 1


// Ref https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
// Ref https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#read-file-sync
// Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
const readData = () => fs.readFileSync('urls.csv', 'utf-8')
.split(/\r?\n/)

// Ref https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
readline.question('Digite a url curta que deseja localizar:', shortUrl => {
    readline.close();    
    const lines = readData()
    
    //Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    const keyFromUser = shortUrl.replace(`${prefix}/`, '')

    // Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    const lineShort = lines
    .map((line) => line.split(','))
    .find(breakedLine => keyFromUser == breakedLine[SHORT_URL_KEY_POSITION] )


    if (lineShort) {
        console.log(`A sua url original é: ${lineShort[ORIGINAL_URL_POSITION]}`)
        process.exit(0)
    }
  
    console.log("Essa url não tem correspondência no nosso banco de dados")
    process.exit(1)
});