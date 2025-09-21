// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "Enter a valid email!";
    formMessage.style.color = "red";
    return;
  }

  // Save feedback in localStorage
  let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.push({ name, email, message });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  // Success message
  formMessage.textContent = "Thank you for your feedback!";
  formMessage.style.color = "green";

  document.getElementById("contactForm").reset();
});

// Email validation
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});
