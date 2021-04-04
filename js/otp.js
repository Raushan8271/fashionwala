function otp() {
    var otp = document.getElementById('otpno').value;
    if (otp == "123456") {
        alert('Payment Successful')
    } else {
        alert('Incorrect OTP')
    }
}