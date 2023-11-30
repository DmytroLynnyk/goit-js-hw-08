import { throttle } from 'throttle-debounce';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener('submit', onSubmit);

const throttleFunc = throttle(500, feedbackFormState => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

function onInput(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  const feedbackFormState = {
    email: email.value,
    message: message.value,
  };
  throttleFunc(feedbackFormState);
}

function onSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
}
