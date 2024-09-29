document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointmentList = document.getElementById('appointmentList');
    const listItem = document.createElement('li');

    // Validate input
    if (patientName === "" || doctorName === "" ) {
        alert("Please fill out all fields.");
        return;
    }

    listItem.textContent = `${patientName} has an appointment with ${doctorName} on ${appointmentDate} at ${appointmentTime}.`;
    //listItem.textContent = `${patientName} has an appointment with ${doctorName}.`;
    appointmentList.appendChild(listItem);

    // Clear the form
    this.reset();
});


document.getElementById('payBtn').addEventListener('click', function () {
    // Clear session or localStorage (if you're using them for authentication)
    sessionStorage.clear();
    localStorage.clear();
    
    // You can redirect to the login page
    
    window.location.href = "index4.html"; // Make sure to replace this with the actual login page URL


});
document.getElementById('prescription').addEventListener('click', function () {
    // Clear session or localStorage (if you're using them for authentication)
    sessionStorage.clear();
    localStorage.clear();
    
    // You can redirect to the login page
    
    window.location.href = "index3.html"; // Make sure to replace this with the actual login page URL


});