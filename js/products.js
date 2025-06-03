// Product data with translations
const products = [
    {
        id: 'smart-home-package',
        title: {
            en: 'Smart Home Package',
            ar: 'باقة المنزل الذكي'
        },
        description: {
            en: 'Complete smart home automation package including lighting, climate control, and security systems.',
            ar: 'باقة متكاملة لأتمتة المنزل الذكي تشمل الإضاءة والتحكم في المناخ وأنظمة الأمان.'
        },
        price: {
            en: 'Starting from $2,000',
            ar: 'تبدأ من ٢٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'security-system',
        title: {
            en: 'Security System',
            ar: 'نظام الأمان'
        },
        description: {
            en: 'Advanced security system with CCTV cameras, motion sensors, and 24/7 monitoring.',
            ar: 'نظام أمان متقدم مع كاميرات مراقبة وحساسات حركة ومراقبة على مدار الساعة.'
        },
        price: {
            en: 'Starting from $1,500',
            ar: 'تبدأ من ١٥٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'smart-lock',
        title: {
            en: 'Smart Lock',
            ar: 'قفل ذكي'
        },
        description: {
            en: 'Lezn Vega Smart Lock with biometric access, mobile app control, and facial recognition.',
            ar: 'قفل ليزن فيجا الذكي مع وصول بيومتري وتحكم عبر تطبيق الجوال والتعرف على الوجه.'
        },
        price: {
            en: 'Starting from $300',
            ar: 'تبدأ من ٣٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'audio-system',
        title: {
            en: 'Audio System',
            ar: 'نظام صوتي'
        },
        description: {
            en: 'Premium sound system with multi-room audio and wireless connectivity.',
            ar: 'نظام صوتي فاخر مع صوت متعدد الغرف واتصال لاسلكي.'
        },
        price: {
            en: 'Starting from $800',
            ar: 'تبدأ من ٨٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'network-solution',
        title: {
            en: 'Network Solution',
            ar: 'حل شبكات'
        },
        description: {
            en: 'Professional network infrastructure with high-speed connectivity and security.',
            ar: 'بنية تحتية شبكية احترافية مع اتصال عالي السرعة وأمان.'
        },
        price: {
            en: 'Starting from $1,000',
            ar: 'تبدأ من ١٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'satellite-system',
        title: {
            en: 'Satellite System',
            ar: 'نظام أقمار صناعية'
        },
        description: {
            en: 'Complete satellite and TV system installation with premium channels.',
            ar: 'تركيب نظام أقمار صناعية وتلفزيون متكامل مع قنوات فاخرة.'
        },
        price: {
            en: 'Starting from $400',
            ar: 'تبدأ من ٤٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'solar-system',
        title: {
            en: 'Solar System',
            ar: 'نظام طاقة شمسية'
        },
        description: {
            en: 'Efficient solar energy system for sustainable power generation.',
            ar: 'نظام طاقة شمسية فعال لتوليد الطاقة المستدامة.'
        },
        price: {
            en: 'Starting from $3,000',
            ar: 'تبدأ من ٣٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    },
    {
        id: 'smart-lighting',
        title: {
            en: 'Smart Lighting',
            ar: 'إضاءة ذكية'
        },
        description: {
            en: 'Innovative lighting system with automated control and energy efficiency.',
            ar: 'نظام إضاءة مبتكر مع تحكم آلي وكفاءة في استهلاك الطاقة.'
        },
        price: {
            en: 'Starting from $600',
            ar: 'تبدأ من ٦٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop'
    }
];

// Pagination settings
const itemsPerPage = 8;
let currentPage = 1;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');

// Calculate total pages
const totalPages = Math.ceil(products.length / itemsPerPage);

let filteredProducts = products;

// Search functionality
const productSearchInput = document.getElementById('productSearchInput');
if (productSearchInput) {
    productSearchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        const currentLang = localStorage.getItem('language') || 'en';
        filteredProducts = products.filter(product =>
            product.title[currentLang].toLowerCase().includes(query)
        );
        currentPage = 1;
        displayProducts();
    });
}

// Function to display products for current page
function displayProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    const currentLang = localStorage.getItem('language') || 'en';

    productsGrid.innerHTML = currentProducts.map((product, index) => {
        const actualIndex = startIndex + index;
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title[currentLang]}">
                </div>
                <div class="product-content">
                    <h3>${product.title[currentLang]}</h3>
                    <p class="product-description">${product.description[currentLang]}</p>
                    <div class="product-price">${product.price[currentLang]}</div>
                    <a href="product-details.html?id=${product.id}" class="btn btn-primary" data-i18n="learnMore">${translations[currentLang].learnMore}</a>
                </div>
            </div>
        `;
    }).join('');

    // Update pagination buttons
    const totalFilteredPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalFilteredPages;

    // Update page numbers
    updatePageNumbers(totalFilteredPages);
}

// Function to update page numbers
function updatePageNumbers(totalFilteredPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1) {
    const currentLang = localStorage.getItem('language') || 'en';
    let pageNumbersHTML = '';
    
    // Always show first page
    pageNumbersHTML += `<span class="page-number ${currentPage === 1 ? 'active' : ''}" data-page="1">1</span>`;
    
    // Show ellipsis if needed
    if (currentPage > 3) {
        pageNumbersHTML += '<span class="page-number">...</span>';
    }
    
    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalFilteredPages - 1, currentPage + 1); i++) {
        pageNumbersHTML += `<span class="page-number ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</span>`;
    }
    
    // Show ellipsis if needed
    if (currentPage < totalFilteredPages - 2) {
        pageNumbersHTML += '<span class="page-number">...</span>';
    }
    
    // Always show last page if there's more than one page
    if (totalFilteredPages > 1) {
        pageNumbersHTML += `<span class="page-number ${currentPage === totalFilteredPages ? 'active' : ''}" data-page="${totalFilteredPages}">${totalFilteredPages}</span>`;
    }
    
    pageNumbers.innerHTML = pageNumbersHTML;
}

// Event Listeners
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

nextPageBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
    }
});

pageNumbers.addEventListener('click', (e) => {
    if (e.target.classList.contains('page-number') && !e.target.classList.contains('active')) {
        const page = parseInt(e.target.dataset.page);
        if (!isNaN(page)) {
            currentPage = page;
            displayProducts();
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', displayProducts);

// Update products when language changes
document.addEventListener('languageChanged', () => {
    displayProducts();
}); 