// JavaScript code for the Win Rate Calculator
document.getElementById("calculate-btn").addEventListener("click", function() {
    const currentWins = parseInt(document.getElementById("current-wins").value);
    const totalGames = parseInt(document.getElementById("total-games").value);
    const targetPercentage = parseFloat(document.getElementById("target-percentage").value);
    const errorMessage = document.getElementById("error-message");
    const resultBox = document.getElementById("result");
  
    if (isNaN(currentWins) || isNaN(totalGames) || isNaN(targetPercentage)) {
      errorMessage.textContent = "Please fill in all fields correctly.";
      resultBox.style.display = "none";
      return;
    }
  
    // Validate if target percentage is within 0-100%
    if (targetPercentage < 0 || targetPercentage > 100) {
      errorMessage.textContent = "Please enter a target win rate between 0 and 100.";
      resultBox.style.display = "none";
      return;
    }
  
    // Calculate the number of additional wins needed
    const neededWins = Math.ceil((targetPercentage / 100 * totalGames - currentWins) / (1 - targetPercentage / 100));
  
    if (neededWins < 0) {
      errorMessage.textContent = "You have already exceeded this win rate.";
      resultBox.style.display = "none";
    } else {
      errorMessage.textContent = "";
      resultBox.textContent = `You need ${neededWins} more wins to reach a ${targetPercentage}% win rate.`;
      resultBox.style.display = "block";
    }
  });
  