window.cipher = {
  // Función para codificar
  encode: (offset, string) => {
    let result = [];
    let offsetCalculated = offset % 26;
    offsetCalculated = offsetCalculated < 0 ? 26 + offsetCalculated : offsetCalculated;

    for(let i=0;i<string.length;i++){
      switch(true){
        //cipher mayúsculas
        case string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90:
          result.push(String.fromCharCode((string.charCodeAt(i) - 65 + offsetCalculated) % 26 + 65));
        break;
        //cipher minúsculas
        case string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122:
          result.push(String.fromCharCode((string.charCodeAt(i) - 97 + offsetCalculated) % 26 + 97));
        break;
        //ignorar todo lo demás
        default:
          result.push(string[i]);
        break;
      }
    }
    return result.join("");
  },
  //Función para decodificar
  decode: (offset, string) => {
    let result = [];
    let offsetCalculated = offset % 26;
    offsetCalculated = offsetCalculated < 0 ? -1 * offsetCalculated : 26 - offsetCalculated;

    for(let i=0;i<string.length;i++){
      switch(true){
        //Decipher mayúsculas
        case string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90:
          result.push(String.fromCharCode((string.charCodeAt(i) - 65 + offsetCalculated) % 26 + 65));
        break;
        //Decipher minúsculas
        case string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122:
          result.push(String.fromCharCode((string.charCodeAt(i) - 97 + offsetCalculated) % 26 + 97));
        break;
        //ignorar todo lo demás
        default:
          result.push(string[i]);
        break;
      }
    }
    return result.join("");
  }
};
