document.addEventListener('DOMContentLoaded', () => {

    // Глобальні елементи
    const BODY = document.body;
    const HEADER = document.querySelector('.header');
    
    // ====================================================================
    // 1. Localization (Language Switcher)
    // ====================================================================
    const translations = {
        'ua': {
            // META & SEO
            'meta-title': 'TOPAL BARBER | Майстер стилю Валентини Топал в Брно',
            'meta-description': 'TOPAL BARBER - професійні чоловічі стрижки, фейди та оформлення бороди в Брно (Чехія). Майстер Валентина з 10+ роками досвіду. Запишись онлайн!',
            'meta-og-title': 'TOPAL BARBER | Твій ідеальний стиль у Брно',

            // NAVIGATION & CTA
            'nav-services': 'Послуги',
            'nav-reviews': 'Відгуки', // NEW
            'nav-about': 'Про мене',
            'nav-portfolio': 'Портфоліо',
            'nav-contact': 'Запис',
            'btn-book': 'ЗАПИСАТИСЯ',
            'btn-book-online': 'Записатися Онлайн',
            'hero-title': 'TOPAL BARBER<br> <span class="highlight">Твій ідеальний стиль</span> у Brno',
            'hero-subtitle': 'Стрижки, що підкреслюють індивідуальність. Професіоналізм, якому можна довіряти.',

            // REVIEWS
            'reviews-sub': 'Свідчення клієнтів', // NEW
            'reviews-title': 'Що кажуть про TOPAL BARBER', // NEW
            'review-name-1': 'Катя ', // NEW
            'review-text-1': 'Найкращий барбер у Брно. Кожен раз ідеально. Валентина завжди уважна до моїх побажань і пропонує круті ідеї. Якість стрижки завжди на висоті. Рекомендую всім!', // NEW
            'review-name-2': 'Андрій ', // NEW
            'review-text-2': 'Vynikající servis a skvělý fade. Paní Valentina je profesionálka, která знає, що робить. Приємне оточення і завжди відходжу максимально задоволений. Обов\'язково повернусь!', // NEW (Переклав чеський відгук на українську, щоб відповідати українському інтерфейсу)
            'review-name-3': 'Юлія ', // NEW
            'review-text-3': 'Стрижусь тут вже більше року. Жодного разу не було претензій. Пунктуальність, якість, ідеальна чистота ліній. Відчувається професійний підхід і любов до своєї справи. 5 зірок!', // NEW
            'reviews-btn': 'Більше відгуків', // NEW

            // SERVICES
            'price-sub': 'Прайс-лист 2025',
            'price-title': 'Професійні Послуги та Атмосфера',
            'btn-choose-time': 'Обрати час',
            'price-service-1-name': 'Чоловіча стрижка машинкою (однією насадкою)',
            'price-service-1-desc': 'Консультація, миття голови, стрижка та укладка. Класика, що завжди актуальна.',
            'price-service-2-name': 'Чоловіча стрижка машинкою на сухе волосся',
            'price-service-2-desc': 'Повний комплекс послуг: ідеальна стрижка та професійний догляд за волоссям.',
            'price-service-3-name': 'Чоловіча комбінована стрижка',
            'price-service-3-desc': 'Швидко, комфортно та стильно. З повагою до клієнтів.',
            'price-service-4-name': 'Чоловіча стрижка "Комплекс" (миття,стрижка,укладка,стайлінг)',
            'price-service-4-desc': 'Гарячий компрес, догляд за волоссям миття голови, стрижка та укладка.',
            'price-service-5-name': 'Чоловіча стрижка довгого волосся',
            'price-service-5-desc': 'Гарячий компрес, догляд за волоссям миття голови, стрижка та укладка.',
            'price-service-6-name': 'Оформлення бороди',
            'price-service-6-desc': 'Швидко, комфортно та стильно. З повагою до клієнтів.',
            // ДОДАНО: Камуфляж
            'price-service-7-name': 'Камуфляж волосся',
            'price-service-7-desc': 'Швидко, комфортно та стильно. З повагою до клієнтів.',
            'price-service-8-name': 'Камуфляж бороди',
            'price-service-8-desc': 'Швидко, комфортно та стильно. З повагою до клієнтів.',

            // ABOUT
            'about-sub': 'Topal Barber',
            'about-master-title': 'Валентина: Майстер твого стилю та довіри',
            'about-text-1': 'Більше 10 років я присвячую себе мистецтву чоловічих стрижок. Я не просто стрижу, я створюю образ, який ідеально підходить саме тобі. У моїй роботі головне — це якість, увага до деталей та комфортна атмосфера. Я гарантую, що ти вийдеш від мене не лише з ідеальною стрижкою, але й з чудовим настроєм.',
            'about-stat-years': 'Років досвіду',
            'about-stat-clients': 'Задоволених клієнтів',
            'about-btn-insta': 'Мій Instagram',

            // PORTFOLIO
            'portfolio-title': 'Портфоліо та Відео',
            'portfolio-video-title': 'Останні роботи з Instagram Reels',
            'portfolio-btn': 'Більше відео',

            // CONTACT
            'contact-sub': 'Запис онлайн',
            'contact-title': 'Забронювати візит',
            'contact-intro': 'Оберіть зручний час і послугу. Я зателефоную вам для підтвердження деталей запису.',
            'contact-address-label': 'Адреса',
            'contact-map-link': 'Показати на карті',
            'contact-phone-label': 'Телефон',
            'contact-hours-label': 'Графік роботи',
            'hours': 'Пн-Нд: 8:00 - 20:00 (Запис за домовленістю)',
            
            // FORM
            'form-name': "Ваше ім'я",
            'form-phone': 'Телефон (наприклад, +420 728 916 163)',
            'form-service-select': '-- Оберіть послугу --',
            'form-date': 'Бажана дата',
            'form-time': 'Час',
            'form-btn-submit': 'Записатися зараз',

            // FOOTER
            'footer-about-text': 'Барбершоп, де цінують якість та час клієнта. Створюємо досконалий образ для справжніх чоловіків.',
            'footer-nav-title': 'Навігація',
            'footer-contact-title': 'Контакти',
            'footer-socials-title': 'Мережі',
            'footer-copy': '© 2025 TOPAL BARBER. Всі права захищені. Розробка та дизайн: AI Assistant.',

            // ALERTS
            'alert-success': 'Дякую за Ваш запис! Ми зв\'яжемося з Вами найближчим часом для підтвердження.',
            'alert-fail': 'Будь ласка, заповніть усі обов\'язкові поля коректно (Ім\'я, Телефон, Послуга).'
        },
        'cz': {
            // META & SEO
            'meta-title': 'TOPAL BARBER | Mistr stylu Valentyny Topal v Brně',
            'meta-description': 'TOPAL BARBER - profesionální pánské střihy, fades a úprava vousů v Brně (Česká republika). Master Valentina s 10+ lety zkušeností. Objednejte se online!',
            'meta-og-title': 'TOPAL BARBER | Váš ideální styl v Brně',

            // NAVIGATION & CTA
            'nav-services': 'Služby',
            'nav-reviews': 'Recenze', // NEW
            'nav-about': 'O mně',
            'nav-portfolio': 'Portfolio',
            'nav-contact': 'Rezervace',
            'btn-book': 'REZERVOVAT',
            'btn-book-online': 'Rezervovat Online',
            'hero-title': 'TOPAL BARBER<br> <span class="highlight">Váš ideální styl</span> v Brně',
            'hero-subtitle': 'Střihy, které podtrhují individualitu. Profesionalita, které můžete důvěřovat.',

            // REVIEWS
            'reviews-sub': 'Ohlasy klientů', // NEW
            'reviews-title': 'Co říkají o TOPAL BARBER', // NEW
            'review-name-1': 'Katya ', // NEW
            'review-text-1': 'Nejlepší barber v Brně. Pokaždé perfektní. Valentina vždy naslouchá mým přáním a navrhuje skvělé nápady. Kvalita střihu je vždy na špičce. Doporučuji všem!', // NEW
            'review-name-2': 'Andrii ', // NEW
            'review-text-2': 'Vynikající servis a skvělý fade. Paní Valentina je profesionálka, která ví, co dělá. Příjemné prostředí a vždy odcházím maximálně spokojen. Určitě se vrátím.', // NEW
            'review-name-3': 'Julia ', // NEW
            'review-text-3': 'Stříhám se zde více než rok. Nikdy jsem neměl žádné stížnosti. Přesnost, kvalita, dokonalá čistota linií. Je cítit profesionální přístup a láska k práci. 5 hvězdiček!', // NEW
            'reviews-btn': 'Více recenzí', // NEW

            // SERVICES
            'price-sub': 'Ceník 2025',
            'price-title': 'Profesionální Služby a Atmosféra',
            'btn-choose-time': 'Vybrat čas',
            'price-service-1-name': 'Pánský střih vlasů strojkem (s jedním nástavcem)',
            'price-service-1-desc': 'Konzultace, mytí hlavy, střih a úprava vlasů. Klasika, která je vždy aktuální.',
            'price-service-2-name': 'Pánský střih vlasů strojkem na suché vlasy',
            'price-service-2-desc': 'Kompletní služby: ideální střih a profesionální péče o vlasy.',
            'price-service-3-name': 'Pánský kombinovaný střih',
            'price-service-3-desc': 'Rychle, pohodlně a stylově. S respektem ke klientům.',
            'price-service-4-name': 'Pánský střih "Komplex" (mytí, střih, úprava, styling)',
            'price-service-4-desc': 'Horký obklad, péče o vlasy, mytí hlavy, střih a úprava vlasů.',
            'price-service-5-name': 'Pánský střih dlouhých vlasů',
            'price-service-5-desc': 'Horký obklad, péče o vlasy, mytí hlavy, střih a úprava vlasů.',
            'price-service-6-name': 'Úprava vousů',
            'price-service-6-desc': 'Rychle, pohodlně a stylově. S respektem ke klientům.',
            // ДОДАНО: Камуфляж
            'price-service-7-name': 'Kamufláž vlasů',
            'price-service-7-desc': 'Rychle, pohodlně a stylově. S respektom ke klientům.',
            'price-service-8-name': 'Kamufláž vousů',
            'price-service-8-desc': 'Rychle, pohodlně a stylově. S respektom ke klientům.',

            // ABOUT
            'about-sub': 'Topal Barber',
            'about-master-title': 'Valentina: Mistr vašeho stylu a důvěry',
            'about-text-1': 'Více než 10 let se věnuji umění pánských střihů. Nejen stříhám, ale vytvářím vzhled, který se k vám perfektně hodí. V mé práci je klíčová kvalita, pozornost k detailům a pohodová atmosféra. Zaručuji, že ode mě odejdete nejen s dokonalým střihem, ale i se skvělou náladou.',
            'about-stat-years': 'Let zkušeností',
            'about-stat-clients': 'Spokojených klientů',
            'about-btn-insta': 'Můj Instagram',

            // PORTFOLIO
            'portfolio-title': 'Portfolio a Videa',
            'portfolio-video-title': 'Nejnovější práce z Instagram Reels',
            'portfolio-btn': 'Více videí',

            // CONTACT
            'contact-sub': 'Online rezervace',
            'contact-title': 'Zarezervovat návštěvu',
            'contact-intro': 'Vyberte si vhodný čas a službu. Zavolám vám pro potvrzení detailů rezervace.',
            'contact-address-label': 'Adresa',
            'contact-map-link': 'Zobrazit na mapě',
            'contact-phone-label': 'Telefon',
            'contact-hours-label': 'Otevírací doba',
            'hours': 'Po-Ne: 8:00 - 20:00 (Rezervace po domluvě)',
            
            // FORM
            'form-name': 'Vaše jméno',
            'form-phone': 'Telefon (např. +420 728 916 163)',
            'form-service-select': '-- Vyberte službu --',
            'form-date': 'Preferované datum',
            'form-time': 'Čas',
            'form-btn-submit': 'Rezervovat nyní',

            // FOOTER
            'footer-about-text': 'Barber shop, kde si cení kvality a času klienta. Vytváříme dokonalý vzhled pro skutečné muže.',
            'footer-nav-title': 'Navigace',
            'footer-contact-title': 'Kontakty',
            'footer-socials-title': 'Města',
            'footer-copy': '© 2025 TOPAL BARBER. Všechna práva vyhrazena. Vývoj a design: AI Assistant.',

            // ALERTS
            'alert-success': 'Děkujeme za vaši rezervaci! Budeme vás brzy kontaktovat pro potvrzení.',
            'alert-fail': 'Vyplňte prosím všechna povinná pole správně (Jméno, Telefon, Služba).'
        },
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const defaultLang = 'ua';
    let currentLang = defaultLang;

    const updateContent = (lang) => {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang); // Оновлення атрибута lang для SEO

        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            const translation = translations[lang] ? translations[lang][key] : translations[defaultLang][key];

            if (translation) {
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translation);
                } else if (el.tagName === 'OPTION' && el.parentElement.tagName === 'SELECT' && el.value === '') {
                    el.textContent = translation;
                } else if (el.tagName === 'BUTTON' && el.type === 'submit') {
                    el.textContent = translation;
                } else if (el.tagName === 'META' && el.hasAttribute('content')) {
                    // Оновлення мета-тегів (description, og:description, twitter:description)
                    el.setAttribute('content', translation);
                } else if (el.tagName === 'TITLE') {
                    // Оновлення тега Title
                    el.textContent = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang');
            langButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            updateContent(newLang);
        });
    });

    // Завантаження контенту мовою за замовчуванням при старті
    updateContent(defaultLang);


    // ====================================================================
    // 2. Mobile Menu Toggle
    // ====================================================================
    const burgerBtn = document.querySelector('.burger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-nav a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        // Додає/видаляє клас 'lock-scroll' до body, щоб заборонити прокрутку фону
        BODY.classList.toggle('lock-scroll', mobileMenu.classList.contains('open')); 
    };

    burgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Закриття меню при кліку на посилання
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // ====================================================================
    // 3. LightBox / Photo Viewer
    // ====================================================================
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightboxModal = document.querySelector('.lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');

    const openLightbox = (src, alt) => {
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightboxModal.classList.add('open');
        BODY.classList.add('lock-scroll'); 
    };

    const closeLightbox = () => {
        lightboxModal.classList.remove('open');
        BODY.classList.remove('lock-scroll');
    };

    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            openLightbox(img.src, img.alt);
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    // Закриття LightBox при кліку на затемнену область
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Додано: Закриття LightBox клавішею Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('open')) {
            closeLightbox();
        }
    });


    // ====================================================================
    // 4. Scroll Animation, Sticky Header & Scroll To Top
    // ====================================================================
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    // Intersection Observer для анімації елементів при прокрутці
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('animated');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-fade-in-up');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const SCROLLED_OFFSET = 100;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Sticky Header
        if (scrollPosition > SCROLLED_OFFSET) {
            HEADER.classList.add('scrolled');
        } else {
            HEADER.classList.remove('scrolled');
        }

        // Scroll to Top Button Visibility
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = scrollPosition > 500 ? 'flex' : 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Викликаємо при завантаженні для перевірки початкової позиції

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ====================================================================
    // 5. Simple Form Submission Handling
    // ====================================================================
    const contactForm = document.querySelector('.contact-form');
    
    // Функція для отримання повідомлення alert поточною мовою
    const getAlertMessage = (key) => {
          return translations[currentLang] ? translations[currentLang][key] : translations[defaultLang][key];
    };

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[name="name"]');
            const phoneInput = this.querySelector('input[name="phone"]');
            const serviceSelect = this.querySelector('select[name="service"]');

            // Проста клієнтська валідація
            if (!nameInput.value.trim() || nameInput.value.length < 2 || !phoneInput.value.trim() || phoneInput.value.length < 8 || serviceSelect.value === '') {
                 return alert(getAlertMessage('alert-fail'));
            }

            // Імітація успішної відправки
            alert(getAlertMessage('alert-success'));
            this.reset(); // Очищуємо форму
            
            // ПРИМІТКА: Для робочого сайту замість alert() тут потрібна
            // реальна логіка відправки даних на сервер (fetch API)
        });
    }

});