
function bookAppointment(doctor, date, time) {
     alert(`Appointment booked with ${doctor} on ${date} at ${time}`);
     // Here you can add further logic to save the appointment
 }

document.getElementById('bookBtn').addEventListener('click', function () {
    // Clear session or localStorage (if you're using them for authentication)
    sessionStorage.clear();
    localStorage.clear();
    
    // You can redirect to the login page
    
    window.location.href = "index.html"; // Make sure to replace this with the actual login page URL


});