const fs = require('fs');
const CryptoJS = require('crypto-js');
const inputFile = './data/coordinates.json';
const outputFile = './data/encrypted.json';

const generateEncryptedFile = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data.coordinates), String(data.secret));

  console.log(`\n✅  ️Encrypted data:\n${ciphertext.toString()}\n`);

  const json = JSON.stringify({
    hash: ciphertext.toString()
  });

  fs.writeFile(outputFile, json, 'utf8', (err) => {
    err === null
      ? console.log(`✅  Saved to ${outputFile}\n`)
      : console.log(err);
    ;
  });
};

const showReadFileError = (err) => {
  // TODO: give coordinates.json file hint
  console.log(err);
};

fs.readFile(inputFile, (err, data) => {
  err === null
    ? generateEncryptedFile(JSON.parse(data))
    : showReadFileError(err);
});
