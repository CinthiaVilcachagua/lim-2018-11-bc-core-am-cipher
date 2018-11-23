//funcion  cifrado cesar
  encode(offset,string) => {
    let phraseFinal = '';
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      const numberAsciiPhrase = string.charCodeAt(i);
      phraseFinal += String.fromCharCode((numberAsciiPhrase -65 + offset)%26 + 65);
    }
    return phraseFinal;
  }

//funcion de decifrado
decode(offset,string) => {
  let phraseFinal = "";
  string = string.toUpperCase();
  for (let i = 0; i < string.length; i++) {
    const numberAsciiPhrase = string.charCodeAt(i);

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
