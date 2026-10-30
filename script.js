
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update copyright year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Search functionality
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const serviceCards = document.querySelectorAll(".custom-card");

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchValue = searchInput.value.trim().toLowerCase();

        let found = false;

        serviceCards.forEach(function (card) {

            const cardContent = card.textContent.toLowerCase();

            const cardColumn = card.closest(".col-md-6");

            if (cardContent.includes(searchValue)) {
                cardColumn.classList.remove("d-none");
                found = true;
            } else {
                cardColumn.classList.add("d-none");
            }

        });

        if (searchValue === "") {
            serviceCards.forEach(function (card) {
                card.closest(".col-md-6").classList.remove("d-none");
            });
        } else if (!found) {
            alert("No matching destinations found!");
        } else {
            document.getElementById("services").scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile navbar after search
        const navbarMenu = document.getElementById("navbarMenu");

        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
        }

    });

    // Reset search results when input is cleared
    searchInput.addEventListener("input", function () {

        if (searchInput.value.trim() === "") {

            serviceCards.forEach(function (card) {
                card.closest(".col-md-6").classList.remove("d-none");
            });

        }

    });

});
