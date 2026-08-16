document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        // Отслеживаем скролл страницы
        window.addEventListener('scroll', function () {
            // Если прокрутили больше 300px вниз — показываем кнопку
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Плавный скролл наверх при клике
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});