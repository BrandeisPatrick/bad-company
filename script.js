document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const enterBtn = document.querySelector('.enter-btn');
    const actionBtns = document.querySelectorAll('.action-btn');
    const heroLogo = document.querySelector('.hero-logo-circle');

    // Mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('open');
        mobileMenu.classList.toggle('active');
    });

    // Navigation link interactions
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Enter button interaction
    enterBtn.addEventListener('click', function() {
        // Smooth scroll to actions section
        const actionsSection = document.querySelector('.actions');
        actionsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Action button interactions
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.toLowerCase();
            
            // Add a click effect
            this.classList.add('clicked');
            
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 150);
            
            // Simulate navigation (you can replace with actual navigation logic)
            console.log(`Navigating to ${btnText} section`);
            
            // You could add actual page navigation here:
            // window.location.href = `#${btnText}`;
        });
    });

    

    // Smooth scroll behavior for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    

    
});

