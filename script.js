document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".navlist");

    if (!menuIcon || !navList) {
        console.error("Menu icon or nav list not found in the DOM.");
        return;
    }

    // Toggle visibility when menu icon is clicked
    menuIcon.addEventListener("click", function () {
        const isOpen = navList.classList.toggle("open");
        menuIcon.classList.toggle("bx-x", isOpen);
        menuIcon.setAttribute("aria-expanded", isOpen);  // Accessibility improvement
    });

    // Close navlist using event delegation (more efficient)
    navList.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navList.classList.remove("open");
            menuIcon.classList.remove("bx-x");
            menuIcon.setAttribute("aria-expanded", "false");
        }
    });
});
