    // Ενεργοποιούμε τα scroll styles μόνο όταν λειτουργεί η JavaScript.
    document.documentElement.classList.add("js-enabled");

    var menuBtn = document.getElementById("menuBtn");
    var sideNav = document.getElementById("sideNav");
    var menu = document.getElementById("menu");

    function toggleMenu() {
        if (sideNav.classList.contains("open")) {
            sideNav.classList.remove("open");
            if (menu) menu.src = "Images/menu.png";
        } else {
            sideNav.classList.add("open");
            if (menu) menu.src = "Images/close.png"; // Το εικονίδιο 'X'
        }
    }

    function applyResponsiveNav() {
        if (window.matchMedia('(max-width: 770px)').matches) {
            menuBtn.onclick = toggleMenu;

            // Κλείσιμο του μενού αυτόματα όταν ο χρήστης πατάει ένα link
            document.querySelectorAll("#sideNav nav ul li a").forEach(function(link) {
                link.onclick = function() {
                    // Κρατάμε ενεργό το link που επέλεξε ο χρήστης.
                    document.querySelectorAll("#sideNav nav ul li a").forEach(function(navLink) {
                        navLink.classList.remove("active");
                    });
                    link.classList.add("active");

                    sideNav.classList.remove("open");
                    if (menu) menu.src = "Images/menu.png";
                };
            });
        } else {
            // Επαναφορά για Desktop View
            menuBtn.onclick = null;
            sideNav.classList.remove("open");
            if (menu) menu.src = "Images/menu.png";
        }
    }

    applyResponsiveNav();
    window.addEventListener('resize', applyResponsiveNav);

    // Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });

    // Παρακολουθούμε τα στοιχεία και τα εμφανίζουμε όταν μπουν στο viewport.
    const revealElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-from-right'
    );

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    // Ξεκινάμε τους counters όταν το About section γίνει ορατό.
    const aboutSection = document.getElementById('about');
    const counters = document.querySelectorAll('.counter');
    
    // Συνάρτηση για την ανίχνευση και την εκτέλεση των animation-φόρτωσης των counters
    function animateCounter(counter) {
        const target = Number(counter.dataset.target); //Διαβάζω το data-target="10" και το μετατρέπω από string σε αριθμό με Νumber()
        const suffix = counter.dataset.suffix || ''; //Διαβαζω το suffix "+"
        const duration = 1100;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentValue = Math.floor(progress * target);
            counter.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }
    //Έλεγχος αν το About section και οι counters υπάρχουν πριν δημιουργήσουμε τον observer
    if (aboutSection && counters.length) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            //Αν το About section δεν είναι ορατό, δεν κάνουμε τίποτα
            if (!entries[0].isIntersecting) { 
                return;
            }
            //Εκκίνηση όλων των counters
            counters.forEach(animateCounter);
            observer.disconnect();
        }, { threshold: 0.85 }); //Threshold 0.85 σημαίνει ότι το 85% του About section πρέπει να είναι ορατό για να ξεκινήσει η εκτέλεση των counters animation.

        counterObserver.observe(aboutSection);
    }

// Pop up functions for Services
const modal = document.getElementById('serviceModal');

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
    }
}

if (modal) {
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    //Ακρόαση συμβάντων στα κουμπιά "Περισσότερα" για να ανοίξει το modal με τις αντίστοιχες πληροφορίες
    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', () => {
        //Διαβάζουμε τα data attributes από το κουμπί και τα εμφανίζουμε στο modal.
            modalTitle.textContent = button.getAttribute('data-title');
            modalImg.src = button.getAttribute('data-img');
            modalDesc.textContent = button.getAttribute('data-desc');
            modal.classList.add('active');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}