// Simulate localStorage to store submissions
document.getElementById('design-poll').addEventListener('submit', function (e) {
  e.preventDefault();
  const choice = document.querySelector('input[name="design"]:checked').value;
  localStorage.setItem('design_poll', choice);
  alert('Thanks for voting on designs!');
});

document.getElementById('habit-poll').addEventListener('submit', function (e) {
  e.preventDefault();
  const choice = document.querySelector('input[name="habit"]:checked').value;
  localStorage.setItem('habit_poll', choice);
  alert('Thanks for voting on buying habits!');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  localStorage.setItem('email_signup', email);
  alert('Thanks for signing up! You’ll hear from us soon.');
});
