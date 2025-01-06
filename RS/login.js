document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);

        fetch("login.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    messageDiv.innerHTML = `
                        <div id="popupMessage" class="popup">
                            <p>Welcome, ${data.name}!</p>
                            <button id="okButton">OK</button>
                        </div>
                    `;
                    const okButton = document.getElementById("okButton");
                    okButton.addEventListener("click", function () {
                        window.location.href = "home.html";
                    });
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => console.error("Error:", error));
    });
});
