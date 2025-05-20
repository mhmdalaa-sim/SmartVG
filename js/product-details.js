// Product data with translations
const products = {
    'personal-loan': {
        title: {
            en: 'Personal Loan',
            ar: 'قرض شخصي'
        },
        description: {
            en: 'Flexible personal loans with competitive interest rates and easy repayment options. Perfect for any personal financial needs.',
            ar: 'قروض شخصية مرنة بأسعار فائدة تنافسية وخيارات سداد سهلة. مثالية لجميع احتياجاتك المالية الشخصية.'
        },
        price: {
            en: 'Starting from $5,000',
            ar: 'تبدأ من ٥٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        features: {
            en: [
                'Competitive interest rates',
                'Flexible repayment terms',
                'Quick approval process',
                'No prepayment penalties',
                'Online account management'
            ],
            ar: [
                'أسعار فائدة تنافسية',
                'شروط سداد مرنة',
                'عملية موافقة سريعة',
                'لا توجد غرامات سداد مبكر',
                'إدارة الحساب عبر الإنترنت'
            ]
        },
        requirements: {
            en: [
                'Minimum age: 21 years',
                'Stable income source',
                'Good credit history',
                'Valid ID proof',
                'Address proof'
            ],
            ar: [
                'الحد الأدنى للعمر: ٢١ سنة',
                'مصدر دخل مستقر',
                'سجل ائتماني جيد',
                'إثبات هوية ساري',
                'إثبات العنوان'
            ]
        }
    },
    'business-loan': {
        title: {
            en: 'Business Loan',
            ar: 'قرض تجاري'
        },
        description: {
            en: 'Grow your business with our comprehensive business loan solutions. Tailored financing options for businesses of all sizes.',
            ar: 'نمّ أعمالك مع حلول القروض التجارية الشاملة. خيارات تمويل مخصصة للشركات من جميع الأحجام.'
        },
        price: {
            en: 'Starting from $10,000',
            ar: 'تبدأ من ١٠٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        features: {
            en: [
                'Customized loan amounts',
                'Business advisory services',
                'Competitive interest rates',
                'Flexible repayment options',
                'Dedicated relationship manager'
            ],
            ar: [
                'مبالغ قروض مخصصة',
                'خدمات استشارية للأعمال',
                'أسعار فائدة تنافسية',
                'خيارات سداد مرنة',
                'مدير علاقات مخصص'
            ]
        },
        requirements: {
            en: [
                'Business registration proof',
                'Financial statements',
                'Business plan',
                'Tax returns',
                'Bank statements'
            ],
            ar: [
                'إثبات تسجيل الأعمال',
                'البيانات المالية',
                'خطة العمل',
                'الإقرارات الضريبية',
                'كشوف الحسابات المصرفية'
            ]
        }
    },
    'investment-plan': {
        title: {
            en: 'Investment Plan',
            ar: 'خطة استثمارية'
        },
        description: {
            en: 'Secure your future with our diverse investment options and expert guidance. Build wealth with professional portfolio management.',
            ar: 'احمِ مستقبلك مع خيارات استثمارية متنوعة وتوجيهات الخبراء. ابني ثروتك مع إدارة محفظة احترافية.'
        },
        price: {
            en: 'Minimum Investment $1,000',
            ar: 'الحد الأدنى للاستثمار ١٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop',
        features: {
            en: [
                'Diversified portfolio options',
                'Expert financial advice',
                'Regular performance reports',
                'Tax-efficient investments',
                'Flexible investment terms'
            ],
            ar: [
                'خيارات محفظة متنوعة',
                'نصائح مالية من الخبراء',
                'تقارير أداء منتظمة',
                'استثمارات فعالة ضريبياً',
                'شروط استثمار مرنة'
            ]
        },
        requirements: {
            en: [
                'Minimum age: 18 years',
                'Valid ID proof',
                'Bank account',
                'Risk assessment',
                'Investment goals'
            ],
            ar: [
                'الحد الأدنى للعمر: ١٨ سنة',
                'إثبات هوية ساري',
                'حساب بنكي',
                'تقييم المخاطر',
                'أهداف الاستثمار'
            ]
        }
    },
    'savings-account': {
        title: {
            en: 'Savings Account',
            ar: 'حساب توفير'
        },
        description: {
            en: 'High-yield savings accounts with flexible terms and competitive interest rates. Start saving for your future today.',
            ar: 'حسابات توفير عالية العائد بشروط مرنة وأسعار فائدة تنافسية. ابدأ في الادخار لمستقبلك اليوم.'
        },
        price: {
            en: 'No Minimum Balance',
            ar: 'لا يوجد حد أدنى للرصيد'
        },
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
        features: {
            en: [
                'High interest rates',
                'No monthly fees',
                'Online banking access',
                'Mobile app support',
                'ATM access'
            ],
            ar: [
                'أسعار فائدة عالية',
                'لا توجد رسوم شهرية',
                'الوصول إلى الخدمات المصرفية عبر الإنترنت',
                'دعم تطبيق الجوال',
                'الوصول إلى أجهزة الصراف الآلي'
            ]
        },
        requirements: {
            en: [
                'Valid ID proof',
                'Address proof',
                'Initial deposit',
                'Social security number',
                'Email address'
            ],
            ar: [
                'إثبات هوية ساري',
                'إثبات العنوان',
                'إيداع أولي',
                'رقم الضمان الاجتماعي',
                'عنوان البريد الإلكتروني'
            ]
        }
    },
    'mortgage-loan': {
        title: {
            en: 'Mortgage Loan',
            ar: 'قرض عقاري'
        },
        description: {
            en: 'Make your dream home a reality with our competitive mortgage rates. Flexible terms and expert guidance throughout the process.',
            ar: 'حقق حلم منزلك مع أسعار الرهن العقاري التنافسية. شروط مرنة وتوجيهات الخبراء طوال العملية.'
        },
        price: {
            en: 'Starting from $100,000',
            ar: 'تبدأ من ١٠٠٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        features: {
            en: [
                'Competitive interest rates',
                'Flexible loan terms',
                'Low down payment options',
                'Property insurance included',
                'Online application process'
            ],
            ar: [
                'أسعار فائدة تنافسية',
                'شروط قرض مرنة',
                'خيارات دفعة أولى منخفضة',
                'تأمين عقاري مشمول',
                'عملية تقديم طلب عبر الإنترنت'
            ]
        },
        requirements: {
            en: [
                'Minimum age: 21 years',
                'Stable income',
                'Good credit score',
                'Down payment',
                'Property documents'
            ],
            ar: [
                'الحد الأدنى للعمر: ٢١ سنة',
                'دخل مستقر',
                'درجة ائتمان جيدة',
                'دفعة أولى',
                'وثائق العقار'
            ]
        }
    },
    'car-loan': {
        title: {
            en: 'Car Loan',
            ar: 'قرض سيارة'
        },
        description: {
            en: 'Drive away in your dream car with our flexible auto financing options. Quick approval and competitive rates.',
            ar: 'اقتنِ سيارتك المفضلة مع خيارات تمويل السيارات المرنة. موافقة سريعة وأسعار تنافسية.'
        },
        price: {
            en: 'Starting from $15,000',
            ar: 'تبدأ من ١٥٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
        features: {
            en: [
                'Quick approval process',
                'Competitive interest rates',
                'Flexible repayment terms',
                'Insurance options',
                'Online account management'
            ],
            ar: [
                'عملية موافقة سريعة',
                'أسعار فائدة تنافسية',
                'شروط سداد مرنة',
                'خيارات التأمين',
                'إدارة الحساب عبر الإنترنت'
            ]
        },
        requirements: {
            en: [
                'Valid driver\'s license',
                'Stable income',
                'Good credit history',
                'Car details',
                'Insurance proof'
            ],
            ar: [
                'رخصة قيادة سارية',
                'دخل مستقر',
                'سجل ائتماني جيد',
                'تفاصيل السيارة',
                'إثبات التأمين'
            ]
        }
    },
    'credit-card': {
        title: {
            en: 'Credit Card',
            ar: 'بطاقة ائتمان'
        },
        description: {
            en: 'Enjoy exclusive benefits and rewards with our premium credit cards. Travel perks, cashback, and more.',
            ar: 'استمتع بمزايا ومكافآت حصرية مع بطاقات الائتمان المتميزة. مزايا السفر، استرداد النقود، والمزيد.'
        },
        price: {
            en: 'Annual Fee from $0',
            ar: 'رسوم سنوية تبدأ من ٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=400&fit=crop',
        features: {
            en: [
                'Reward points program',
                'Travel insurance',
                'Purchase protection',
                'Contactless payments',
                'Mobile app access'
            ],
            ar: [
                'برنامج نقاط المكافآت',
                'تأمين السفر',
                'حماية المشتريات',
                'مدفوعات بدون تلامس',
                'الوصول إلى تطبيق الجوال'
            ]
        },
        requirements: {
            en: [
                'Minimum age: 18 years',
                'Valid ID proof',
                'Income proof',
                'Good credit score',
                'Bank account'
            ],
            ar: [
                'الحد الأدنى للعمر: ١٨ سنة',
                'إثبات هوية ساري',
                'إثبات الدخل',
                'درجة ائتمان جيدة',
                'حساب بنكي'
            ]
        }
    },
    'insurance-plan': {
        title: {
            en: 'Insurance Plan',
            ar: 'خطة تأمين'
        },
        description: {
            en: 'Protect what matters most with our comprehensive insurance solutions. Coverage for life, health, and property.',
            ar: 'احمِ ما يهمك مع حلول التأمين الشاملة. تغطية للحياة والصحة والممتلكات.'
        },
        price: {
            en: 'Starting from $50/month',
            ar: 'تبدأ من ٥٠ دولار شهرياً'
        },
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
        features: {
            en: [
                'Comprehensive coverage',
                '24/7 customer support',
                'Easy claim process',
                'Flexible payment options',
                'Online policy management'
            ],
            ar: [
                'تغطية شاملة',
                'دعم العملاء على مدار الساعة',
                'عملية مطالبة سهلة',
                'خيارات دفع مرنة',
                'إدارة البوليصة عبر الإنترنت'
            ]
        },
        requirements: {
            en: [
                'Valid ID proof',
                'Age proof',
                'Medical history',
                'Income proof',
                'Address proof'
            ],
            ar: [
                'إثبات هوية ساري',
                'إثبات العمر',
                'السجل الطبي',
                'إثبات الدخل',
                'إثبات العنوان'
            ]
        }
    },
    'retirement-plan': {
        title: {
            en: 'Retirement Plan',
            ar: 'خطة تقاعد'
        },
        description: {
            en: 'Plan for a secure future with our retirement savings solutions. Expert guidance and flexible investment options.',
            ar: 'خطط لمستقبل آمن مع حلول الادخار للتقاعد. توجيهات الخبراء وخيارات استثمار مرنة.'
        },
        price: {
            en: 'Starting from $100/month',
            ar: 'تبدأ من ١٠٠ دولار شهرياً'
        },
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
        features: {
            en: [
                'Tax benefits',
                'Regular income options',
                'Investment flexibility',
                'Expert portfolio management',
                'Online account access'
            ],
            ar: [
                'مزايا ضريبية',
                'خيارات دخل منتظم',
                'مرونة الاستثمار',
                'إدارة محفظة من الخبراء',
                'الوصول إلى الحساب عبر الإنترنت'
            ]
        },
        requirements: {
            en: [
                'Minimum age: 18 years',
                'Valid ID proof',
                'Bank account',
                'Income proof',
                'Investment goals'
            ],
            ar: [
                'الحد الأدنى للعمر: ١٨ سنة',
                'إثبات هوية ساري',
                'حساب بنكي',
                'إثبات الدخل',
                'أهداف الاستثمار'
            ]
        }
    },
    'student-loan': {
        title: {
            en: 'Student Loan',
            ar: 'قرض طلابي'
        },
        description: {
            en: 'Invest in your education with our student-friendly loan options. Competitive rates and flexible repayment terms.',
            ar: 'استثمر في تعليمك مع خيارات القروض الطلابية. أسعار تنافسية وشروط سداد مرنة.'
        },
        price: {
            en: 'Starting from $5,000',
            ar: 'تبدأ من ٥٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
        features: {
            en: [
                'Low interest rates',
                'Deferred payment options',
                'No prepayment penalties',
                'Online account management',
                'Academic support'
            ],
            ar: [
                'أسعار فائدة منخفضة',
                'خيارات دفع مؤجل',
                'لا توجد غرامات سداد مبكر',
                'إدارة الحساب عبر الإنترنت',
                'دعم أكاديمي'
            ]
        },
        requirements: {
            en: [
                'Enrollment proof',
                'Academic records',
                'Valid ID proof',
                'Co-signer (if required)',
                'Income proof'
            ],
            ar: [
                'إثبات التسجيل',
                'السجلات الأكاديمية',
                'إثبات هوية ساري',
                'كفيل (إذا لزم الأمر)',
                'إثبات الدخل'
            ]
        }
    },
    'smart-home-package': {
        title: {
            en: 'Smart Home Package',
            ar: 'باقة المنزل الذكي'
        },
        description: {
            en: 'Transform your home into a smart living space with our comprehensive automation package. Control lighting, climate, security, and entertainment systems from anywhere using your smartphone.',
            ar: 'حول منزلك إلى مساحة معيشة ذكية مع باقة الأتمتة المتكاملة. تحكم في الإضاءة والمناخ والأمان وأنظمة الترفيه من أي مكان باستخدام هاتفك الذكي.'
        },
        price: {
            en: 'Starting from $2,000',
            ar: 'تبدأ من ٢٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'Smart lighting control',
                'Climate control system',
                'Security integration',
                'Voice control capability',
                'Mobile app control'
            ],
            ar: [
                'تحكم ذكي في الإضاءة',
                'نظام التحكم في المناخ',
                'تكامل الأمان',
                'قدرة التحكم الصوتي',
                'تحكم عبر تطبيق الجوال'
            ]
        },
        requirements: {
            en: [
                'Wi-Fi network',
                'Smartphone or tablet',
                'Power supply',
                'Compatible devices',
                'Internet connection'
            ],
            ar: [
                'شبكة واي فاي',
                'هاتف ذكي أو جهاز لوحي',
                'مصدر طاقة',
                'أجهزة متوافقة',
                'اتصال بالإنترنت'
            ]
        }
    },
    'security-system': {
        title: {
            en: 'Security System',
            ar: 'نظام الأمان'
        },
        description: {
            en: 'Protect your property with our advanced security system featuring high-resolution cameras, motion sensors, and 24/7 monitoring capabilities.',
            ar: 'احمِ ممتلكاتك مع نظام الأمان المتقدم الذي يتميز بكاميرات عالية الدقة وحساسات حركة وقدرات مراقبة على مدار الساعة.'
        },
        price: {
            en: 'Starting from $1,500',
            ar: 'تبدأ من ١٥٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'HD CCTV cameras',
                'Motion detection',
                'Night vision',
                'Mobile alerts',
                'Cloud storage'
            ],
            ar: [
                'كاميرات مراقبة عالية الدقة',
                'كشف الحركة',
                'رؤية ليلية',
                'تنبيهات على الجوال',
                'تخزين سحابي'
            ]
        },
        requirements: {
            en: [
                'Power supply',
                'Internet connection',
                'Storage space',
                'Mobile device',
                'Mounting locations'
            ],
            ar: [
                'مصدر طاقة',
                'اتصال بالإنترنت',
                'مساحة تخزين',
                'جهاز محمول',
                'مواقع التركيب'
            ]
        }
    },
    'smart-lock': {
        title: {
            en: 'Smart Lock',
            ar: 'قفل ذكي'
        },
        description: {
            en: 'Experience the future of home security with our Lezn Vega Smart Lock. Features include biometric access, mobile app control, and facial recognition technology.',
            ar: 'اختبر مستقبل أمان المنزل مع قفل ليزن فيجا الذكي. المميزات تشمل الوصول البيومتري والتحكم عبر تطبيق الجوال وتقنية التعرف على الوجه.'
        },
        price: {
            en: 'Starting from $300',
            ar: 'تبدأ من ٣٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'Fingerprint access',
                'Facial recognition',
                'Mobile app control',
                'Access history',
                'Auto-lock feature'
            ],
            ar: [
                'وصول بالبصمة',
                'التعرف على الوجه',
                'تحكم عبر تطبيق الجوال',
                'سجل الوصول',
                'ميزة القفل التلقائي'
            ]
        },
        requirements: {
            en: [
                'Standard door',
                'Smartphone',
                'Wi-Fi network',
                'Power supply',
                'Mobile app'
            ],
            ar: [
                'باب قياسي',
                'هاتف ذكي',
                'شبكة واي فاي',
                'مصدر طاقة',
                'تطبيق جوال'
            ]
        }
    },
    'audio-system': {
        title: {
            en: 'Audio System',
            ar: 'نظام صوتي'
        },
        description: {
            en: 'Immerse yourself in premium sound with our multi-room audio system. Enjoy wireless connectivity and seamless control throughout your space.',
            ar: 'انغمس في الصوت الفاخر مع نظام الصوت متعدد الغرف. استمتع بالاتصال اللاسلكي والتحكم السلس في جميع أنحاء مساحتك.'
        },
        price: {
            en: 'Starting from $800',
            ar: 'تبدأ من ٨٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'Multi-room audio',
                'Wireless connectivity',
                'Voice control',
                'High-quality sound',
                'Easy installation'
            ],
            ar: [
                'صوت متعدد الغرف',
                'اتصال لاسلكي',
                'تحكم صوتي',
                'صوت عالي الجودة',
                'تركيب سهل'
            ]
        },
        requirements: {
            en: [
                'Power outlets',
                'Wi-Fi network',
                'Speaker locations',
                'Mobile device',
                'Audio sources'
            ],
            ar: [
                'منافذ طاقة',
                'شبكة واي فاي',
                'مواقع السماعات',
                'جهاز محمول',
                'مصادر الصوت'
            ]
        }
    },
    'network-solution': {
        title: {
            en: 'Network Solution',
            ar: 'حل شبكات'
        },
        description: {
            en: 'Build a robust network infrastructure with our professional solution. Enjoy high-speed connectivity, enhanced security, and reliable performance.',
            ar: 'قم ببناء بنية تحتية شبكية قوية مع حلنا الاحترافي. استمتع باتصال عالي السرعة وأمان محسن وأداء موثوق.'
        },
        price: {
            en: 'Starting from $1,000',
            ar: 'تبدأ من ١٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'High-speed connectivity',
                'Network security',
                'Scalable solution',
                '24/7 monitoring',
                'Technical support'
            ],
            ar: [
                'اتصال عالي السرعة',
                'أمان الشبكة',
                'حل قابل للتطوير',
                'مراقبة على مدار الساعة',
                'دعم فني'
            ]
        },
        requirements: {
            en: [
                'Internet service',
                'Network devices',
                'Power supply',
                'Server space',
                'Security software'
            ],
            ar: [
                'خدمة إنترنت',
                'أجهزة شبكة',
                'مصدر طاقة',
                'مساحة خادم',
                'برنامج أمان'
            ]
        }
    },
    'satellite-system': {
        title: {
            en: 'Satellite System',
            ar: 'نظام أقمار صناعية'
        },
        description: {
            en: 'Experience premium entertainment with our complete satellite and TV system. Enjoy crystal-clear picture quality and access to a wide range of channels.',
            ar: 'استمتع بالترفيه الفاخر مع نظام الأقمار الصناعية والتلفزيون المتكامل. استمتع بجودة صورة واضحة والوصول إلى مجموعة واسعة من القنوات.'
        },
        price: {
            en: 'Starting from $400',
            ar: 'تبدأ من ٤٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'HD channels',
                'Multiple receivers',
                'Easy installation',
                'Signal strength',
                'Channel packages'
            ],
            ar: [
                'قنوات عالية الدقة',
                'مستقبلات متعددة',
                'تركيب سهل',
                'قوة الإشارة',
                'باقات القنوات'
            ]
        },
        requirements: {
            en: [
                'Clear sky view',
                'Power supply',
                'TV connection',
                'Mounting location',
                'Subscription'
            ],
            ar: [
                'رؤية واضحة للسماء',
                'مصدر طاقة',
                'اتصال تلفزيون',
                'موقع التركيب',
                'اشتراك'
            ]
        }
    },
    'solar-system': {
        title: {
            en: 'Solar System',
            ar: 'نظام طاقة شمسية'
        },
        description: {
            en: 'Harness the power of the sun with our efficient solar energy system. Reduce your carbon footprint and enjoy sustainable power generation.',
            ar: 'استغل قوة الشمس مع نظام الطاقة الشمسية الفعال. قلل من بصمتك الكربونية واستمتع بتوليد الطاقة المستدامة.'
        },
        price: {
            en: 'Starting from $3,000',
            ar: 'تبدأ من ٣٠٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'High-efficiency panels',
                'Battery storage',
                'Grid connection',
                'Monitoring system',
                'Warranty coverage'
            ],
            ar: [
                'ألواح عالية الكفاءة',
                'تخزين البطارية',
                'اتصال بالشبكة',
                'نظام مراقبة',
                'تغطية الضمان'
            ]
        },
        requirements: {
            en: [
                'Roof space',
                'Sun exposure',
                'Power needs',
                'Installation area',
                'Grid connection'
            ],
            ar: [
                'مساحة السقف',
                'تعرض للشمس',
                'احتياجات الطاقة',
                'منطقة التركيب',
                'اتصال بالشبكة'
            ]
        }
    },
    'smart-lighting': {
        title: {
            en: 'Smart Lighting',
            ar: 'إضاءة ذكية'
        },
        description: {
            en: 'Illuminate your space with our innovative smart lighting system. Control brightness, color, and scheduling through your smartphone or voice commands.',
            ar: 'أنر مساحتك مع نظام الإضاءة الذكي المبتكر. تحكم في السطوع واللون والجدولة من خلال هاتفك الذكي أو الأوامر الصوتية.'
        },
        price: {
            en: 'Starting from $600',
            ar: 'تبدأ من ٦٠٠ دولار'
        },
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
        features: {
            en: [
                'Color control',
                'Scheduling',
                'Motion sensors',
                'Energy saving',
                'Voice control'
            ],
            ar: [
                'تحكم في اللون',
                'جدولة',
                'حساسات حركة',
                'توفير الطاقة',
                'تحكم صوتي'
            ]
        },
        requirements: {
            en: [
                'Power supply',
                'Wi-Fi network',
                'Mobile device',
                'Light fixtures',
                'Installation space'
            ],
            ar: [
                'مصدر طاقة',
                'شبكة واي فاي',
                'جهاز محمول',
                'تركيبات الإضاءة',
                'مساحة التركيب'
            ]
        }
    }
};

// Function to load product details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const currentLang = localStorage.getItem('language') || 'en';

    if (!productId || !products[productId]) {
        window.location.href = 'products.html';
        return;
    }

    const product = products[productId];

    // Update page title
    document.title = `${product.title[currentLang]} - Banker`;

    // Update product details
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.title[currentLang];
    document.getElementById('productTitle').textContent = product.title[currentLang];
    document.getElementById('productPrice').textContent = product.price[currentLang];
    document.getElementById('productDescription').textContent = product.description[currentLang];

    // Update features
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = product.features[currentLang].map(feature => 
        `<li>${feature}</li>`
    ).join('');

    // Update requirements
    const requirementsList = document.getElementById('productRequirements');
    requirementsList.innerHTML = product.requirements[currentLang].map(requirement => 
        `<li>${requirement}</li>`
    ).join('');

    // Update WhatsApp message
    const whatsappButton = document.querySelector('.whatsapp-button');
    const message = currentLang === 'ar' 
        ? `مرحباً، أنا مهتم بـ ${product.title[currentLang]}`
        : `Hello, I am interested in ${product.title[currentLang]}`;
    whatsappButton.href = `https://wa.me/201206151914?text=${encodeURIComponent(message)}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadProductDetails);

// Update product details when language changes
document.addEventListener('languageChanged', loadProductDetails); 