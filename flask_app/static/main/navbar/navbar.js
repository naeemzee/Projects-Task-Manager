document.getElementById('menuToggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'flex';
});

document.getElementById('mobileMenu').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'none';
});