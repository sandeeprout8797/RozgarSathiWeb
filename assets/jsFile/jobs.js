const pages = document.querySelectorAll(".blogsMainBoxParentDivision > div");
const prevBtn = document.querySelector(".blogsPrevPageButton");
const nextBtn = document.querySelector(".blogsNextPageButton");
const jumpInput = document.querySelector(".blogsPageSearchInput");

let currentIndex = 0;
const totalPages = pages.length;

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.display = "grid"; 
        } else {
            page.style.display = "none"; 
        }
    });
}

showPage(currentIndex);

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalPages - 1) {
        currentIndex++;
        showPage(currentIndex);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showPage(currentIndex);
    }
});

jumpInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const pageNumber = parseInt(jumpInput.value, 10);

        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
            currentIndex = pageNumber - 1; 
            showPage(currentIndex);
        } else {
            alert(`Please enter a number between 1 and ${totalPages}`);
        }

        jumpInput.value = "";
    }
});
