// Dynamic title function
function setPageTitle() {
    // Get current page path and parse filename
    const pathSegments = window.location.pathname.split('/');
    let pageName = pathSegments.pop() || pathSegments.pop(); // Handle nested directories
    
    // Remove .html extension and sanitize
    pageName = pageName.replace('.html', '');
    
    // Handle index/home page
    if(pageName === '' || pageName === 'index') {
        pageName = 'Home';
    } else {
        // Convert to title case and replace hyphens
        pageName = pageName
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    document.title = `${pageName} | SahilWebDev`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Load components
    Promise.all([
        fetch('../components/navbar.html').then(res => res.text()),
        fetch('../components/footer.html').then(res => res.text())
    ]).then(([navbar, footer]) => {
        // Insert components
        document.getElementById('navbar-container').innerHTML = navbar;
        document.getElementById('footer-container').innerHTML = footer;

        // Add main styles
        const styles = document.createElement('link');
        styles.rel = 'stylesheet';
        styles.href = '../css/styles.css';
        document.head.appendChild(styles);

        // Set dynamic page title
        setPageTitle();

        // Update copyright year
        const copyrightYear = document.getElementById('copyright-year');
        if(copyrightYear) {
            copyrightYear.textContent = new Date().getFullYear();
        }

        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card, .newsletter').forEach(el => {
            observer.observe(el);
        });

    }).catch(error => {
        console.error('Component loading error:', error);
    });
});