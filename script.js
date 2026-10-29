// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// MOBILE NAVIGATION & SCROLL ENGINE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const menuBackdrop = document.getElementById('menuBackdrop');
    const navItems = document.querySelectorAll('.nav-links .nav-item');
    const siteNavbar = document.getElementById('siteNavbar');

    function toggleMenu() {
        const isOpen = mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active', isOpen);
        menuBackdrop.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (menuBackdrop) menuBackdrop.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', closeMenu);
    }

    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Sticky / Scrolled Glass Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteNavbar?.classList.add('scrolled');
        } else {
            siteNavbar?.classList.remove('scrolled');
        }
    }, { passive: true });

    // ==========================================
    // BOOKING FORM SIMULATION
    // ==========================================
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = bookingForm.querySelector('.massive-btn');
            const originalText = btn.innerText;
            
            btn.innerText = 'PROCESSING REQUEST...';
            btn.style.opacity = '0.75';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.style.backgroundColor = '#8b5cf6'; // Royal Lavender
                btn.style.borderColor = '#8b5cf6';
                btn.style.color = '#ffffff';
                btn.innerText = 'CONSULTATION REQUESTED!';
                btn.style.opacity = '1';
                
                bookingForm.reset();
                
                setTimeout(() => {
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3500);
            }, 1200);
        });
    }
});

// Refresh triggers when page fully renders
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// ==========================================
// AURA ANIMATIONS
// ==========================================
gsap.to(".aura-1", { scale: 1.15, x: 40, y: 25, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut" });
gsap.to(".aura-2", { scale: 1.1, x: -45, y: -30, duration: 10, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });
gsap.to(".aura-3", { scale: 1.2, x: 30, y: -35, duration: 9, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 2 });

// Fade aura IN smoothly after the Hero section
gsap.to(".aura", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    opacity: 0.85,
    duration: 1.5,
    stagger: 0.2,
    ease: "power2.inOut"
});

// ==========================================
// GSAP ENTRANCE ANIMATIONS
// ==========================================
const smoothEase = "power4.out";
const durationSlow = 1.4;

// Navbar Entrance
gsap.from(".navbar", {
    y: -25, opacity: 0, duration: 1.4, ease: "expo.out"
});

// Hero Content Entrance
gsap.from(".hero-brand-group", {
    y: 35, opacity: 0, duration: 1.5, delay: 0.15, ease: "expo.out"
});

gsap.from(".hero-desc", {
    y: 20, opacity: 0, duration: 1.2, delay: 0.35, ease: smoothEase
});

gsap.from(".hero-cta-group .btn", {
    y: 20, opacity: 0, duration: 1.2, delay: 0.6, stagger: 0.15, ease: smoothEase
});

// About Section Reveal
gsap.from(".about-text-content .eyebrow, .about-text-content h2", {
    scrollTrigger: { trigger: ".about", start: "top 85%" },
    y: 30, opacity: 0, duration: durationSlow, stagger: 0.15, ease: smoothEase
});

gsap.from(".about-text p, .about-features .feature-item", {
    scrollTrigger: { trigger: ".about", start: "top 80%" },
    y: 25, opacity: 0, duration: 1.2, stagger: 0.12, ease: smoothEase
});

gsap.from(".about-image-wrapper", {
    scrollTrigger: { trigger: ".about", start: "top 80%" },
    y: 40, opacity: 0, duration: durationSlow, ease: smoothEase
});

// Doctor Section Reveal
gsap.utils.toArray(".doctor-section").forEach(section => {
    const img = section.querySelector(".doctor-image-wrapper");
    const info = section.querySelector(".doctor-info");
    
    if (img) {
        gsap.from(img, {
            scrollTrigger: { trigger: section, start: "top 85%" },
            y: 40, opacity: 0, duration: durationSlow, ease: smoothEase
        });
    }
    if (info) {
        gsap.from(info.children, {
            scrollTrigger: { trigger: section, start: "top 80%" },
            y: 25, opacity: 0, duration: 1.2, stagger: 0.1, ease: smoothEase
        });
    }
});

// Services Header Reveal
gsap.from(".services-header > *", {
    scrollTrigger: { trigger: ".services", start: "top 85%" },
    y: 30, opacity: 0, duration: durationSlow, stagger: 0.15, ease: smoothEase
});

// Zig-Zag Services Rows Reveal
gsap.utils.toArray(".service-row").forEach(row => {
    gsap.from(row.children, {
        scrollTrigger: {
            trigger: row,
            start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: durationSlow,
        stagger: 0.2,
        ease: smoothEase
    });
});

// Reviews Section Reveal
gsap.from(".reviews-header > *", {
    scrollTrigger: { trigger: ".reviews-section", start: "top 85%" },
    y: 30, opacity: 0, duration: durationSlow, stagger: 0.15, ease: smoothEase
});

gsap.from(".review-card", {
    scrollTrigger: { trigger: ".reviews-section", start: "top 80%" },
    y: 35, opacity: 0, duration: 1.2, stagger: 0.15, ease: smoothEase
});

// Booking Section Reveal
gsap.from(".book-container > *", {
    scrollTrigger: { trigger: ".book-appointment", start: "top 85%" },
    y: 25, opacity: 0, duration: 1.2, stagger: 0.1, ease: smoothEase
});

// Footer Reveal
gsap.from(".footer-content > *", {
    scrollTrigger: { trigger: ".site-footer", start: "top 90%" },
    y: 25, opacity: 0, duration: 1.2, stagger: 0.1, ease: smoothEase
});
