function calculateInterest() {
    const Balance = document.getElementById("Balance").value;
    const Interest = document.getElementById("Interest").value;
    const DesiredBalance = document.getElementById("DesiredBalance").value;
  
    let balance = parseFloat(Balance);
    let years = 0;
  
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = ""; // Clear previous output
  
    while (balance < DesiredBalance) {
      balance += balance * Interest;
      years++;
      outputElement.innerHTML += `Year ${years}: Balance = ${balance.toFixed(2)}<br>`;
    }
  }