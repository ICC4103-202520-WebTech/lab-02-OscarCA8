document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form-name").addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();

        if (name !== "") {
            document.getElementById("welcome-message").textContent = `Nice to meet you, ${name}.
    This is a personal website where I share information about myself, my interests/hobbies, skills and how you can see my projects.
    Without further ado, I hope you enjoy the website. Let's get started!`;
            document.getElementById("form-name").style.display = "none";
        }
    })
});
