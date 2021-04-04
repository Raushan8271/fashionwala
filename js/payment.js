function submit() {
    let payment = {
        card: document.getElementById('card').value,
        exp: document.getElementById('exp').value,
        cvv: document.getElementById('cvv').value,
        name: document.getElementById('name').value
    }

    if (payment.card == '' && payment.exp == '' && payment.cvv == '' && payment.name == '') {
        alert('All the field is empty')
    } else if (payment.card == '') {
        alert('Card No is empty')
    } else if (payment.exp == '') {
        alert('Expiry date is empty')
    } else if (payment.cvv == '') {
        alert('CVV No is empty')
    } else {
        if (payment.card.length >= 12 && payment.exp.length >= 5 && payment.cvv.length >= 3 && payment.card.length <= 16 && payment.exp.length <= 10 && payment.cvv.length <= 4) {
            window.location.href = 'OTP.html'
        } else {
            alert('Please Fill All Data correct')
        }
    }
}