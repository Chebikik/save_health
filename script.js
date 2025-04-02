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
    document.getElementById("btn_wishes").style.backgroundColor = '#66cc99';
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

//вітамини джсон

const arrayOfVitaminObjects = [

{
   "id": "001",
   "title":"Вітамін С",
   "photo":"img/vitamins/vitamin-c.png",
   "description":"Кристалічний порошок білого або майже білого кольору чи безбарвні кристали",
   "schema":"C6H8O6",
   "rating":"2",
   "type":"",

},

{
    "id": "002",
    "title":"Омега Д3",
   "photo":"img/vitamins/vitamin.png",
   "description":"поліненасичені жирні кислоти належать до родини",
   "schema":"C6H8O6",
   "rating":"4",
   "type":"",
 
 },

 {
    "id": "003",
    "title":"Вітамін В",
   "photo":"img/vitamins/vitamins.png",
   "description":"Вітаміни групи B, «вітаміни B», «В-комплекс» та ін. — вітаміни, розчинні у воді",
   "schema":"",
   "rating":"3",
   "type":"",
 
 },

 {
    "id": "004",
    "title":"Вітамін Д",
   "photo":"img/vitamins/vitamin-d.png",
   "description":"Вітаміни групи B, «вітаміни B», «В-комплекс» та ін. — вітаміни, розчинні у воді",
   "schem":"scheme/vitamin-d-schema.jpg",
   "rating":"4",
   "type":"scheme/vitamin-d-scheme.jpg",
 
 },

 {
    "id": "005",
    "title":"Вітамін Е",
   "photo":"img/vitamins/vitamin-e.png",
   "description":"Вітаміни групи B, «вітаміни B», «В-комплекс» та ін. — вітаміни, розчинні у воді",
   "schema":"",
   "rating":"2",
   "type":"",
 
 },

 {
    "id": "006",
    "title":"Вітамін А",
   "photo":"img/vitamins/multivitamin.png",
   "description":"Вітаміни групи B, «вітаміни B», «В-комплекс» та ін. — вітаміни, розчинні у воді",
   "schema":"",
   "rating":"5",
   "type":"",
 
 },

]

console.log(arrayOfVitaminObjects);

arrayOfVitaminObjects.forEach((item) => {
    console.log(item);

    let divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamin');

    let ratingEmojis = '💚'.repeat(item.rating) + '🤍'.repeat(5 - item.rating);

    divVitamin.innerHTML = `
        <img src="${item.photo}" alt="${item.title}" class="vitamin-photo">
        <p class="vitamin-title">${item.title}</p>
        <p class="vitamin-rating">${ratingEmojis}</p>
        ${item.type ? `<img src="${item.type}" alt="Chemical Scheme" class="vitamin-schema">` : ''}
    `;

    divVitamin.addEventListener('mouseover', () => {
        divVitamin.querySelector('.vitamin-photo').style.opacity = '0';
        divVitamin.querySelector('.vitamin-title').style.opacity = '0';
        divVitamin.querySelector('.vitamin-rating').style.opacity = '0';
        if (item.type) {
            divVitamin.querySelector('.vitamin-schema').style.opacity = '0';
        }
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.description;
            divVitamin.querySelector('.vitamin-photo').style.display = 'none';
            divVitamin.querySelector('.vitamin-rating').style.display = 'none';
            if (item.type) {
                divVitamin.querySelector('.vitamin-schema').style.display = 'none';
            }
            divVitamin.querySelector('.vitamin-title').style.opacity = '1';
        }, 150);
    });

    divVitamin.addEventListener('mouseout', () => {
        divVitamin.querySelector('.vitamin-title').style.opacity = '0';
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.title;
            divVitamin.querySelector('.vitamin-photo').style.display = 'block';
            divVitamin.querySelector('.vitamin-rating').style.display = 'block';
            if (item.type) {
                divVitamin.querySelector('.vitamin-schema').style.display = 'block';
            }
            divVitamin.querySelector('.vitamin-photo').style.opacity = '1';
            divVitamin.querySelector('.vitamin-title').style.opacity = '1';
            divVitamin.querySelector('.vitamin-rating').style.opacity = '1';
            if (item.type) {
                divVitamin.querySelector('.vitamin-schema').style.opacity = '1';
            }
        }, 150);
    });

    document.getElementById('p_vitamins').appendChild(divVitamin);
});
