window.cipher = {
  // Función para codificar
  encode: (offset, string) => {
    let result = [];
    let offsetCalculated = offset % 26;
    offsetCalculated = offsetCalculated < 0 ? 26 + offsetCalculated : offsetCalculated;

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
    //alert("Encode: " + string + " es " + result);
    document.getElementById("cipherResult").value = result.join("");
  },
  //Función para decodificar
  decode: (offset, string) => {
    let result = [];
    let offsetCalculated = offset % 26;
    offsetCalculated = offsetCalculated < 0 ? -1 * offsetCalculated : 26 - offsetCalculated;
    //alert(offsetCalculated);

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
    //alert("Decode: " + string + " es " + result);
    document.getElementById("cipherFill").value = result.join("");
  }
};
