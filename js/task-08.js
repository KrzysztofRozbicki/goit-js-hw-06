const emailEl = document.querySelector('input[type=email]');
const passwordEl = document.querySelector('input[type=password]');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const user = {
    email: emailEl.value,
    password: passwordEl.value,
  };
  if (user.email === '' || user.password === '')
    return alert('Wszystkie pola powinny zostać wypełnione!');

  console.log(user);
  event.currentTarget.reset();
}
