document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Creating an object to store form data
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Printing form data to console
    console.log('Form Data Submitted:', formData);

    // Storing form data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Displaying a confirmation message
    alert('Thank you for your message. We will get back to you soon!');
    
    // Resetting the form
    this.reset();
});
