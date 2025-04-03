// script.js
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }
    
    alert("Thank you for your feedback, " + name + "!");
    this.reset();
});
