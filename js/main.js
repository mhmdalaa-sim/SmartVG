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

// Review Modal Functionality
const reviewModal = document.getElementById('reviewModal');
const openReviewForm = document.getElementById('openReviewForm');
const closeModal = document.querySelector('.close-modal');
const reviewForm = document.getElementById('reviewForm');

if (openReviewForm && reviewModal) {
    openReviewForm.addEventListener('click', () => {
        reviewModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        reviewModal.classList.remove('active');
    });

    // Close modal when clicking outside
    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            reviewModal.classList.remove('active');
        }
    });

    // Handle form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reviewForm);
        const reviewData = {
            name: formData.get('name'),
            review: formData.get('review'),
            rating: formData.get('rating')
        };

        // Here you would typically send the review data to your server
        console.log('Review submitted:', reviewData);
        
        // Show success message
        alert('Thank you for your review!');
        
        // Reset form and close modal
        reviewForm.reset();
        reviewModal.classList.remove('active');
    });
}

// Vertical Services Section Functionality
const servicesData = [
    {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-home',
        title: 'Smart Home Setup',
        desc: 'Integrated control systems for lighting, heating, air conditioning, curtains, and other smart devices for comfort and ease of use.',
        i18nTitle: 'smartHomeSetup',
        i18nDesc: 'smartHomeSetupDesc',
        features: [
            { i18n: 'centralizedControl', text: 'Centralized Control System' },
            { i18n: 'smartDeviceIntegration', text: 'Smart Device Integration' },
            { i18n: 'voiceControlSupport', text: 'Voice Control Support' },
            { i18n: 'mobileAppControl', text: 'Mobile App Control' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-shield-alt',
        title: 'Security & Monitoring',
        desc: 'Advanced solutions including CCTV installation and maintenance, video intercom systems, theft and fire alarms, and motion, gas, and water sensors for home and business protection.',
        i18nTitle: 'securitySystems',
        i18nDesc: 'securitySystemsDesc',
        features: [
            { i18n: 'cctvMonitoring', text: '24/7 CCTV Monitoring' },
            { i18n: 'smartMotionDetection', text: 'Smart Motion Detection' },
            { i18n: 'emergencyAlertSystem', text: 'Emergency Alert System' },
            { i18n: 'remoteAccessControl', text: 'Remote Access Control' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-lock',
        title: 'Smart Locks',
        desc: 'Modern security solutions through installation and maintenance of smart locks that enable easy and secure access control.',
        i18nTitle: 'smartLocks',
        i18nDesc: 'smartLocksDesc',
        features: [
            { i18n: 'biometricAccess', text: 'Biometric Access' },
            { i18n: 'remoteLocking', text: 'Remote Locking/Unlocking' },
            { i18n: 'accessHistoryTracking', text: 'Access History Tracking' },
            { i18n: 'emergencyOverride', text: 'Emergency Override' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-volume-up',
        title: 'Audio & Communication',
        desc: 'Installation of integrated sound systems (sound system) for homes and businesses, along with internal and external communication systems.',
        i18nTitle: 'audioSystems',
        i18nDesc: 'audioSystemsDesc',
        features: [
            { i18n: 'multiroomAudio', text: 'Multi-room Audio' },
            { i18n: 'voiceIntercomSystems', text: 'Voice Intercom Systems' },
            { i18n: 'smartSpeakerIntegration', text: 'Smart Speaker Integration' },
            { i18n: 'customSoundZones', text: 'Custom Sound Zones' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-network-wired',
        title: 'Computers & Networks',
        desc: 'Sale and maintenance of computers, networks, network amplifiers, and data centers using advanced technologies like MRT.',
        i18nTitle: 'computerNetworks',
        i18nDesc: 'computerNetworksDesc',
        features: [
            { i18n: 'networkInfrastructure', text: 'Network Infrastructure' },
            { i18n: 'dataCenterSolutions', text: 'Data Center Solutions' },
            { i18n: 'networkSecurity', text: 'Network Security' },
            { i18n: 'cloudIntegration', text: 'Cloud Integration' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-satellite',
        title: 'Satellite & Receivers',
        desc: 'Installation and maintenance of satellite dishes and receiver systems for an excellent viewing experience.',
        i18nTitle: 'satelliteSystems',
        i18nDesc: 'satelliteSystemsDesc',
        features: [
            { i18n: 'hdSatelliteInstallation', text: 'HD Satellite Installation' },
            { i18n: 'multiroomSetup', text: 'Multi-room Setup' },
            { i18n: 'signalOptimization', text: 'Signal Optimization' },
            { i18n: 'regularMaintenance', text: 'Regular Maintenance' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-solar-panel',
        title: 'Solar Solutions',
        desc: 'Installation of solar energy systems for sustainable and environmentally friendly electricity generation.',
        i18nTitle: 'solarSolutions',
        i18nDesc: 'solarSolutionsDesc',
        features: [
            { i18n: 'solarPanelInstallation', text: 'Solar Panel Installation' },
            { i18n: 'energyStorageSystems', text: 'Energy Storage Systems' },
            { i18n: 'gridIntegration', text: 'Grid Integration' },
            { i18n: 'maintenanceServices', text: 'Maintenance Services' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
        icon: 'fa-lightbulb',
        title: 'Smart Lighting',
        desc: 'Comprehensive smart lighting solutions including indoor and outdoor lighting, automatic lighting systems with motion sensors, and motion-activated stair lighting for innovative and efficient illumination in homes and offices.',
        i18nTitle: 'smartLighting',
        i18nDesc: 'smartLightingDesc',
        features: [
            { i18n: 'automatedLightingControl', text: 'Automated Lighting Control' },
            { i18n: 'motionSensorIntegration', text: 'Motion Sensor Integration' },
            { i18n: 'energyEfficientLED', text: 'Energy-efficient LED Solutions' },
            { i18n: 'customLightingScenes', text: 'Custom Lighting Scenes' }
        ]
    }
];

let currentServiceIndex = 0;

function renderVerticalService(direction) {
    const card = document.getElementById('verticalServiceCard');
    if (!card) return;
    card.classList.remove('fade-in');
    void card.offsetWidth; // trigger reflow for restart animation
    const lang = localStorage.getItem('language') || 'en';
    const s = servicesData[currentServiceIndex];
    card.innerHTML = `
        <div class="service-image">
            ${s.image ? `<img src="${s.image}" alt="${s.title}">` : ''}
            <div class="service-icon"><i class="fas ${s.icon}"></i></div>
        </div>
        <div class="service-content">
            <h3 data-i18n="${s.i18nTitle}">${translations[lang] && translations[lang][s.i18nTitle] ? translations[lang][s.i18nTitle] : s.title}</h3>
            <p data-i18n="${s.i18nDesc}">${translations[lang] && translations[lang][s.i18nDesc] ? translations[lang][s.i18nDesc] : s.desc}</p>
            ${s.features && s.features.length ? `<ul class="service-features-list">${s.features.map(f => `<li data-i18n="${f.i18n}">${translations[lang] && translations[lang][f.i18n] ? translations[lang][f.i18n] : f.text}</li>`).join('')}</ul>` : ''}
        </div>
    `;
    setTimeout(() => card.classList.add('fade-in'), 10);
}

const prevBtn = document.getElementById('servicePrevBtn');
const nextBtn = document.getElementById('serviceNextBtn');
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentServiceIndex = (currentServiceIndex - 1 + servicesData.length) % servicesData.length;
        renderVerticalService('prev');
    });
    nextBtn.addEventListener('click', () => {
        currentServiceIndex = (currentServiceIndex + 1) % servicesData.length;
        renderVerticalService('next');
    });
}
document.addEventListener('DOMContentLoaded', () => renderVerticalService());
document.addEventListener('languageChanged', () => renderVerticalService()); 