document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu on mobile
    const menuBtn = document.querySelector('.header-menu-btn');
    const nav = document.querySelector('.header-nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Product image hover effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const mainImg = card.querySelector('.main-img');
        const hoverImg = card.querySelector('.hover-img');
        if (mainImg && hoverImg) {
            card.addEventListener('mouseenter', () => {
                mainImg.style.display = 'none';
                hoverImg.style.display = 'block';
            });
            card.addEventListener('mouseleave', () => {
                mainImg.style.display = 'block';
                hoverImg.style.display = 'none';
            });
            // Ensure only main image is visible by default
            mainImg.style.display = 'block';
            hoverImg.style.display = 'none';
        }
    });

    // Add to cart button (placeholder functionality)
    const cartButtons = document.querySelectorAll('.product-btn');
    cartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Producto agregado al carrito.');
        });
    });
});