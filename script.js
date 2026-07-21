// ===============================
// Mobile Navigation
// ===============================

console.log("Script Loaded");

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ===============================
// Dark Mode Toggle
// ===============================

const darkBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


 

      
   // ===============================
// SHOPPING CART
// ===============================

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartCounter = document.getElementById("cart-count");
const cartIcon = document.querySelector(".cart");
const cartSidebar = document.getElementById("cartSidebar");
const cartContainer = document.getElementById("cartItems");
const closeCart = document.getElementById("closeCart");
const clearCart = document.getElementById("clearCart");

// Update counter
function updateCartCount() {
    if (cartCounter) {
        cartCounter.textContent = cartItems.length;
    }
}

// Render cart items
function renderCart() {

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.forEach((item, index) => {

        cartContainer.innerHTML += `
            <div class="cart-item">
                <h4>Order ${index + 1}</h4>
                <p><strong>${item.name}</strong></p>
                <p>${item.price}</p>
            </div>
        `;

    });

}

// Initial load
updateCartCount();
renderCart();

// Add to cart
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.closest(".menu-card") ||
            button.closest(".card");

        if (!product) return;

        const name = product.querySelector("h3").textContent;

        let price = "";

        if (product.querySelector(".price")) {
            price = product.querySelector(".price").textContent;
        } else {
            price = product.querySelector("h4").textContent;
        }

        cartItems.push({
            name,
            price
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        updateCartCount();
        renderCart();

    });

});

// Open cart
if (cartIcon && cartSidebar) {

    cartIcon.addEventListener("click", () => {

        renderCart();

        cartSidebar.classList.add("active");

    });

}

// Close cart
if (closeCart && cartSidebar) {

    closeCart.addEventListener("click", () => {

        cartSidebar.classList.remove("active");

    });

}

// Clear cart
if (clearCart) {

    clearCart.addEventListener("click", () => {

        cartItems = [];

        localStorage.removeItem("cartItems");

        updateCartCount();

        renderCart();

    });

}
const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cartItems.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        window.location.href = "checkout.html";

    });

}

// ===============================
// Menu Search
// ===============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".menu-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}

// ===============================
// Menu Category Filter
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        document.querySelectorAll(".menu-card").forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!name) {
            alert("Please enter your name");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Enter a valid 10-digit phone number");
            return;
        }

        if (!message) {
            alert("Please enter your message");
            return;
        }

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

// ===============================
// Hero Background Slider
// ===============================

//const hero = document.querySelector(".hero");

//if (hero) {

//     const images = [
//         "images/hero.jpg",
//         "images/hero2.jpg",
//         "images/hero3.jpg"
//     ];

//     let index = 0;

//     setInterval(() => {

//         index = (index + 1) % images.length;

//         hero.style.background =
//             `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
//             url('${images[index]}') center/cover`;

//     }, 4000);

// }

// ===============================
// Newsletter
// ===============================

const newsletter = document.querySelector(".newsletter form");

if (newsletter) {

    newsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}

// ===============================
// Active Navigation
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.href === window.location.href) {
        link.classList.add("active");
    }

});

// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card, .menu-card, .testimonial, .review-card")
.forEach(el => observer.observe(el));