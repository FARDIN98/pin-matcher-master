// Display Pin
function generatePin(){
    const pinInput = document.getElementById("input-field");
    pinInput.value = getPin();
}

// Handle Calculator Button
const buttonContainer = document.getElementById("digit-parent");
buttonContainer.addEventListener("click", function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle backspace
        //handle clear
        if(digit === 'C'){
            const typedInput = document.getElementById("typed-pin");
            typedInput.value ='';
        }
    }
    else{
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
})
//Verify Pin Number
function verifyPin(){
    const pin = document.getElementById("input-field").value;
    const typedPin = document.getElementById("typed-pin").value;
    if(pin === typedPin){
        checkStatus("block","none");
    }
    else{
       checkStatus("none","block");
    }
}




function checkStatus(correctStatus,incorrectStatus){
    const correct = document.getElementById("correct-pin");
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById("incorrect-pin");
    inCorrect.style.display = incorrectStatus;
}

function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}