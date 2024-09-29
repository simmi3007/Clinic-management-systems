// Sample doctor data
const doctorProfile = {
    name: "Dr. Alice Johnson",
    contact: "alice.johnson@example.com",
    specialty: "Cardiology",
    qualifications: "MBBS, MD",
    experience: "15 years",
    availability: "Mon-Fri: 9 AM - 5 PM",
    employeeID: "D123456",
    salary: "$150,000/year"
};

// Sample user credentials
const credentials = {
    username: "doctor",
    password: "password123"
};

// Function to display doctor's profile
function displayDoctorProfile() {
    const profileContainer = document.getElementById('doctor-profile');
    profileContainer.innerHTML = `
        <h2>${doctorProfile.name}</h2>
        <p><strong>Contact:</strong> ${doctorProfile.contact}</p>
        <p><strong>Specialty:</strong> ${doctorProfile.specialty}</p>
        <p><strong>Qualifications:</strong> ${doctorProfile.qualifications}</p>
        <p><strong>Experience:</strong> ${doctorProfile.experience}</p>
        <p><strong>Availability:</strong> ${doctorProfile.availability}</p>
        <p><strong>Employee ID:</strong> ${doctorProfile.employeeID}</p>
        <p><strong>Salary:</strong> ${doctorProfile.salary}</p>
    `;
}

// Login button click event
document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');
    
    // Check credentials
    if (username === credentials.username && password === credentials.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('profile-container').style.display = 'block';
        displayDoctorProfile(); // Display doctor profile
    } else {
        loginMessage.textContent = 'Invalid username or password';
    }
});
