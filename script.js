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
    console.log("Button clicked");

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
    
    console.log("Номер елементу масиву:", index);
    
    document.getElementById('p_wishes').innerText = healthTips[index];

    if (countOfPills > 0) {
        countOfPills--; // Віднімаємо одну пігулку
        console.log("Залишилося пігулок:", countOfPills);
        updatePillsDisplay(); // Оновлюємо відображення

        if (countOfPills === 0) {
            document.getElementById("btn_wishes").style.display = 'none'; // Ховаємо кнопку, якщо пігулок немає
        }
    }
});

// Обробка натискання на кнопку "Поповнити запас пігулок"
document.getElementById("btn-buy-pills").addEventListener('click', () => {
    console.log("btn-buy-pills clicked");
    
    countOfPills = maxPills; // Оновлюємо кількість пігулок до максимуму
    updatePillsDisplay(); // Оновлюємо відображення

    document.getElementById("btn_wishes").style.display = 'inline-block'; // Повертаємо кнопку
});
