document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const messageDiv = document.getElementById("message");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(signupForm);

        fetch("signup.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    messageDiv.innerHTML = `
                        <div id="popupMessage" class="popup">
                            <p>${data.message}</p>
                            <button id="okButton">OK</button>
                        </div>
                    `;
                    const okButton = document.getElementById("okButton");
                    okButton.addEventListener("click", function () {
                        window.location.href = "login.html";
                    });
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => console.error("Error:", error));
    });
});
