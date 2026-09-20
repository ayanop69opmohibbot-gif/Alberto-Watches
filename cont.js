function reg(event) {
    
    var name = document.getElementById("intname").value;
    var email = document.getElementById("intemail").value;
    var msg = document.getElementById("intmsg").value;
    
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userMessage", msg);
    
    alert("Your data has been saved!");
    location.assign("index.html");
}
