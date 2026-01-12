
// Select all the parent page divs
const pages = document.querySelectorAll(".blogsMainDivision > div");

// Controls
const prevBtn = document.querySelector(".blogsPrevPageButton");
const nextBtn = document.querySelector(".blogsNextPageButton");
const jumpInput = document.querySelector(".blogsPageSearchInput");

let currentIndex = 0; // start with first page

// Function to show only the active page
function showPage(index) {
pages.forEach((page, i) => {
    if (i === index) {
        page.style.display = "block";
    } else {
    page.style.display = "none";
    }
    
});
}

// Initial display
showPage(currentIndex);

// Next button
nextBtn.addEventListener("click", () => {
if (currentIndex >= pages.length - 1) {
    currentIndex = 0; // wrap to start
} else {
    currentIndex++;
}
showPage(currentIndex);
jumpInput.value = ""; // clear
});

// Prev button
prevBtn.addEventListener("click", () => {
if (currentIndex <= 0) {
    currentIndex = pages.length - 1; // wrap to last
} else {
    currentIndex--;
}
showPage(currentIndex);
jumpInput.value = ""; // clear
});

// Jump input (Enter after number)
jumpInput.addEventListener("change", () => {
const val = parseInt(jumpInput.value);
if (!isNaN(val) && val >= 1 && val <= pages.length) {
    currentIndex = val - 1;
    showPage(currentIndex);
} else {
    alert(`Please enter a number between 1 and ${pages.length}`);
}
});
