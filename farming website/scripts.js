// Form validation script
document.querySelector('form').addEventListener('submit', function(event) {
    // Get form elements
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');

    // Basic validation
    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Thank you for your message!');
    }
});

// Smooth scrolling script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image gallery script
function showImage(src) {
    document.getElementById('mainImage').src = src;
}

// Mobile menu toggle script
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Slideshow script
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Dynamic pricing script
function calculateTotal() {
    const pricePerUnit = 10; // Price per unit
    const quantity = document.getElementById('quantity').value;
    const totalPrice = pricePerUnit * quantity;
    document.getElementById('totalPrice').textContent = totalPrice;
}
