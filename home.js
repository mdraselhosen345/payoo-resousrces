document.getElementById("add-money-btn")
.addEventListener("click", function(e){
     e.preventDefault()
     console.log("Add money btn clcicked");
     const bank = document.getElementById("bank").value;
     const accountNumber = document.getElementById("account-number").value;
     const addAmount = parseInt(document.getElementById("add-amount").value);
     const pinNumber = document.getElementById("pin-number").value
     
     const availableBalnce = parseInt(document.getElementById("available-balnce").innerText)

     console.log(availableBalnce)

     const totalNewAvailableBalance = addAmount + availableBalnce

     document.getElementById("available-balnce").innerText = totalNewAvailableBalance
})