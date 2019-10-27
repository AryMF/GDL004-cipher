 let lastTextAreaChanged=0;

 const doIt = (option) => {
    option == 0 ? option = lastTextAreaChanged : option;

    option == 1 ? window.cipher.encode(document.getElementById("offsetNumber").value, document.getElementById("cipherFill").value) 
        : window.cipher.decode(document.getElementById("offsetNumber").value,document.getElementById("cipherResult").value);
    
    lastTextAreaChanged = option;
}

let showSecondScreen = () => {
    document.getElementById("divTransicion").style.visibility = "visible";
    document.getElementById("divTransicion").classList.remove("transition");
    document.getElementById("divTransicion").classList.add("transform-active");
    setTimeout(() => {
        document.getElementById("Encrypt_Decrypt").style.visibility = "visible";
        document.getElementById("cipherFill").focus();
    }, 2200);

    //document.getElementById("divTransicion").toggleClass('transform-active');
    //$('.transform').toggleClass('transform-active');
}

let spinBootstrap=(option)=>{
    option == 1 ? document.getElementById("offsetNumber").stepDown(1) 
        : document.getElementById("offsetNumber").stepUp(1);
    doIt(0);
}

let swap=()=>{
    if(document.getElementById("cipherDecodeTitle").style.visibility == "hidden" ){
        document.getElementById("cipherDecodeTitle").style.visibility = "visible";
        document.getElementById("cipherEncodeTitle").style.visibility = "hidden";
        document.getElementById("cipherFill").disabled = false;
        document.getElementById("cipherFill").focus();
        document.getElementById("cipherResult").disabled = true;
    }
    else {
        document.getElementById("cipherDecodeTitle").style.visibility = "hidden";
        document.getElementById("cipherEncodeTitle").style.visibility = "visible";
        document.getElementById("cipherFill").disabled = true;
        document.getElementById("cipherResult").disabled = false;
        document.getElementById("cipherResult").focus();
    }
    
    document.getElementById("cipherFill").value = "";
    document.getElementById("cipherResult").value = "";
}