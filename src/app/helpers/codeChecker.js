import CryptoJS from 'crypto-js';

/*** Add encrypted data below ***/
const encrypted = '';

const getRandNumber = (secret, coord) => {
  return String(+`${secret}${coord}` % 997).padStart(3, '0');
};

export default (secret, coord) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, secret);
  let deciphered = null;
  let result = '';

  try {
    deciphered = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    result = typeof deciphered[coord] != 'undefined'
      ? '👉' + deciphered[coord]
      : getRandNumber(secret, coord);
  }
  catch (e) {
    result = getRandNumber(secret, coord);
  }

  return result;
};
