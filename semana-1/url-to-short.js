const crypto = require("crypto")
const fs = require('fs');

const prefix = process.env.APP_WEBSITE || 'shorter.app'

// Ref https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
readline.question('Digite a url que deseja encurtar:', url => {
    //ref https://www.geeksforgeeks.org/node-js-hash-digest-method/
    let digest = crypto.createHash("sha256").update(url).digest("hex").substring(0,7)

    //Ref https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
    // Ref https://nodejs.org/api/fs.html#file-system-flags
    fs.writeFileSync("urls.csv", `${digest},${url}`, {'flag':'a'});

    console.log(`A sua url curta é: ${prefix}/${digest}`)
    readline.close();
});