const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Wszystkie pola powinny zostać wypełnione!');
  } else console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
