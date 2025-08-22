// login button functionality
document.getElementById("login-button")
.addEventListener("click", function (e){
    e.preventDefault()
   const mobileNumber = 12345678910
   const PinNumber = 1234
   const mobileNumberValue = document.getElementById("mobile-number").value
   const mobileNumberValueConverted = parseInt(mobileNumberValue)

   const PinNumberValue = document.getElementById("pin-number").value
   const PinNumberValueConverted = parseInt(PinNumberValue)

   console.log(mobileNumberValueConverted, PinNumberValueConverted)
    if(mobileNumberValueConverted === mobileNumberValue && PinNumberValueConverted === PinNumberValue){
        console.log("All values matched")
    }
    else{
        console.log("invalid credentials")
    }
})