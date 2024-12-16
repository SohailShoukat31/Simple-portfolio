document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm") as HTMLFormElement;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert(`Thank you for your message, ${name}!`);
      contactForm.reset(); // Reset the form after submission
    }
  });
});
