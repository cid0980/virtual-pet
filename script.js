let happiness = 10;
let hunger = 5;

const statusDiv = document.getElementById('status');
const petImage = document.getElementById('pet');

// Function to update pet status
function updateStatus() {
    if (happiness <= 0) {
        statusDiv.textContent = 'Status: Sad';
        petImage.style.transform = 'scale(0.9)'; // Make the pet appear smaller
    } else if (hunger >= 10) {
        statusDiv.textContent = 'Status: Hungry';
        petImage.style.transform = 'scale(1.1)'; // Make the pet appear larger
    } else {
        statusDiv.textContent = 'Status: Happy';
        petImage.style.transform = 'scale(1)'; // Reset size
    }
}

// Feed button functionality
document.getElementById('feed-button').addEventListener('click', () => {
    hunger = Math.max(0, hunger - 1); // Decrease hunger
    happiness = Math.min(10, happiness + 1); // Increase happiness
    updateStatus();
});

// Play button functionality
document.getElementById('play-button').addEventListener('click', () => {
    happiness = Math.min(10, happiness + 2); // Increase happiness
    hunger = Math.min(10, hunger + 1); // Increase hunger
    updateStatus();
});

// Initial status update
updateStatus();
