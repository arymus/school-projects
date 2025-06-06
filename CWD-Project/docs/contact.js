const user = document.getElementById("name");
const message = document.getElementById("message");
const submit = document.getElementById("send");
const form = document.querySelector(".form");
const formWrapper = document.querySelector(".formWrapper");

function sendEmail() {
    if (message.value === "" || user.value === "") {
        alert("Please fill out both fields.");
    } else {
        alert("You thought the email would send on it's own? Stop being lazy.");
        form.remove();
        const email = `${user.value}: ${message.value}`;
        const emailInput = document.createElement("p");
        emailInput.innerText = email;
        emailInput.classList.add("email");
        formWrapper.appendChild(emailInput);
        const anchor = document.createElement("a");
        anchor.innerText = "Email me";
        anchor.style.color = "blue";
        anchor.target = "_blank";
        anchor.href = "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZWQCxtpNVpXGnfnGzvtFBnFwZbVWxjPtfNlFfCHNWGtPdkQMQwwHbrkMxXMHtRNPVzdjB";
        formWrapper.appendChild(anchor);
    };
}

send.addEventListener("click", sendEmail);

