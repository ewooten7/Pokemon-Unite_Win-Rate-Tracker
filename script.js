// JavaScript code for the ELO Tracker
document.getElementById("calculateELO").addEventListener("click", function() {
  const matchType = document.getElementById("matchType").value;
  const result = document.getElementById("result").value;
  const eloBooster = document.getElementById("eloBooster").checked;
  const effectSpray = document.getElementById("effectSpray").checked;
  const currentELO = parseInt(document.getElementById("currentELO").value);

  if (isNaN(currentELO)) {
      document.getElementById("eloResult").textContent = "Please enter a valid ELO.";
      return;
  }

  let eloPoints = 0;

  // Calculate base ELO points based on match type and result
  if (matchType === "10min") {
      if (result === "win") {
          eloPoints = 150;
      } else {
          eloPoints = 75;
      }
  } else if (matchType === "5min") {
      if (result === "win") {
          eloPoints = 100;
      } else {
          eloPoints = 50;
      }
  }

  // Apply ELO booster if active
  if (eloBooster) {
      if (matchType === "10min") {
          if (result === "win") {
              eloPoints = 300; // With booster
          } else {
              eloPoints = 150; // With booster
          }
      } else if (matchType === "5min") {
          if (result === "win") {
              eloPoints = 150; // With booster
          } else {
              eloPoints = 100; // With booster
          }
      }
  }

  // Apply Effect Spray if active
  if (effectSpray) {
      eloPoints += 30; // Add 30 points regardless of win or lose
  }

  const newELO = currentELO + eloPoints;

  // Display the result
  document.getElementById("eloResult").textContent = `Your new ELO points are: ${newELO}`;

  // Calculate badge progress
  let badgeMessage = '';
  if (newELO >= 165000) {
      badgeMessage = 'You have earned the Gold Badge!';
  } else if (newELO >= 85000) {
      badgeMessage = `You are ${165000 - newELO} points away from the Gold Badge.`;
  } else if (newELO >= 30000) {
      badgeMessage = `You are ${85000 - newELO} points away from the Blue Badge.`;
  } else {
      badgeMessage = `You are ${30000 - newELO} points away from the Green Badge.`;
  }

  // Display badge progress
  document.getElementById("badgeProgress").textContent = badgeMessage;
});