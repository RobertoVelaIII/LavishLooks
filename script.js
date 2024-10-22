document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    
    menuIcon.addEventListener('click', function() {
        alert('Menu functionality coming soon!');
    });

    const serviceItems = document.querySelectorAll('.services li');
    
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
