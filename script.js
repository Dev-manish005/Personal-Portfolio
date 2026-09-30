
/* ========================================
   PORTFOLIO JAVASCRIPT
======================================== */


/* ========================================
   WAIT FOR HTML TO LOAD
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio JavaScript loaded successfully!");


    /* ========================================
       GET HTML ELEMENTS
    ======================================== */

    const contactForm = document.getElementById("contactForm");

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");

    const themeToggle = document.getElementById("themeToggle");

    const profileImage = document.getElementById("profileImage");

    const imageModal = document.getElementById("imageModal");

    const modalClose = document.getElementById("modalClose");

    const modalImage = document.getElementById("modalImage");

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = document.querySelectorAll("main section");

    const availabilityStatus =
        document.getElementById("availabilityStatus");


    /* ========================================
       1. DARK MODE
    ======================================== */

    function updateThemeIcon() {

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

        } else {

            themeToggle.textContent = "🌙";

        }

    }


    function toggleDarkMode() {

        document.body.classList.toggle("dark-mode");

        const isDarkMode =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "darkMode",
            isDarkMode
        );


        updateThemeIcon();

    }


    function loadSavedTheme() {

        const savedTheme =
            localStorage.getItem("darkMode");


        if (savedTheme === "true") {

            document.body.classList.add("dark-mode");

        }


        updateThemeIcon();

    }


    themeToggle.addEventListener(
        "click",
        toggleDarkMode
    );


    loadSavedTheme();


    /* ========================================
       2. FORM VALIDATION FUNCTIONS
    ======================================== */


    function showError(input, errorElement, message) {

        input.classList.add("error");

        input.classList.remove("success");

        errorElement.textContent = message;

    }


    function showSuccess(input, errorElement) {

        input.classList.remove("error");

        input.classList.add("success");

        errorElement.textContent = "";

    }


    function validateEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }


    function validateName() {

        const name = nameInput.value.trim();


        if (name === "") {

            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;
        }


        if (name.length < 2) {

            showError(
                nameInput,
                nameError,
                "Name must contain at least 2 characters."
            );

            return false;
        }


        showSuccess(
            nameInput,
            nameError
        );

        return true;

    }


    function validateEmailField() {

        const email = emailInput.value.trim();


        if (email === "") {

            showError(
                emailInput,
                emailError,
                "Please enter your email."
            );

            return false;
        }


        if (!validateEmail(email)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;
        }


        showSuccess(
            emailInput,
            emailError
        );

        return true;

    }


    function validateMessage() {

        const message =
            messageInput.value.trim();


        if (message === "") {

            showError(
                messageInput,
                messageError,
                "Please enter a message."
            );

            return false;
        }


        if (message.length < 10) {

            showError(
                messageInput,
                messageError,
                "Message must contain at least 10 characters."
            );

            return false;
        }


        showSuccess(
            messageInput,
            messageError
        );

        return true;

    }


    /* ========================================
       3. FORM SUBMISSION
    ======================================== */

    function validateForm(event) {

        event.preventDefault();


        const validName =
            validateName();

        const validEmail =
            validateEmailField();

        const validMessage =
            validateMessage();


        if (
            validName &&
            validEmail &&
            validMessage
        ) {

            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";


            contactForm.reset();


            nameInput.classList.remove("success");

            emailInput.classList.remove("success");

            messageInput.classList.remove("success");

        } else {

            successMessage.textContent = "";

        }

    }


    contactForm.addEventListener(
        "submit",
        validateForm
    );


    /* ========================================
       4. REAL-TIME FORM VALIDATION
    ======================================== */

    nameInput.addEventListener(
        "input",
        function () {

            validateName();

            successMessage.textContent = "";

        }
    );


    emailInput.addEventListener(
        "input",
        function () {

            validateEmailField();

            successMessage.textContent = "";

        }
    );


    messageInput.addEventListener(
        "input",
        function () {

            validateMessage();

            successMessage.textContent = "";

        }
    );


    /* ========================================
       5. PROFILE IMAGE MODAL
    ======================================== */

    function openImageModal() {

        imageModal.classList.add("show");

        modalImage.src =
            profileImage.src;

    }


    function closeImageModal() {

        imageModal.classList.remove("show");

    }


    profileImage.addEventListener(
        "click",
        openImageModal
    );


    modalClose.addEventListener(
        "click",
        closeImageModal
    );


    imageModal.addEventListener(
        "click",
        function (event) {

            if (event.target === imageModal) {

                closeImageModal();

            }

        }
    );


    /* ========================================
       6. KEYBOARD ESCAPE FOR MODAL
    ======================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeImageModal();

            }

        }
    );


    /* ========================================
       7. ACTIVE NAVIGATION ON SCROLL
    ======================================== */

    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.clientHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* ========================================
       8. DYNAMIC AVAILABILITY MESSAGE
    ======================================== */

    function updateAvailabilityStatus() {

        const currentHour =
            new Date().getHours();


        if (
            currentHour >= 9 &&
            currentHour < 18
        ) {

            availabilityStatus.textContent =
                "Available for opportunities";

        } else {

            availabilityStatus.textContent =
                "Open to opportunities";

        }

    }


    updateAvailabilityStatus();


    /* ========================================
       END
    ======================================== */

});

