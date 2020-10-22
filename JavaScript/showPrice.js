function showPrice(){
    var token = document.getElementById('tokenName').value
    if (token==="Bitcoin") {alert (`${token}'s price is 11400`)}
    else {
        if (token==="Ethereum"){alert(`${token}'s price is 390`)}
    else{(alert(`${token}'s price is N/A`))}
    }
    }