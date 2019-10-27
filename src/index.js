 let lastTextAreaChanged=0;

 const doIt = (option) => {
    option == 0 ? option = lastTextAreaChanged : option;

    option == 1 ? window.cipher.encode(document.getElementById("offsetNumber").value, document.getElementById("cipherFill").value) 
        : window.cipher.decode(document.getElementById("offsetNumber").value,document.getElementById("cipherResult").value);
    
    lastTextAreaChanged = option;
}

let showSecondScreen = () => {
    document.getElementById("Encrypt_Decrypt").style.visibility = "visible";
}