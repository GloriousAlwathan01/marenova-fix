document.addEventListener("DOMContentLoaded", function() {

    // A. HILANGKAN PRELOADER SAAT SELESAI LOAD
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader-overlay');
        if (preloader) {
            preloader.classList.add('sembunyi');
        }
    });

    // B. LOGIKA ACTIVE LINK (GARIS BIRU)
    const currentLocation = location.href; 
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    menuItems.forEach(item => item.classList.remove('active'));

    menuItems.forEach((item) => {
        if(item.href === currentLocation || (currentLocation.endsWith("/") && item.getAttribute("href") === "index.html")) {
            item.classList.add('active');
        }
    });

    // C. NAVBAR MENGECIL & D. FADE IN SECTION
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        reveal();
    });

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    reveal();

    // E. BARU: LOGIKA SLIDER OTOMATIS (PREMIUM FADE)
    const slides = document.querySelectorAll('.slide-item');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // Ganti slide setiap 5 detik

        function nextSlide() {
            // Hapus class active dari slide lama
            slides[currentSlide].classList.remove('active');
            // Pindah index
            currentSlide = (currentSlide + 1) % slides.length;
            // Tambah class active ke slide baru
            slides[currentSlide].classList.add('active');
        }

        // Jalankan interval
        setInterval(nextSlide, slideInterval);
    }

});