window.cipher = {
  // Acá escribe tu código.
  encode: (offset, string) => {
    
    let result = [];
    // let charCodeArray= [];
    let offsetCalculated = offset % 26;
    offsetCalculated = offsetCalculated < 0 ? 26 + offsetCalculated : offsetCalculated;
    alert(offsetCalculated);

    
    for(let i=0;i<string.length;i++){
      switch(true){
        case string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90:
          //cipher mayúsculas
          result.push(String.fromCharCode((string.charCodeAt(i) - 65 + offsetCalculated) % 26 + 65));
        break;
        case string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122:
          //cipher minúsculas
          result.push(String.fromCharCode((string.charCodeAt(i) - 97 + offsetCalculated) % 26 + 97));
        break;
        default:
          //ignorar todo lo demás
          result.push(string[i]);
        break;
      }
    }
    alert(string + " es " + result);
  },

  decode: (offset, string) => {
    //kek
  }
};
