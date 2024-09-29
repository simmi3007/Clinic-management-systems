const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


// Selecting the emergency tab and popup elements
const emergencyBtn = document.getElementById('emergency-btn');
const popup = document.getElementById('emergency-popup');
const closePopup = document.getElementById('close-popup');
const alertBtn = document.getElementById('alert-btn');

// Function to open the popup when emergency is clicked
emergencyBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent page reload
    popup.classList.remove('hidden');
});

// Function to close the popup
closePopup.addEventListener('click', function() {
    popup.classList.add('hidden');
});

// Function to send an alert (You can replace this with real functionality)
alertBtn.addEventListener('click', function() {
    alert('Emergency alert sent to Doctor!');
    popup.classList.add('hidden');
});
