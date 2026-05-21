    // Массив картинок для пролистывания в баннере
        const images = [
            "images/Слайд1.JPG", // Первый слайд
            "images/Слайд2.JPG", // Второй слайд
            "images/Слайд3.JPG",  // Третий слайд
            "images/Слайд4.JPG",  // Четвёртый слайд
            "images/Слайд5.JPG",  // Пятый слайд
            "images/Слайд6.JPG",  // Шестой слайд
            "images/Слайд7.JPG",  // Седьмой слайд
            "images/Слайд8.JPG",  // Восьмой слайд
            "images/Слайд9.JPG",  // Девятый слайд
            "images/Слайд10.JPG",  // Десятый слайд
            "images/Слайд11.JPG",  // Одиннадцатый слайд
            "images/Слайд12.JPG",  // Двенадцатый слайд
            "images/Слайд13.JPG",  // Тринадцатый слайд
            "images/Слайд14.JPG",  // Четырнадцатый слайд
            "images/Слайд15.JPG",  // Пятнадцатый слайд
            "images/Слайд16.JPG",  // Шестнадцатый слайд
            "images/Слайд17.JPG",  // Семнадцатый слайд
            "images/Слайд17.2.JPG",  // Восемнадцатый
            "images/Слайд18.JPG"  // Девятнадцатый слайд

        ];
        
        let currentIndex = 0;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');

        // Открыть просмотрщик
        function openLightbox(index) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку сайта
        }

        // Закрыть просмотрщик
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Включаем прокрутку обратно
        }

        // Листать вперед/назад
        function changeImage(direction) {
            currentIndex += direction;
            
            // Зацикливание галереи
            if (currentIndex >= images.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            
            lightboxImg.src = images[currentIndex];
        }

        // Закрытие при клике на темную область вокруг картинки
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Управление с клавиатуры (стрелочки и Esc)
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') changeImage(1);
                if (e.key === 'ArrowLeft') changeImage(-1);
            }
        });
