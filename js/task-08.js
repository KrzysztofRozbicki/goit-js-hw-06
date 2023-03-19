const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const user = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (user.email === '' || user.password === '')
    return alert('Wszystkie pola powinny zostać wypełnione!');

  console.log(user);
  event.currentTarget.reset();
}
