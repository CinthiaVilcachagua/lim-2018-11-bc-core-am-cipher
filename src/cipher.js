//funcion  cifrado cesar
  function encode(phrase,offset){
    let phraseFinal = '';
    phrase = phrase.toUpperCase();
    for (let i = 0; i < phrase.length; i++) {
      const numberAsciiPhrase = phrase.charCodeAt(i);
      phraseFinal += String.fromCharCode((numberAsciiPhrase -65 + offset)%26 + 65);
    }
    return phraseFinal;
  }

//funcion de decifrado
function decode(phrase ,offset) {
  let phraseFinal = "";
  phrase = phrase.toUpperCase();
  for (let i = 0; i < phrase.length; i++) {
    const numberAsciiPhrase = phrase.charCodeAt(i);

    if (numberAsciiPhrase != 32 && numberAsciiPhrase >= 65 && numberAsciiPhrase <= 90) {
       phraseFinal += String.fromCharCode((numberAsciiPhrase - 90 - offset )%26 + 90);
    }
  }
  return phraseFinal;
}


window.cipher = {
  encode: encode,
  decode: decode
};
