function otp() {
    var otp = document.getElementById('otpno').value;
    if (otp == "123456") {
        alert('Payment Successful')
        localStorage.removeItem('cart');
    } else {
        alert('Incorrect OTP')
    }
}