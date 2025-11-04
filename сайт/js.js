
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    }
}   
function openModal() { 
    document.getElementById('myModal').style.display = 'block';
} 

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

document.getElementById("openModalBtn").onclick = function () {
    openModal();
};

window.onclick = function(event) {
    if (event.target === document.getElementById('Modal')) {
        closeModal();
    }
};   
function myImg() { 
    document.getElementById('cart').style.display = 'block';   
}       
window.onclick = function(event) {
    if (event.target === document.getElementById('cart')) {
        closeModal();
    } 
};       
 function showMessage() {
            alert("Спасибо за ваш отзыв!");
        } 

 var modal = document.getElementById('myModal');  
var btn = document.getElementsByClassName("modal-content"); 
var span = document.getElementsByClassName("close-btn");   
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
  document.getElementsByClassName('modal')[i].style.display = "block";
  }
}

	for (let i = 0; i < span.length; i++) {

span[i].onclick = function() {
  document.getElementsByClassName('modal')[i].style.display = "none";
}
} 

for (let i = 0; i < window.length; i++) {
window[i].onclick = function(event) {
  if (event.target == modal) {
    document.getElementsByClassName('modal')[i].style.display = 
 "none";
  }
}}      


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');  
function updateCarousel()
{ 
    items.forEach((item, index) =>
    {
        item.classList.remove('active');
        if (index === currentIndex)
        {
            item.classList.add('active');
        }
    });
    const translateX = -currentIndex * (100 / 3); 
    document.querySelector('.carousel-container').style.transform = `translateX(${translateX}%)`;
}

function nextSlide()
{
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide()
{
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();             
}  

 


// Основной JavaScript код для сайта ЭксАйд

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех компонентов
    initNavigation();
    initGallery();
    initModals();
    initForms();
    initAnimations();
});
                
// Галерея
function initGallery() {     
    const gallerySlider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.getElementById('gallery-prev'); 
    const nextBtn = document.getElementById('gallery-next');
    
    if (!gallerySlider || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Функция для обновления слайдера
    function updateSlider() {
        gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Обновление активного класса
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    // Следующий слайд
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    // Предыдущий слайд
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    // Обработчики событий для кнопок
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Автоматическое переключение слайдов
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Остановка автоматического переключения при наведении
    gallerySlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    gallerySlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Инициализация
    updateSlider();
}

// Модальные окна
function initModals() {   
    const loginBtn = document.getElementById('login-btn');    
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    
    // Функция для открытия модального окна
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Функция для закрытия модального окна
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Обработчики для кнопок входа и регистрации
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => openModal(loginModal));
    }
    
    if (registerBtn && registerModal) {
        registerBtn.addEventListener('click', () => openModal(registerModal));
    }
    
    // Обработчики для закрытия модальных окон
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Переключение между модальными окнами
    if (showRegister && loginModal && registerModal) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(loginModal);
            openModal(registerModal);
        });
    } 
    if (forgot-password && loginModal && registerModal) {   
         forgot-password.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(loginModal);
            openModal(registerModal);
        });
    } 
    
    if (showLogin && loginModal && registerModal) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(registerModal);
            openModal(loginModal);
        });
    }
    
    // Закрытие модальных окон при клике вне их области
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    // Закрытие модальных окон при нажатии Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

// Формы
function initForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const contactForm = document.getElementById('contact-form');
    
    // Обработка формы входа
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            // Простая валидация
            if (!email || !password) {
                showNotification('Пожалуйста, заполните все поля', 'error');
                return;
            }
            
            // Имитация отправки данных
            simulateRequest()
                .then(() => {
                    showNotification('Вход выполнен успешно!', 'success');
                    document.getElementById('login-modal').classList.remove('active');
                    document.body.style.overflow = '';
                    this.reset();
                })
                .catch(() => {
                    showNotification('Ошибка входа. Проверьте данные.', 'error');
                });
        });
    }
    
    // Обработка формы регистрации
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const password = this.querySelector('input[type="password"]').value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            // Проверка совпадения паролей
            if (password !== confirmPassword) {
                showNotification('Пароли не совпадают', 'error');
                return;
            }
            
            // Проверка паспортных данных
            const passportSeries = this.querySelector('input[placeholder*="Серия паспорта"]').value;
            const passportNumber = this.querySelector('input[placeholder*="Номер паспорта"]').value;
            
            if (!/^\d{4}$/.test(passportSeries)) {
                showNotification('Серия паспорта должна содержать 4 цифры', 'error');
                return;
            }
            
            if (!/^\d{6}$/.test(passportNumber)) {
                showNotification('Номер паспорта должен содержать 6 цифр', 'error');
                return;
            }
            
            // Имитация отправки данных
            simulateRequest()
                .then(() => {
                    showNotification('Регистрация прошла успешно!', 'success');
                    document.getElementById('register-modal').classList.remove('active');
                    document.body.style.overflow = '';
                    this.reset();
                })
                .catch(() => {
                    showNotification('Ошибка регистрации. Попробуйте позже.', 'error');
                });
        });
    }
    
    // Обработка формы обратной связи
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Простая валидация
            if (!name || !email || !message) {
                showNotification('Пожалуйста, заполните все поля', 'error');
                return;
            }
            
            // Имитация отправки данных
            simulateRequest()
                .then(() => {
                    showNotification('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
                    this.reset();
                })
                .catch(() => {
                    showNotification('Ошибка отправки сообщения. Попробуйте позже.', 'error');
                });
        });
    }
    
    // Функция для показа уведомлений
    function showNotification(message, type = 'info') {
        // Создание элемента уведомления
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Стили для уведомления
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1300;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        // Цвета в зависимости от типа
        const colors = {
            success: '#ffffffff',
            error: '#dc3545',
            info: '#17a2b8',
            warning: '#ffc107'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        
        // Добавление уведомления на страницу
        document.body.appendChild(notification);
        
        // Анимация появления
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Автоматическое удаление через 5 секунд
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
        
        // Возможность закрыть уведомление кликом
        notification.addEventListener('click', function() {
            this.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 300);
        });
    }
    
    // Функция для имитации запроса к серверу
    function simulateRequest() {
        return new Promise((resolve, reject) => {
            // Случайная задержка от 1 до 3 секунд
            const delay = Math.random() * 2000 + 1000;
            
            // 90% шанс успеха, 10% - ошибка
            const isSuccess = Math.random() > 0.1;
            
            setTimeout(() => {
                if (isSuccess) {
                    resolve();
                } else {
                    reject();
                }
            }, delay);
        });
    }
}

// Анимации
function initAnimations() {
    // Анимация появления элементов при прокрутке
    const animatedElements = document.querySelectorAll('.build-card, .about-text, .contact-info, .contact-form, .stat');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Анимация для кнопок при наведении
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Анимация для карточек сборок
    const buildCards = document.querySelectorAll('.build-card');
    buildCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Дополнительные утилиты
// Функция для форматирования цены
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
}

// Функция для проверки email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Функция для загрузки данных (имитация)
function loadBuildsData() {
    // В реальном приложении здесь был бы запрос к API
    const buildsData = [
        {
            id: 1,
            name: 'Игровой ПК',
            price: 85000,
            specs: [
                'Процессор: Intel Core i5 / AMD Ryzen 5',
                'Видеокарта: NVIDIA RTX 3060 / AMD RX 6600 XT',
                'Оперативная память: 16 ГБ DDR4',
                'Накопитель: SSD 1 ТБ'
            ],
            image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        // Другие сборки...
    ];
    
    return Promise.resolve(buildsData);
}

// Инициализация данных при загрузке
loadBuildsData().then(data => {
    console.log('Данные о сборках загружены:', data);
    // Здесь можно обновить интерфейс с полученными данными
});
