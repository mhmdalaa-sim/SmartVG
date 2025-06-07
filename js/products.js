// Product data with translations and categories
const products = [
    {
        id: 'smart-home-package',
        category: 'Smart Lightings',
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
        category: 'Security Cameras',
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
        category: 'Smart Locks',
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
        category: 'Sound Systems',
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
        category: 'Gateway Appliances',
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
        category: 'Home Appliances',
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
        category: 'Smart Plugs',
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
        category: 'Smart Lightings',
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
    },
    {
        id: 'wifi-router',
        category: 'Gateway Appliances',
        title: {
            en: 'WiFi Router',
            ar: 'راوتر واي فاي'
        },
        description: {
            en: 'High-speed WiFi router for home and office use.',
            ar: 'راوتر واي فاي عالي السرعة للاستخدام المنزلي والمكتبي.'
        },
        price: {
            en: 'Starting from $120',
            ar: 'تبدأ من ١٢٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop'
    },
    {
        id: 'solar-battery',
        category: 'Smart Plugs',
        title: {
            en: 'Solar Battery',
            ar: 'بطارية شمسية'
        },
        description: {
            en: 'Long-lasting battery for solar energy storage.',
            ar: 'بطارية طويلة العمر لتخزين الطاقة الشمسية.'
        },
        price: {
            en: 'Starting from $350',
            ar: 'تبدأ من ٣٥٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&h=400&fit=crop'
    },
    {
        id: 'doorbell-camera',
        category: 'Security Cameras',
        title: {
            en: 'Doorbell Camera',
            ar: 'كاميرا جرس الباب'
        },
        description: {
            en: 'Smart doorbell camera with mobile notifications.',
            ar: 'جرس باب ذكي مع كاميرا وإشعارات على الجوال.'
        },
        price: {
            en: 'Starting from $90',
            ar: 'تبدأ من ٩٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop'
    },
    {
        id: 'bluetooth-speaker',
        category: 'Sound Systems',
        title: {
            en: 'Bluetooth Speaker',
            ar: 'سماعة بلوتوث'
        },
        description: {
            en: 'Portable Bluetooth speaker with high-quality sound.',
            ar: 'سماعة بلوتوث محمولة بصوت عالي الجودة.'
        },
        price: {
            en: 'Starting from $60',
            ar: 'تبدأ من ٦٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop'
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

// Add button list filter logic
const categoryFilterList = document.getElementById('categoryFilterList');
let selectedCategory = 'all';

function renderCategoryFilter() {
    if (!categoryFilterList) return;
    const categories = [
        'Smart Locks',
        'Access Control',
        'Sound Systems',
        'EWE Link Products',
        'Tuya Products',
        'RF Sensors',
        'Security Cameras',
        'DIY Smart Switches',
        'Central Control Panel',
        'Gateway Appliances',
        'Smart Plugs',
        'Smart Lightings',
        'Accessories',
        'Smart Wall Switches',
        'Home Appliances'
    ];
    const lang = localStorage.getItem('language') || 'en';
    const categoryI18n = {
        'Smart Locks': 'categorySmartLocks',
        'Access Control': 'categoryAccessControl',
        'Sound Systems': 'categorySoundSystems',
        'EWE Link Products': 'categoryEWELink',
        'Tuya Products': 'categoryTuya',
        'RF Sensors': 'categoryRFSensors',
        'Security Cameras': 'categorySecurityCameras',
        'DIY Smart Switches': 'categoryDIYSwitches',
        'Central Control Panel': 'categoryControlPanel',
        'Gateway Appliances': 'categoryGateway',
        'Smart Plugs': 'categorySmartPlugs',
        'Smart Lightings': 'categorySmartLighting',
        'Accessories': 'categoryAccessories',
        'Smart Wall Switches': 'categoryWallSwitches',
        'Home Appliances': 'categoryHomeAppliances'
    };
    const allBtn = `<button class="category-filter-btn${selectedCategory === 'all' ? ' selected' : ''}" data-category="all">${translations[lang].allCategories || 'All Categories'}</button>`;
    const btns = categories.map(cat => {
        const label = translations[lang][categoryI18n[cat]] || cat;
        return `<button class="category-filter-btn${selectedCategory === cat ? ' selected' : ''}" data-category="${cat}">${label}</button>`;
    }).join('');
    categoryFilterList.innerHTML = allBtn + btns;
    // Add event listeners
    Array.from(categoryFilterList.querySelectorAll('.category-filter-btn')).forEach(btn => {
        btn.onclick = function() {
            selectedCategory = this.getAttribute('data-category');
            renderCategoryFilter();
            filterProducts();
        };
    });
}

function filterProducts() {
    const query = productSearchInput ? productSearchInput.value.trim().toLowerCase() : '';
    const currentLang = localStorage.getItem('language') || 'en';
    filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.title[currentLang].toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });
    currentPage = 1;
    displayProducts();
}

if (productSearchInput) {
    productSearchInput.addEventListener('input', function() {
        filterProducts();
    });
}

// Function to display products for current page
function displayProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    const currentLang = localStorage.getItem('language') || 'en';
    const productI18n = {
        'WiFi Router': 'wifiRouter',
        'Solar Battery': 'solarBattery',
        'Doorbell Camera': 'doorbellCamera',
        'Bluetooth Speaker': 'bluetoothSpeaker'
    };

    productsGrid.innerHTML = currentProducts.map((product, index) => {
        const actualIndex = startIndex + index;
        let title = product.title[currentLang];
        if (productI18n[product.title.en] && translations[currentLang][productI18n[product.title.en]]) {
            title = translations[currentLang][productI18n[product.title.en]];
        }
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${title}">
                </div>
                <div class="product-content">
                    <h3>${title}</h3>
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
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryFilter();
    filteredProducts = products;
    displayProducts();
});

// Update products when language changes
document.addEventListener('languageChanged', () => {
    displayProducts();
}); 