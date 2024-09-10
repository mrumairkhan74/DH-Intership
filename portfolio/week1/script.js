function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hideSidebar(){
  const hide = document.querySelector('.sidebar')
  hide.style.display='none'
}

// Form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Get form values
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let valid = true;

    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }
    if (subject === "") {
      document.getElementById("subjectError").textContent = "Subject is required.";
      valid = false;
    }
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      valid = false;
    }

    // Validate email
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email.";
      valid = false;
    }

    // If the form is valid, submit it
    if (valid) {
      alert("Form submitted successfully!");
      // You can add form submission logic here
    }
  });

const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
);