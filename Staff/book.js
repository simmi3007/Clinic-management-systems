document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Hide the form and show confirmation message
    document.getElementById('appointment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});
