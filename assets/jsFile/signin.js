document.querySelector(".singinFormDivision").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const jsonData = Object.fromEntries(formData.entries());

    fetch("https://script.google.com/macros/s/AKfycbx9NMn8uwC1lpsCeY7715W86I-ip-RvaVAog97l51zFEexNDBQ0_aJUjPyF6KrmI6prNw/exec", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
    })
    .then(res => res.json())
    .then(data => {
        alert("Form submitted successfully!");
        this.reset();
    })
    .catch(err => {
        console.error(err);
        alert("Submission failed");
    });
});