document.addEventListener("DOMContentLoaded", function () {

    // A. HILANGKAN PRELOADER
    // Hilang saat semua resource selesai dimuat, ATAU paling lambat 3 detik
    // (gambar slide besar bisa membuat event 'load' sangat lama).
    const preloader = document.getElementById('preloader-overlay');
    let preloaderHidden = false;

    function hidePreloader() {
        if (preloaderHidden || !preloader) return;
        preloaderHidden = true;
        preloader.classList.add('sembunyi');
        setTimeout(() => { preloader.style.display = 'none'; }, 600);
    }

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
    setTimeout(hidePreloader, 3000);

    // B. LOGIKA ACTIVE LINK (GARIS BIRU)
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');

    menuItems.forEach(item => {
        item.classList.remove('active');
        const href = (item.getAttribute('href') || '').split('#')[0];
        if (href && href === currentPage) {
            item.classList.add('active');
        }
    });

    // C. NAVBAR MENGECIL & D. FADE IN SECTION
    const navbar = document.querySelector('.navbar');

    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
        reveal();
    });
    reveal();

    // E. SLIDER OTOMATIS (FADE)
    const slides = document.querySelectorAll('.slide-item');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // ganti slide tiap 5 detik

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }
});
