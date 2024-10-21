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

// JavaScript code for the ELO Tracker
document.getElementById("calculateELO").addEventListener("click", function() {
  const matchType = document.getElementById("matchType").value;
  const result = document.getElementById("result").value;
  const eloBooster = document.getElementById("eloBooster").checked;
  const currentELO = parseInt(document.getElementById("currentELO").value);

  if (isNaN(currentELO)) {
    document.getElementById("eloResult").textContent = "Please enter your current ELO.";
    return;
  }

  let eloChange;
  if (matchType === "10min") {
      eloChange = result === "win" ? (eloBooster ? 300 : 150) : (eloBooster ? 150 : 75);
  } else if (matchType === "5min") {
      eloChange = result === "win" ? (eloBooster ? 150 : 100) : (eloBooster ? 100 : 50);
  }

  const newELO = currentELO + eloChange;
  document.getElementById("eloResult").textContent = `New ELO after match: ${newELO}`;

  // Badge progress calculation
  let badgeProgress = "";
  if (newELO < 30000) {
      badgeProgress = `You need ${30000 - newELO} points to reach the Green Badge.`;
  } else if (newELO < 85000) {
      badgeProgress = `You need ${85000 - newELO} points to reach the Blue Badge.`;
  } else if (newELO < 165000) {
      badgeProgress = `You need ${165000 - newELO} points to reach the Gold Badge.`;
  } else {
      badgeProgress = "Congratulations! You have achieved the Gold Badge!";
  }

  document.getElementById("badgeProgress").textContent = badgeProgress;
});
