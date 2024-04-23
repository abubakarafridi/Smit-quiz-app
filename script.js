function storeData() {
    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const section = document.getElementById('section').value;

    // Store data in session storage
    sessionStorage.setItem('rollNumber', rollNumber);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('batch', batch);
    sessionStorage.setItem('section', section);

    // Add a success message or redirect to another page here (optional)
    alert('Student details stored successfully!');

    window.location.href = "index2.html";

    // Prevent default form submission (optional, can be removed)
    return false;
  }