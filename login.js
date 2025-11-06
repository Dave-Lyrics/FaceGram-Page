            function validateLogin() {
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                if (email === "david222@gmail.com" && password === "Dave_2508") 
                    {alert("Sign In Succesful")}
                else {
                    alert("Incorrect Username/Password")
            }
        }