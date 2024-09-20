document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    
    const addMoney=getInputFieldValue('input-add-money');
    const pinNumber=getInputFieldValue('input-pin-number');
    

    if(pinNumber===1234){
        const balance=getTextFieldValue('balance-amount');
        const newBalance=balance+addMoney;

        document.getElementById('balance-amount').innerText=newBalance;
    }
    else{
        alert('Failed to add money!')
    }
})