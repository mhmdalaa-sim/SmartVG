// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Format the message for WhatsApp
        const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Your WhatsApp number
        const whatsappNumber = '01206151914';
        
        // Create NoContactApp URL
        const nocontactUrl = `https://nocontactapp.com/?number=${whatsappNumber}&message=${encodedMessage}`;
        
        // Open NoContactApp in a new tab
        window.open(nocontactUrl, '_blank');
        
        // Show success message
        alert('Thank you for your message! You will be redirected to send the message via WhatsApp.');
        contactForm.reset();
    });
}

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .service-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add CSS class for mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu.active {
            display: flex;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: var(--white);
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            align-items: center;
        }
        
        .nav-menu.active .nav-list {
            flex-direction: column;
            text-align: center;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .feature-card.animate,
        .service-card.animate {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}); 