const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image").blur;

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});



function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

/*
// signin.js

document.getElementById('sign-btn').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!email || !password) {
      alert("Please fill in both fields.");
      return;
  }

  // Prepare data to be sent to the server
  const data = {
      email: email,
      password: password
  };

// Send sign-in request to the server using Fetch API
  fetch('https://your-server-url.com/api/signin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          document.getElementById('message').textContent = "Sign in successful!";
          // Redirect user to the dashboard or another page
          window.location.href = '/dashboard';
      } else {
          document.getElementById('message').textContent = "Invalid email or password.";
      }
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('message').textContent = "An error occurred. Please try again.";
  });
});
*/



document.getElementsByClassName('sign-btn').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  try {
      const response = await fetch('https://your-server-url.com/api/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password
          }),
      });

      if (response.ok) {
          const data = await response.json();
          // Handle success (redirect or show message)
          console.log('Sign-in successful:', data);
      } else {
          const errorData = await response.json();
          errorMessage.textContent = errorData.message || 'Sign-in failed. Please try again.';
      }
  } catch (error) {
      errorMessage.textContent = 'An error occurred. Please try again later.';
      console.error('Error:', error);
  }
});
