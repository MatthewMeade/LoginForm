var inputs = document.getElementsByClassName("animInput");
var labels = document.getElementsByClassName("animLabel");



for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function(event, index) {
        if (this.value != "") {
            document.getElementById(this.name + "Label").className = "entered animLabel";
        } else {
            document.getElementById(this.name + "Label").className = "blank animLabel";
        }
    }, true);
}

var form = document.getElementById("loginForm");
form.reset();

form.addEventListener("submit", function(e) {
    if (document.getElementById("password").value == "password") {
        warning.className = "warning";
        LogIn();
    } else {
        PasswordError()
    }

    e.preventDefault();

}, false);

var warning = document.getElementById("passwordWarning");

function PasswordError() {
    warning.className = "warning active"
}

var emailSpan = document.getElementById("welcomeEmail");
var emailInput = document.getElementById("email")

var welcome = document.getElementById("welcome");

function LogIn() {
    form.className = "loggedIn";
    welcome.className = "loggedIn";
    emailSpan.innerHTML = emailInput.value;
}

var logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function(e) {
    warning.className = "warning"
        // alert('logging out');
    form.className = "";
    welcome.className = "";
    form.reset();

    document.getElementById("emailLabel").className = "blank animLabel";
    document.getElementById("passwordLabel").className = "blank animLabel";
    e.preventDefault();
});