const form = document.getElementById('appointmentForm');

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const date = document.getElementById('date');
  const time = document.getElementById('time');

  if (name.value === '') {
    alert('Name is required.');
    return;
  }

  if (email.value === '') {
    alert('Email is required.');
    return;
  }

  if (phone.value === '') {
    alert('Phone number is required.');
    return;
  }

  if (date.value === '') {
    alert('Appointment date is required.');
    return;
  }

  if (time.value === '') {
    alert('Appointment time is required.');
    return;
  }

  form.submit();
});