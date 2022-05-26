const crypto = require("crypto")
const fs = require('fs');

const prefix = process.env.APP_WEBSITE || 'shorter.app'


//ref https://www.geeksforgeeks.org/node-js-hash-digest-method/
const createHash = (url) => crypto.createHash("sha256").update(url).digest("hex").substring(0,7)
//Ref https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
// Ref https://nodejs.org/api/fs.html#file-system-flags
const persistData = (url) =>  fs.writeFileSync("urls.csv", url, {'flag':'a'});



// Ref https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
readline.question('Digite a url que deseja encurtar:', url => {
  readline.close();

  let digest = createHash(url)
  persistData(`${digest},${url}`)
  console.log(`A sua url curta é: ${prefix}/${digest}`)  
});