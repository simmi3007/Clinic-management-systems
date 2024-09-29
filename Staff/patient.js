// Appointment Scheduling
const appointmentForm = document.getElementById('appointment-form');
const appointmentList = document.getElementById('appointment-list');

appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patient-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    
    // Add new appointment to the list
    const li = document.createElement('li');
    li.textContent = `Patient: ${patientName} - Date: ${appointmentDate} - Time: ${appointmentTime}`;
    appointmentList.appendChild(li);

    // Clear form fields
    appointmentForm.reset();
});

// Communication Tools
const communicationForm = document.getElementById('communication-form');
const communicationLog = document.getElementById('communication-log');

communicationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commMethod = document.getElementById('comm-method').value;
    const patientMessage = document.getElementById('patient-message').value;

    // Log communication
    const li = document.createElement('li');
    li.textContent = `Method: ${commMethod.toUpperCase()} - Message: ${patientMessage}`;
    communicationLog.appendChild(li);

    // Clear form fields
    communicationForm.reset();
});

// Patient Queries
const queryForm = document.getElementById('query-form');
const queryList = document.getElementById('query-list');

queryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientQuery = document.getElementById('patient-query').value;

    // Add patient query to the list
    const li = document.createElement('li');
    li.textContent = `Query: ${patientQuery}`;
    queryList.appendChild(li);

    // Clear form fields
    queryForm.reset();
});
