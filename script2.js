document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  evaluateQuiz(); // Evaluate the quiz
  window.location.href = "index3.html"; // Redirect to the results page
});
function evaluateQuiz() {
  const correctAnswers = {
    q1a: 'correct',
    q2a: 'correct',
    q3a: 'correct',
    q4a: 'correct',
    q5a: 'correct',
  };

  const quizForm = document.getElementById('quizForm');
  const formData = new FormData(quizForm);

  let totalMarks = 0;
  for (const entry of formData.entries()) {
    const [name, value] = entry;
    if (correctAnswers[name] === value) {
      totalMarks++;
    }
  }

  sessionStorage.setItem('totalMarks', totalMarks);
  return true; // Allow form submission to proceed
}
