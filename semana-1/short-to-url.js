const fs = require('fs');

const prefix = process.env.APP_WEBSITE || 'shorter.app'
const SHORT_URL_KEY_POSITION = 0
const ORIGINAL_URL_POSITION = 1


// Ref https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
readline.question('Digite a url curta que deseja localizar:', shortUrl => {
    readline.close();
    // Ref https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
    // Ref https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/#read-file-sync
    const allFileContents = fs.readFileSync('urls.csv', 'utf-8'); 

    // Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    // Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    allFileContents.split(/\r?\n/).forEach(line =>  {

        //Ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        keyFromUser = shortUrl.replace(`${prefix}/`, '')
        breakedLine = line.split(',')
        keyFromFile = breakedLine[SHORT_URL_KEY_POSITION]

        if ( keyFromUser == keyFromFile) {
            console.log(`A sua url original é: ${breakedLine[ORIGINAL_URL_POSITION]}`)
            process.exit(0)
        }
      });
      
    console.log("Essa url não tem correspondência no nosso banco de dados")
    process.exit(1)
});