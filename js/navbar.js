
// Active Menu Navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelectorAll('#nav-list .nav-link');

    navbar.forEach(tab => {
        tab.addEventListener('click', function () {
            // Loại bỏ class 'active' từ tất cả các tab
            navbar.forEach(t => t.classList.remove('active'));

            // Thêm class 'active' vào tab được nhấp
            this.classList.add('active');
        });
    });
});

// Toggle Menu Button On Mobile Devices
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function () {
        navCollapse.classList.toggle('show');
    });
});

