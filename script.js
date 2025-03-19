let countOfPills = 5; // Початковий рівень здоров'я (кількість пігулок)
const maxPills = 5; // Максимальна кількість пігулок

// Функція для оновлення відображення здоров'я
function updatePillsDisplay() {
    let fullPills = '💊'.repeat(countOfPills);
    let emptyPills = '❌'.repeat(maxPills - countOfPills);
    document.getElementById('count-of-pills').innerText = fullPills + emptyPills;
}

// Встановлюємо початкове значення здоров'я
updatePillsDisplay();

// Обробка натискання на кнопку "Отримати пораду"
document.getElementById("btn_wishes").addEventListener('click', () => {
    let healthTips = [
        "Пийте більше води 💧",
        "Робіть зарядку щоранку 🏋️",
        "Дотримуйтеся режиму сну 😴",
        "Їжте більше овочів та фруктів 🥦🍎",
        "Зменшіть вживання цукру 🚫🍭",
        "Робіть глибокі вдихи та медитуйте 🧘",
        "Займайтеся спортом 3-4 рази на тиждень 🏃",
        "Обмежуйте час перед екраном 📵",
        "Гуляйте на свіжому повітрі 🌿",
        "Підтримуйте позитивний настрій 😊"
    ];
    
    let index = Math.floor(Math.random() * healthTips.length);
    document.getElementById('p_wishes').innerText = healthTips[index];

    if (countOfPills > 0) {
        countOfPills--; // Віднімаємо одну пігулку
        updatePillsDisplay();
        if (countOfPills === 0) {
          //  document.getElementById("btn_wishes").disabled = 'true'; 
            document.getElementById("btn_wishes").style.backgroundColor = 'gray';
        }
    }
});

// Обробка натискання на кнопку "Поповнити запас пігулок"
document.getElementById("btn-buy-pills").addEventListener('click', () => {
    countOfPills = maxPills;
    updatePillsDisplay();
   // document.getElementById("btn_wishes").disabled = 'false';
    document.getElementById("btn_wishes").style.backgroundColor = 'green';
});

const images = ["img/gallery/1.jpg", "img/gallery/2.jpg"]; 
let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Функція для зміни зображення
function updateImage() {
    galleryImage.src = images[currentIndex];
}

// Обробники подій для кнопок
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Removed duplicate declarations of images, currentIndex, galleryImage, prevBtn, and nextBtn

// Функція для зміни зображення з анімацією
function updateImage() {
    galleryImage.classList.add("hidden"); // Робимо зображення прозорим перед зміною
    setTimeout(() => {
        galleryImage.src = images[currentIndex];
        galleryImage.classList.remove("hidden"); // Повертаємо зображення після зміни
    }, 300);
}

// Обробники подій для кнопок
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Встановлюємо перше зображення
updateImage();
document.getElementById("btn_wishes").style.display = 'inline-block'; // Повертаємо кнопку
