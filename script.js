// ===========================
// 🌐 Stage 0: Personal Card
// ===========================

// Update time every second
function updateTime() {
  const timeEl = document.getElementById("user-time");
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString();
  }
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload functionality
const avatarUpload = document.getElementById("avatar-upload");
if (avatarUpload) {
  avatarUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const avatar = document.getElementById("avatar");
      if (avatar) {
        avatar.src = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  });
}

// ===========================
// ✉️ Stage 1: Contact Form
// ===========================


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successMsg = document.getElementById("success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear old errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    successMsg.textContent = "";

    // Name validation
    if (!nameInput.value.trim()) {
      document.getElementById("error-name").textContent = "Full name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailInput.value.trim()) {
      document.getElementById("error-email").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      document.getElementById("error-email").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject validation
    if (!subjectInput.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      isValid = false;
    }

    // Message validation
    const messageText = messageInput.value.trim();
    if (!messageText) {
      document.getElementById("error-message").textContent = "Message is required.";
      isValid = false;
    } else if (messageText.length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = "✅ Your message has been sent successfully!";
      successMsg.style.color = "green";
      form.reset();
    }
  });
});
