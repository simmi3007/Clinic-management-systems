document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const amount = document.getElementById('amount').value;

    const table = document.getElementById('paymentTable');
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = patientName;
    cell2.textContent = doctorName;
    cell3.textContent = `$${parseFloat(amount).toFixed(2)}`;

    // Clear the input fields
    document.getElementById('paymentForm').reset();
});
