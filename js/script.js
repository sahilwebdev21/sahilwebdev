// Load components
Promise.all([
    fetch('../components/navbar.html').then(res => res.text()),
    fetch('../components/footer.html').then(res => res.text())
]).then(([navbar, footer]) => {
    document.getElementById('navbar-container').innerHTML = navbar;
    document.getElementById('footer-container').innerHTML = footer;
    
    // Add component styles
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = '../css/styles.css';
    document.head.appendChild(styles);
    
    const footerStyles = document.createElement('link');
    footerStyles.rel = 'stylesheet';
    footerStyles.href = '../css/styles.css';
    document.head.appendChild(footerStyles);
});

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