// Initialize an object to store the count for each suit
const suitCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    // Add more suits as needed
  };
  
  function selectSuit(suitNumber) {
    // Increase the count for the selected suit
    suitCounts[suitNumber]++;
  
    // Update the displayed score for each suit
    updateScore();
  }
  
  function updateScore() {
    const scoreElement = document.getElementById('score');
    
    // Display the count for each suit
    let scoreText = '';
    for (const suitNumber in suitCounts) {
      scoreText += `Suit ${suitNumber}: ${suitCounts[suitNumber]}<br>`;
    }
  
    scoreElement.innerHTML = scoreText;
  }
  