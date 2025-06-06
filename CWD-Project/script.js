const input = document.getElementById("input");
const enter = document.getElementById("enter");
const enterLink = document.getElementById("enterLink");
const hint = document.getElementById("hint");
const password = document.getElementById("password");
const view = document.getElementById("view");

function enterPassword() {
    if (input.value === "perrito" || input.value === "perrita") {
        enterLink.href ="main.html";
    } else if (input.value === "") {
        alert("Type in a password!")
    } else if (input.value === "password") {
        alert("Nice try.");
    } else {
        alert("Incorrect password! Try again :(");
    };
}

function getHint() {
    const hintArray = ["The spanish word for \"puppy\"!", "A young dog (in spanish)", "Someone who likes chew toys (in spanish)"];
    const randomNumber = Math.floor(Math.random() * 3);
    alert(hintArray[randomNumber]);
}

enter.addEventListener("click", enterPassword);
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enterPassword();
    };
});

hint.addEventListener("click", getHint);

password.addEventListener("click", function() {
    alert("Psst.. The password is \"perrito\" or \"perrita\"!");
});

view.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text";
    } else if (input.type === "text") {
        input.type = "password";
    };
});