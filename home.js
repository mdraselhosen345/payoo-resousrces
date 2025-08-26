const validpin = 1234
// function to toggle ---------
// function handleToggle(id){
//      const forms = document.getElementsByClassName("form")
//      for(const form of forms){
//           form.style.display = "none"
//           document.getElementById("get-bouns-parent").style.display = "block"
//      }
// }

// welcome to pay button click--------------------
//Add money ------
 document.getElementById("add-money-btn")
.addEventListener("click", function(e){
     e.preventDefault()
     console.log("Add money btn clcicked");
     const bank = document.getElementById("bank").value;
     const accountNumber = document.getElementById("account-number").value;
     const addAmount = parseInt(document.getElementById("add-amount").value);
     const pinNumber = parseInt(document.getElementById("pin-number").value)
     
     const availableBalnce = parseInt(document.getElementById("available-balnce").innerText)
     
     console.log(addAmount, availableBalnce)
     
     if(accountNumber.length < 11){
          alert("please provide valid account number")
          return;
     }
     if(pinNumber !== validpin){
          alert("Please provide valid pin number")
          return;
     }

     const totalNewAvailableBalance = addAmount + availableBalnce

     document.getElementById("available-balnce").innerText = totalNewAvailableBalance
})


//cash out money ----
 document.getElementById("Withdraw-btn")
 .addEventListener("click", function(e){
     e.preventDefault()

     const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)
     const availableBalance = parseInt(document.getElementById("available-balnce").innerText)
    console.log(withdrawAmount, availableBalance)
    const totalNewAvailableBalance = availableBalance - withdrawAmount
    console.log(totalNewAvailableBalance)
    document.getElementById("available-balnce").innerText = totalNewAvailableBalance 
})
// get Bonus------


// transfer money ---------------------
    

//toggling feature----------------

// add money toggling ------
document.getElementById("add-money-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display = "none"
     // document.getElementById("add-money-parent").style.display = "block"
     // document.getElementById("transfer-money-parent").style.display ="none"

     const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("add-money-parent").style.display = "block"
     }
})

// cash out toggling ------
document.getElementById("cash-out-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display ="block"
     //  document.getElementById("add-money-parent").style.display ="none"
     //  document.getElementById("transfer-money-parent").style.display ="none"
     const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("cash-out-parent").style.display = "block"
     }
})

// transfer money toggling ------
document.getElementById("transfer-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display = "none"
     // document.getElementById("add-money-parent").style.display = "none" 
     // document.getElementById("transfer-money-parent").style.display ="block"
      const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("transfer-money-parent").style.display = "block"
     }
})

// get Bouns toggling ------
document.getElementById("bouns-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display = "none"
     // document.getElementById("add-money-parent").style.display = "none" 
     // document.getElementById("transfer-money-parent").style.display ="block"
      const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("get-bouns-parent").style.display = "block"
     }
})
// pay Bill-------------
document.getElementById("pay-bill-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display = "none"
     // document.getElementById("add-money-parent").style.display = "none" 
     // document.getElementById("transfer-money-parent").style.display ="block"
      const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("pay-bill-parent").style.display = "block"
     }
})
// Transaction History-------------
document.getElementById("Transaction-button")
.addEventListener("click", function(){
     // document.getElementById("cash-out-parent").style.display = "none"
     // document.getElementById("add-money-parent").style.display = "none" 
     // document.getElementById("transfer-money-parent").style.display ="block"
      const forms = document.getElementsByClassName("form")
     for(const form of forms){
          form.style.display = "none"
          document.getElementById("Transaction-history").style.display = "block"
     }
})