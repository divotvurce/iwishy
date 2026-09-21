  
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });

        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                faqItems.forEach(i => i.classList.remove('active'));
                
                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        });