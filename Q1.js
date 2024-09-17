// Generate a random number between 1 and 6 (inclusive)
let roll = 5; // For this example, we'll hardcode the roll to 5

// Create a dice face with the rolled number
let diceFace = `
  <div class="dice">
    <div class="dot" style="top: 25%; left: 50%;"></div>
    <div class="dot" style="top: 50%; left: 25%;"></div>
    <div class="dot" style="top: 50%; left: 75%;"></div>
    <div class="dot" style="top: 75%; left: 50%;"></div>
    <div class="dot" style="top: 50%; left: 50%;"></div>
  </div>
`;

// Update the HTML with the rolled number
document.getElementById("dice-roll").innerHTML = `You rolled a ${roll}! ${diceFace}`;