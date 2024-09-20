
function getInputFieldValue(id){
    const inputValue=document.getElementById(id).value ;
    const inputValueInNumber=Number(inputValue);
    return inputValueInNumber;
}

function getTextFieldValue(id){
    const textValue=document.getElementById(id).innerText;
    const textValueInNumber=Number(textValue);
    return textValueInNumber;
}