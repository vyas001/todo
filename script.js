document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
   
    if (username === "admin" && password === "12345") {
      document.getElementById("message").textContent = "Login successful!";
      
      window.location.href = "main.html";
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  });
  
  document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault(); 
  
    
    window.location.href = "index.html";
    
  });

 