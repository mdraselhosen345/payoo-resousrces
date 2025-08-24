const validpin = 1234

// function to get input values

// function getInputValueNumber(id){
//    const inputField =  document.getElementById(id)
//    const inputFieldValue = inputField.value
//    const inputFieldValueNumber = parseInt(inputFieldValue)
//    console.log(inputFieldValueNumber)
//  }


//  function getInputValue(id){
//      const inputField = document.getElementById(id)
//      const inputFieldValue = inputField.value
//      return inputFieldValue 
//  }
// function to get innertext 
// function getInnerText(id){
//      const element =document.getElementById(id)
//      const elementValue = element.innerText
//      const elementValueNumber = parseInt(elementValue)
//      return elementValueNumber
// }
 
// function to set innerText
// function setInnerText(value){
//      const availableBalanceElement = getElementById("available-balnce")
//       availableBalanceElement.innerText = value


// }

//Add money featrure------
document.getElementById("add-money-btn")
.addEventListener("click", function(e){
     e.preventDefault()
     console.log("Add money btn clcicked");
     const bank = document.getElementById("bank").value;
     const accountNumber = document.getElementById("account-number").value;
     const addAmount = parseInt(document.getElementById("add-amount").value);
     const pinNumber = parseInt(document.getElementById("pin-number").value)
     
      const availableBalnce = parseInt(document.getElementById("available-balnce").innerText)
     // const availableBalnce = getInnerText("available-balnce")
     
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

     // setInnerText(totalNewAvailableBalance)
})


//cash out money fiscure----
 document.getElementById("Withdraw-btn")
 .addEventListener("click", function(e){
     e.preventDefault()

     const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)
     const availableBalance = parseInt(document.getElementById("available-balnce").innerText)
    console.log(withdrawAmount, availableBalance)
    const totalNewAvailableBalance = availableBalance - withdrawAmount
    console.log(totalNewAvailableBalance)
     document.getElementById("available-balnce").innerText = totalNewAvailableBalance 

//     setInnerText(totalNewAvailableBalance)
})

//toggling feature----------------
document.getElementById("add-money-button")
.addEventListener("click", function(e){
     
     document.getElementById("add-money-parent").style.display = "block"
     document.getElementById("cash-out-parent").style.display = "none"
})

document.getElementById("cash-out-button")
.addEventListener("click", function(){
     
     document.getElementById("cash-out-parent").style.display ="block"
     document.getElementById("add-money-parent").style.display ="none"
})