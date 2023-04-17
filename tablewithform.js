function addRow() {
    // Prevent form submission
    event.preventDefault();
  
    // Get input values
    var name = document.getElementById("name").value;
    var challenge = document.getElementById("challenge").value;
    var email = document.getElementById("email").value;
  
    // Create new row
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var challengeCell = row.insertCell(1);
    var emailCell = row.insertCell(2);
    nameCell.innerHTML = name;
    challengeCell.innerHTML = challenge;
    emailCell.innerHTML = email;
  
    // Clear form input
    document.getElementById("name").value = "";
    document.getElementById("challenge").value = "";
    document.getElementById("email").value = "";
  }
  