document.querySelectorAll('.faq-question').forEach((q) => {
    q.addEventListener('click', () => {
        // close others
        document.querySelectorAll('.faq-question').forEach((btn) => {
        if (btn !== q) {
            btn.classList.remove('active');
            btn.nextElementSibling.style.maxHeight = null;
        }
        });

        // toggle clicked
        q.classList.toggle('active');
        const ans = q.nextElementSibling;
        if (ans.style.maxHeight) {
        ans.style.maxHeight = null;
        } else {
        ans.style.maxHeight = ans.scrollHeight + "px";
        }
    });
});

const menuButton = document.querySelector(".menuButton");
const navigationMenu = document.querySelector(".navigationButtonDivision");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navigationMenu.classList.toggle("active");
});


window.addEventListener("load", function () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
        alert("Mobile screen");
    } else if (screenWidth <= 768) {
        alert("Tablet screen");
    } else {
        alert("Desktop screen");
    }
});

