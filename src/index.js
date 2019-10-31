let lastTextAreaChanged=0;
const delayTime = 2000;
const offsetOption = 0;
const cipherOption = 1;
const decipherOption = 2;
const stepDownOption = 1;
const stepUpOption = 2;

const getDivTransition = document.getElementById("divTransition");
const getOffsetNumber = document.getElementById("offsetNumber");
const getCipherFill = document.getElementById("cipherFill");
const getDecipherFill = document.getElementById("decipherFill");
const getCipherDecodeTitle = document.getElementById("cipherDecodeTitle");
const getCipherEncodeTitle = document.getElementById("cipherEncodeTitle");

const main = () => {
    document.getElementById("StartButton").addEventListener("click", showSecondScreen);
    document.getElementById("spinBootstrapSubtract").addEventListener("click", function(){ spinBootstrap(stepDownOption); });
    document.getElementById("spinBootstrapAdd").addEventListener("click", function(){ spinBootstrap(stepUpOption); });
    document.getElementById("swapButton").addEventListener("click", swap);
    getOffsetNumber.addEventListener("input", function(){ doIt(offsetOption); });
    getCipherFill.addEventListener("input", function(){ doIt(cipherOption); });
    getDecipherFill.addEventListener("input", function(){ doIt(decipherOption); });
};

window.onload = function(){
    main();
};

const showSecondScreen = () => {
    getDivTransition.style.visibility = "visible";
    getDivTransition.classList.remove("transition");
    getDivTransition.classList.add("transform-active");
    setTimeout(() => {
        document.getElementById("divEncryptDecrypt").style.visibility = "visible";
        getCipherFill.focus();
    }, delayTime);
};

const doIt = (option) => {
    option == 0 ? option = lastTextAreaChanged : option;

    if(option==1){
        document.getElementById("decipherFill").value = window.cipher.encode(getOffsetNumber.value, getCipherFill.value);
    }
    else {
        document.getElementById("cipherFill").value = window.cipher.decode(getOffsetNumber.value, getDecipherFill.value);
    }

    lastTextAreaChanged = option;
};

const spinBootstrap = (option) => {
    option == 1 ? getOffsetNumber.stepDown(stepDownOption) 
        : getOffsetNumber.stepUp(stepUpOption);
    doIt(offsetOption);
};

const swap = () => {
    if(getCipherDecodeTitle.style.visibility == "hidden" ){
        getCipherDecodeTitle.style.visibility = "visible";
        getCipherEncodeTitle.style.visibility = "hidden";
        getCipherFill.disabled = false;
        getCipherFill.focus();
        getDecipherFill.disabled = true;
    }
    else {
        getCipherDecodeTitle.style.visibility = "hidden";
        getCipherEncodeTitle.style.visibility = "visible";
        getCipherFill.disabled = true;
        getDecipherFill.disabled = false;
        getDecipherFill.focus();
    }
    
    getCipherFill.value = "";
    getDecipherFill.value = "";
};