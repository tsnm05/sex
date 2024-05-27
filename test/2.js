const button = document.getElementById('moveButton');
const button2 = document.getElementById('hahaButton');
let hoverAttempts = 0;

button.addEventListener('mouseenter', () => {
  hoverAttempts++;
  if (hoverAttempts >= 12) {
    // Display another button after 15 attempts
    const hahaButton = document.createElement('button');
    hahaButton.textContent = "bh bhhhh enzil e5r mara";
    hahaButton.style.position = "absolute";
    hahaButton.style.top = "50%";
    hahaButton.style.left = "50%";
    hahaButton.style.transform = "translate(-50%, -50%)";
    hahaButton.style.padding= "10px";
    hahaButton.style.border= "none";
    hahaButton.style.border.radius = "5px";
    hahaButton.style.color= "white";
    hahaButton.style.background= "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    hahaButton.style.background.size="400% 400%";
    hahaButton.style.animation= "gradient 15s ease infinite";
    hahaButton.style.cursor= "pointer";
    hahaButton.style.animation= "gradient 15s ease infinite";
    hahaButton.addEventListener('click', () => {
        window.location.href = '4.html'; // Redirect to another HTML page
      });
    document.body.appendChild(hahaButton);
    button.style.display = "none"; // Hide the original button after 15 attempts
  }

  // Move button to a random position when mouse enters
  const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
});

// Prevent click action on the button
button.addEventListener('click', (event) => {
  event.preventDefault();
});
