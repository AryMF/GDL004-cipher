 const doIt = (option) => {
    option == 1 ? window.cipher.encode(-2, document.getElementById("cipherFill").value) 
        : window.cipher.decode(-2,document.getElementById("cipherResult").value);

    
}