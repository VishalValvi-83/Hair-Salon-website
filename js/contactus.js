document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    console.log('Form Data Submitted:', formData);

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    alert('Thank you for your message. We will get back to you soon!');
    
    this.reset();
});
