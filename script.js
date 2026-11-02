/* ========================================================
   MANHATTAN SWEETS - JAVASCRIPT (Class Example Style)
   ======================================================== */

// 1. DYNAMIC ON-PAGE SEARCH & FILTER
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("pageSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();
            const items = document.querySelectorAll(".searchable-item");

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (query === "" || text.includes(query)) {
                    item.style.display = ""; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    }
});


// 2. ORDER NOW POP-UP MODAL
const orderBtn = document.querySelector(".order-btn");
const orderModal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const orderForm = document.getElementById("orderForm");

if (orderBtn && orderModal) {
    orderBtn.addEventListener("click", function () {
        orderModal.style.display = "block";
        if (orderForm) orderForm.reset();
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            orderModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === orderModal) {
            orderModal.style.display = "none";
        }
    });

    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you! Your order has been placed successfully.");
            orderModal.style.display = "none";
        });
    }
}


// 3. FORM VALIDATION (Matching Lecture Vibe)
const mainForm = document.getElementById("myForm") || document.getElementById("enquiryForm") || document.getElementById("contactForm");

if (mainForm) {
    mainForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors
        var nameError = document.getElementById("nameError") || document.getElementById("formError");
        var phoneError = document.getElementById("phoneError");
        var emailError = document.getElementById("emailError");
        var messageDisplay = document.getElementById("message");

        if (nameError) nameError.innerHTML = "";
        if (phoneError) phoneError.innerHTML = "";
        if (emailError) emailError.innerHTML = "";
        if (messageDisplay) messageDisplay.innerHTML = "";

        // Get form field values
        var customerName = document.getElementById("customerName") ? document.getElementById("customerName").value : "";
        var customerPhone = document.getElementById("customerPhone") ? document.getElementById("customerPhone").value : "";
        var customerEmail = document.getElementById("customerEmail") ? document.getElementById("customerEmail").value : "";

        // Name Validation
        if (customerName === "") {
            if (nameError) nameError.innerHTML = "Please enter your name.";
            return;
        }

        // Phone Validation (10 digits check)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(customerPhone)) {
            if (phoneError) {
                phoneError.innerHTML = "Please enter a valid 10-digit phone number.";
            } else {
                alert("Please enter a valid 10-digit phone number.");
            }
            return;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (customerEmail !== "" && !emailPattern.test(customerEmail)) {
            if (emailError) {
                emailError.innerHTML = "Please enter a valid email address.";
            } else {
                alert("Please enter a valid email address.");
            }
            return;
        }

        // Success Message (Like the lecture screenshot)
        if (messageDisplay) {
            messageDisplay.innerHTML = "Let's gooooooo!!!! Form submitted successfully!";
        } else {
            alert("Let's gooooooo!!!! Form submitted successfully!");
        }

        // Uncomment below to allow actual submission after checking
        // mainForm.submit();
    });
}