// Mobile menu toggle
const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// Only run if menu exists (to avoid errors on pages without mobile menu)
if (menu && navLinks) {
    menu.addEventListener("click", function(){
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Donate form handling
const donateForm = document.getElementById('donateForm');
if (donateForm) {
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        
        // Check if amount is selected
        const selectedAmount = document.querySelector('input[name="amount"]:checked');
        const otherAmount = document.getElementById('otherAmount').value;
        
        if (name && email && (selectedAmount || otherAmount)) {
            alert('Thank you for your generous donation! You will be redirected to payment.');
            // Here you would normally redirect to payment gateway
        } else {
            alert('Please fill in all required fields and select a donation amount.');
        }
    });
}

// Add active class to current page in navigation
const currentLocation = window.location.pathname;
const navLinks_all = document.querySelectorAll('.nav-links a');

navLinks_all.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Handle homepage
    if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
        if (linkPath === 'index.html' || linkPath === '/') {
            link.classList.add('active');
        }
    } 
    // Handle other pages
    else if (currentLocation.includes(linkPath) && linkPath !== 'index.html' && linkPath !== '/') {
        link.classList.add('active');
    }
});