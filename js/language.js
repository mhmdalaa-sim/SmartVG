// Get the current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to switch language
function switchLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', newLang);
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    currentLang = newLang;
    // Update the language switcher button text
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.textContent = newLang === 'ar' ? 'English' : 'العربية';
    }
    // Dispatch languageChanged event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: newLang } }));
    updateLanguage();
}

// Function to update the page content
function updateLanguage() {
    // Update HTML direction
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });

    // Update language switcher text
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.textContent = translations[currentLang].switchToArabic;
    }

    // Update WhatsApp message
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');
    whatsappButtons.forEach(button => {
        const message = currentLang === 'ar' 
            ? 'مرحباً، لدي سؤال'
            : 'Hello, I have a question';
        button.href = `https://wa.me/201206151914?text=${encodeURIComponent(message)}`;
    });

    // Dispatch a custom event to notify other scripts about language change
    const event = new CustomEvent('languageChanged', {
        detail: { language: currentLang }
    });
    document.dispatchEvent(event);
}

// Always set language and direction on page load
window.addEventListener('DOMContentLoaded', function() {
    currentLang = localStorage.getItem('language') || 'en';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    updateLanguage();
    // Set initial button text on page load
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }
}); 