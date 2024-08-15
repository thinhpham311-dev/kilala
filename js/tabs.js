document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('#tabs-list .nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Loại bỏ class 'active' từ tất cả các tab
            tabs.forEach(t => t.classList.remove('active'));

            // Thêm class 'active' vào tab được nhấp
            this.classList.add('active');

            // Ẩn tất cả các tab-pane
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Hiển thị tab-pane tương ứng với tab được nhấp
            const target = this.getAttribute('data-target');
            const targetPane = document.querySelector(target);

            if (targetPane) {
                targetPane.classList.add('active');
            } else {
                console.error(`No element found with selector: ${target}`);
            }
        });
    });
});


