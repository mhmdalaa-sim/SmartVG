// Product data with translations and categories
const products = [
    {
        id: 'smart-lighting',
        category: 'Smart Lighting',
        title: {
            en: 'Smart Lighting Solutions',
            ar: 'حلول الإضاءة الذكية'
        },
        description: {
            en: 'Advanced smart lighting solutions for homes and businesses with automated control and energy efficiency.',
            ar: 'حلول إضاءة ذكية متقدمة للمنازل والشركات مع تحكم آلي وكفاءة في استهلاك الطاقة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Smart lighting.pdf'
    },
    {
        id: 'security-cameras',
        category: 'Security Cameras',
        title: {
            en: 'Security Camera Systems',
            ar: 'أنظمة كاميرات المراقبة'
        },
        description: {
            en: 'High-quality security camera systems with advanced features for complete surveillance.',
            ar: 'أنظمة كاميرات مراقبة عالية الجودة مع ميزات متقدمة للمراقبة الشاملة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Security Cameras.pdf'
    },
    {
        id: 'lzen-smart-locks',
        category: 'Smart Locks',
        title: {
            en: 'Lzen Smart Locks',
            ar: 'أقفال ليزن الذكية'
        },
        description: {
            en: 'Advanced smart lock systems with biometric access and mobile app control.',
            ar: 'أنظمة أقفال ذكية متقدمة مع وصول بيومتري وتحكم عبر تطبيق الجوال.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Smart Locks/Lzen smart locks.pdf'
    },
    {
        id: 'pnda-smart-locks',
        category: 'Smart Locks',
        title: {
            en: 'PNDA Smart Locks',
            ar: 'أقفال بندا الذكية'
        },
        description: {
            en: 'Professional smart lock systems with advanced security features.',
            ar: 'أنظمة أقفال ذكية احترافية مع ميزات أمان متقدمة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Smart Locks/PNDA smart locks.pdf'
    },
    {
        id: 'master-team-sound',
        category: 'Sound Systems',
        title: {
            en: 'Master Team Sound Systems',
            ar: 'أنظمة صوت ماستر تيم'
        },
        description: {
            en: 'Premium sound systems with multi-room audio and wireless connectivity.',
            ar: 'أنظمة صوتية فاخرة مع صوت متعدد الغرف واتصال لاسلكي.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Sound System/Master Team Q2 2025 Pricelist.pdf'
    },
    {
        id: 'sonoff-sound',
        category: 'Sound Systems',
        title: {
            en: 'Sonoff Surpass Sound System',
            ar: 'نظام صوت سونوف سيرباس'
        },
        description: {
            en: 'High-quality sound systems with advanced features and easy integration.',
            ar: 'أنظمة صوتية عالية الجودة مع ميزات متقدمة وتكامل سهل.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Sound System/Sonoff - Surpass Sound System.pdf'
    },
    {
        id: 'gateway-sensors',
        category: 'Gateway & Sensors',
        title: {
            en: 'Gateway & Sensor Solutions',
            ar: 'حلول البوابات والمستشعرات'
        },
        description: {
            en: 'Comprehensive gateway and sensor solutions for smart home automation.',
            ar: 'حلول شاملة للبوابات والمستشعرات لأتمتة المنزل الذكي.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Gatway & Sensors.pdf'
    },
    {
        id: 'home-appliances',
        category: 'Home Appliances',
        title: {
            en: 'Smart Home Appliances',
            ar: 'الأجهزة المنزلية الذكية'
        },
        description: {
            en: 'Smart home appliances for modern living with advanced features.',
            ar: 'أجهزة منزلية ذكية للحياة العصرية مع ميزات متقدمة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Home Appliances.pdf'
    },
    {
        id: 'smart-plugs',
        category: 'Smart Plugs',
        title: {
            en: 'Smart Plug Solutions',
            ar: 'حلول المقابس الذكية'
        },
        description: {
            en: 'Energy-efficient smart plugs for automated power control.',
            ar: 'مقابس ذكية موفرة للطاقة للتحكم الآلي في الطاقة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Smart Plugs.pdf'
    },
    {
        id: 'pnda-access-control',
        category: 'Access Control',
        title: {
            en: 'PNDA Access Control',
            ar: 'تحكم في الوصول بندا'
        },
        description: {
            en: 'Advanced access control systems for enhanced security.',
            ar: 'أنظمة تحكم متقدمة في الوصول لأمان محسن.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Access Control/PNDA- Access Control.pdf'
    },
    {
        id: 'sib-access-control',
        category: 'Access Control',
        title: {
            en: 'SIB Access Control',
            ar: 'تحكم في الوصول سيب'
        },
        description: {
            en: 'Professional access control systems with advanced features.',
            ar: 'أنظمة تحكم احترافية في الوصول مع ميزات متقدمة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Access Control/SIB Access Control.pdf'
    },
    {
        id: 'central-control',
        category: 'Central Control Panels',
        title: {
            en: 'Central Control Systems',
            ar: 'أنظمة التحكم المركزية'
        },
        description: {
            en: 'Centralized control panels for managing all smart home systems.',
            ar: 'لوحات تحكم مركزية لإدارة جميع أنظمة المنزل الذكي.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Central Control Panels.pdf'
    },
    {
        id: 'smart-switches',
        category: 'Smart Wall Switches',
        title: {
            en: 'Smart Wall Switches',
            ar: 'مفاتيح الحائط الذكية'
        },
        description: {
            en: 'Modern smart wall switches for automated lighting control.',
            ar: 'مفاتيح حائط ذكية حديثة للتحكم الآلي في الإضاءة.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Smart Wall Switches.pdf'
    },
    {
        id: 'diy-switches',
        category: 'DIY Smart Switches',
        title: {
            en: 'DIY Smart Switches',
            ar: 'مفاتيح ذكية للتركيب الذاتي'
        },
        description: {
            en: 'Easy-to-install DIY smart switches for home automation.',
            ar: 'مفاتيح ذكية سهلة التركيب للتركيب الذاتي لأتمتة المنزل.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/DIY Smart Switches.pdf'
    },
    {
        id: 'rf-sensors',
        category: 'RF Sensors',
        title: {
            en: 'RF Sensor Solutions',
            ar: 'حلول مستشعرات التردد اللاسلكي'
        },
        description: {
            en: 'Advanced RF sensors for smart home automation and control.',
            ar: 'مستشعرات تردد لاسلكي متقدمة لأتمتة المنزل الذكي والتحكم.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/RF Sensors.pdf'
    },
    {
        id: 'tuya-products',
        category: 'Tuya Products',
        title: {
            en: 'Tuya Smart Solutions',
            ar: 'حلول تويو الذكية'
        },
        description: {
            en: 'Comprehensive range of Tuya smart home products and solutions.',
            ar: 'مجموعة شاملة من منتجات وحلول تويو للمنزل الذكي.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Tuya Products.pdf'
    },
    {
        id: 'ewelink-products',
        category: 'Ewelink Products',
        title: {
            en: 'Ewelink Smart Solutions',
            ar: 'حلول إيولينك الذكية'
        },
        description: {
            en: 'Wide range of Ewelink smart home products and accessories.',
            ar: 'مجموعة واسعة من منتجات وإكسسوارات إيولينك للمنزل الذكي.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Ewelink Products.pdf'
    },
    {
        id: 'accessories',
        category: 'Accessories',
        title: {
            en: 'Smart Home Accessories',
            ar: 'إكسسوارات المنزل الذكي'
        },
        description: {
            en: 'Essential accessories and add-ons for your smart home system.',
            ar: 'إكسسوارات وإضافات أساسية لنظام المنزل الذكي الخاص بك.'
        },
        price: {
            en: 'Contact for Pricing',
            ar: 'اتصل للاستفسار عن الأسعار'
        },
        pdfLink: 'products/Accessories.pdf'
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

    productsGrid.innerHTML = currentProducts.map((product, index) => {
        const actualIndex = startIndex + index;
        const title = product.title[currentLang];
        return `
            <div class="product-card">
                <div class="product-content">
                    <h3>${title}</h3>
                    <p class="product-description">${product.description[currentLang]}</p>
                    <div class="product-price">${product.price[currentLang]}</div>
                    <a href="${product.pdfLink}" class="btn btn-primary" target="_blank" data-i18n="learnMore">${translations[currentLang].learnMore}</a>
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