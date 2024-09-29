document.getElementById('prescriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const medication = document.getElementById('medication').value;
    const dosage = document.getElementById('dosage').value;

    const prescriptionList = document.getElementById('prescriptionList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${patientName}</td>
        <td>${doctorName}</td>
        <td>${medication}</td>
        <td>${dosage}</td>
    `;
    
    prescriptionList.appendChild(row);

    // Clear the form
    this.reset();
});
