//Declaración de variables y constantes
let lastTextAreaChanged=0;
const delayTime = 2000;
const offsetOption = 0;
const cipherOption = 1;
const decipherOption = 2;
const stepDownOption = 1;
const stepUpOption = 2;

const getDivTransition = document.getElementById("divTransition");
const offsetNumberInput = document.getElementById("offsetNumber");
const getCipherFill = document.getElementById("cipherFill");
const getDecipherFill = document.getElementById("decipherFill");
const getCipherDecodeTitle = document.getElementById("cipherDecodeTitle");
const getCipherEncodeTitle = document.getElementById("cipherEncodeTitle");

const doOffsetOption = () => { doIt(offsetOption); };
const doCipherOption = () => { doIt(cipherOption); };
const doDecipherOption = () => { doIt(decipherOption); };
const spinBootstrapStepUP = () => { spinBootstrap(stepUpOption); };
const spinBootstrapStepDown = () => { spinBootstrap(stepDownOption); };

//Funciónes para inicializar los EventListener
const main = () => {
    document.getElementById("StartButton").addEventListener("click", showSecondScreen);
    document.getElementById("spinBootstrapSubtract").addEventListener("click", spinBootstrapStepDown);
    document.getElementById("spinBootstrapAdd").addEventListener("click", spinBootstrapStepUP);
    document.getElementById("swapButton").addEventListener("click", swap);
    offsetNumberInput.addEventListener("input", doOffsetOption);
    getCipherFill.addEventListener("input", doCipherOption);
    getDecipherFill.addEventListener("input", doDecipherOption);
};

window.onload = function(){
    main();
};

//Función realiza el efecto de transición y manda llamar a la segunda pantalla
const showSecondScreen = () => {
    getDivTransition.style.visibility = "visible";
    getDivTransition.classList.remove("transition");
    getDivTransition.classList.add("transform-active");
    setTimeout(() => {
        document.getElementById("divEncryptDecrypt").style.visibility = "visible";
        getCipherFill.focus();
    }, delayTime);
};

//Función que manda llamar a cipher e imprime el resultado
const doIt = (option) => {
     option == 0 ? option = lastTextAreaChanged : option;

    if(option==1){
        document.getElementById("decipherFill").value = window.cipher.encode(offsetNumberInput.value, getCipherFill.value);
    }
    else {
        document.getElementById("cipherFill").value = window.cipher.decode(offsetNumberInput.value, getDecipherFill.value);
    }

    lastTextAreaChanged = option;
};

//Función para aumenta o decrementar un numero en el input del offset
const spinBootstrap = (option) => {
    option === 1 ? offsetNumberInput.stepDown(stepDownOption) 
        : offsetNumberInput.stepUp(stepUpOption);
    doIt(offsetOption);
};

//Función para cambiar entre modalidades cipher/decipher
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