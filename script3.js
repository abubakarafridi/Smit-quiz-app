document.addEventListener('DOMContentLoaded', function() {
    const rollNumber = sessionStorage.getItem('rollNumber');
    const name = sessionStorage.getItem('name');
    const batch = sessionStorage.getItem('batch');
    const section = sessionStorage.getItem('section');
    const totalMarks = sessionStorage.getItem('totalMarks');

    document.getElementById('rollNumber').textContent = rollNumber;
    document.getElementById('name').textContent = name;
    document.getElementById('batch').textContent = batch;
    document.getElementById('section').textContent = section;
    document.getElementById('totalMarks').textContent = totalMarks;
});
