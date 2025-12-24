
function setupNavigation() {
    const buttons = document.querySelectorAll('[data-page]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            window.location.href = `catalog.html`;
        });
    });
}

setupNavigation();

const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.header__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
    }
});

const meals = [
    {
        id: 1,
        name: 'Паста Карбонара',
        cuisine: 'italian',
        diet: [],
        price: 850,
        description: 'Классическая итальянская паста с беконом и сливочным соусом',
        ingredients: ['Спагетти 200г', 'Бекон 150г', 'Яйца 3шт', 'Пармезан 100г', 'Сливки 200мл'],
        icon: '🍝',
        image: './images/pasta.png',
        weight: 1.5,
        recipe: {
            time: '30 минут',
            videoUrl: 'https://youtu.be/jVNX5aIo-IA?si=UFeExwGmPiUjPMVc',
            ingredients: ['Спагетти — 200г', 'Бекон — 150г', 'Яйца — 3шт', 'Пармезан — 100г', 'Сливки — 200мл', 'Чеснок — 2 зубчика'],
            steps: [
                'Отварите спагетти в подсоленной воде до состояния аль денте',
                'Обжарьте нарезанный бекон на сковороде до хрустящей корочки',
                'Взбейте яйца со сливками и тёртым пармезаном',
                'Смешайте горячую пасту с беконом и яичной смесью',
                'Подавайте горячим с дополнительным пармезаном'
            ]
        }
    },
    {
        id: 2,
        name: 'Тайский Пад Тай',
        cuisine: 'asian',
        diet: [],
        price: 920,
        description: 'Знаменитая тайская лапша с креветками и арахисом',
        ingredients: ['Рисовая лапша 200г', 'Креветки 200г', 'Арахис 50г', 'Тофу 100г', 'Соус Пад Тай'],
        icon: '🍜',
        image: './images/pad-tai.png',
        weight: 1.8,
        recipe: {
            time: '35 минут',
            videoUrl: 'https://youtu.be/SPHYkhR5X7s?si=Op8Ghc9O8bAzXO8P',
            ingredients: ['Рисовая лапша — 200г', 'Креветки — 200г', 'Арахис — 50г', 'Тофу — 100г', 'Соус Пад Тай — 100мл', 'Яйца — 2шт'],
            steps: [
                'Замочите рисовую лапшу в горячей воде на 10 минут',
                'Обжарьте креветки на сильном огне 2-3 минуты',
                'Добавьте тофу и яйца, перемешайте',
                'Добавьте лапшу и соус, жарьте 3 минуты',
                'Посыпьте арахисом и подавайте'
            ]
        }
    },
    {
        id: 3,
        name: 'Овощное Рагу',
        cuisine: 'european',
        diet: ['vegetarian', 'vegan'],
        price: 650,
        description: 'Полезное рагу из сезонных овощей',
        ingredients: ['Баклажан 1шт', 'Кабачок 1шт', 'Перец 2шт', 'Томаты 3шт', 'Лук 1шт'],
        icon: '🥘',
        image: './images/ragu.png',
        weight: 2.0,
        recipe: {
            time: '40 минут',
            videoUrl: 'https://www.youtube.com/watch?v=WD-TonV-du8',
            ingredients: ['Баклажан — 1шт', 'Кабачок — 1шт', 'Перец болгарский — 2шт', 'Томаты — 3шт', 'Лук — 1шт', 'Чеснок — 3 зубчика'],
            steps: [
                'Нарежьте все овощи кубиками одинакового размера',
                'Обжарьте лук и чеснок до золотистого цвета',
                'Добавьте баклажаны и кабачки, жарьте 5 минут',
                'Добавьте перец и томаты, тушите 20 минут',
                'Приправьте специями и подавайте горячим'
            ]
        }
    },
    {
        id: 4,
        name: 'Тако с Курицей',
        cuisine: 'mexican',
        diet: ['glutenfree'],
        price: 780,
        description: 'Мексиканские тако с сочной курицей и гуакамоле',
        ingredients: ['Куриное филе 300г', 'Тортильи безглютеновые 6шт', 'Авокадо 2шт', 'Помидоры 2шт', 'Сыр 100г'],
        icon: '🌮',
        image: './images/taco.png',
        weight: 1.6,
        recipe: {
            time: '25 минут',
            videoUrl: 'https://youtu.be/WPnT10cpbI8?si=_7MBPSEgZnrhTWJR',
            ingredients: ['Куриное филе — 300г', 'Тортильи безглютеновые — 6шт', 'Авокадо — 2шт', 'Помидоры — 2шт', 'Сыр чеддер — 100г'],
            steps: [
                'Нарежьте курицу полосками и обжарьте со специями',
                'Приготовьте гуакамоле из авокадо, лайма и соли',
                'Разогрейте тортильи на сковороде',
                'Наполните тортильи курицей, гуакамоле и овощами',
                'Посыпьте сыром и подавайте'
            ]
        }
    },
    {
        id: 5,
        name: 'Лосось с Киноа',
        cuisine: 'european',
        diet: ['glutenfree', 'lowcarb'],
        price: 1250,
        description: 'Стейк лосося с киноа и овощами на пару',
        ingredients: ['Стейк лосося 250г', 'Киноа 150г', 'Брокколи 200г', 'Морковь 2шт', 'Соус терияки'],
        icon: '🐟',
        image: './images/kinoa.png',
        weight: 1.4,
        recipe: {
            time: '35 минут',
            videoUrl: 'https://youtu.be/nESbx6M5k3Y?si=LumWbtMe1K4XoNPl',
            ingredients: ['Стейк лосося — 250г', 'Киноа — 150г', 'Брокколи — 200г', 'Морковь — 2шт', 'Соус терияки — 50мл', 'Кунжут — 20г'],
            steps: [
                'Отварите киноа в подсоленной воде 15 минут',
                'Приготовьте овощи на пару 10 минут',
                'Обжарьте лосось на сковороде по 4 минуты с каждой стороны',
                'Полейте лосось соусом терияки',
                'Подавайте с киноа, овощами и посыпьте кунжутом'
            ]
        }
    },
    {
        id: 6,
        name: 'Буррито Веган',
        cuisine: 'mexican',
        diet: ['vegan', 'vegetarian'],
        price: 690,
        description: 'Сытное веганское буррито с фасолью и овощами',
        ingredients: ['Тортильи 3шт', 'Черная фасоль 200г', 'Рис 150г', 'Перец 2шт', 'Кукуруза 100г'],
        icon: '🌯',
        image: './images/burito.png',
        weight: 1.7,
        recipe: {
            time: '30 минут',
            videoUrl: 'https://youtu.be/WgI1GPSBdis?si=1WHOhOdoNFarMQ4q',
            ingredients: ['Тортильи — 3шт', 'Черная фасоль — 200г', 'Рис — 150г', 'Перец болгарский — 2шт', 'Кукуруза — 100г', 'Гуакамоле — 100г'],
            steps: [
                'Отварите рис до готовности',
                'Разогрейте фасоль с специями',
                'Обжарьте нарезанный перец и кукурузу',
                'Разогрейте тортильи и выложите начинку',
                'Заверните буррито и обжарьте до хрустящей корочки'
            ]
        }
    },
    {
        id: 7,
        name: 'Лазанья Болоньезе',
        cuisine: 'italian',
        diet: [],
        price: 980,
        description: 'Слоёная лазанья с мясным соусом болоньезе и сыром',
        ingredients: ['Листы лазаньи', 'Фарш говяжий 400г', 'Томаты', 'Моцарелла', 'Соус бешамель'],
        icon: '🍕',
        image: './images/lasagna.png',
        weight: 2.2,
        recipe: {
            time: '45 минут',
            videoUrl: 'https://youtu.be/Df6ql5qAZxk?si=KCEqhpgemHHz0iI1',
            ingredients: [
                'Листы лазаньи',
                'Говяжий фарш — 400г',
                'Томаты — 300г',
                'Моцарелла — 200г',
                'Соус бешамель — 250мл'
            ],
            steps: [
                'Обжарьте фарш с томатами',
                'Выложите слои лазаньи, соуса и сыра',
                'Повторите слои',
                'Запекайте 40 минут при 180°C'
            ]
        }
    },
    {
        id: 8,
        name: 'Курица Терияки',
        cuisine: 'asian',
        diet: ['lowcarb'],
        price: 890,
        description: 'Куриное филе в соусе терияки с овощами',
        ingredients: ['Куриное филе 350г', 'Соус терияки', 'Брокколи', 'Рис'],
        icon: '🍛',
        image: './images/teriyaki.png',
        weight: 1.8,
        recipe: {
            time: '30 минут',
            videoUrl: 'https://youtu.be/7yXgrA6fQT0?si=C05-LeB5WMfkHoTj',
            ingredients: [
                'Куриное филе — 350г',
                'Соус терияки — 80мл',
                'Брокколи — 200г',
                'Рис — 150г'
            ],
            steps: [
                'Обжарьте курицу до золотистой корочки',
                'Добавьте соус терияки',
                'Приготовьте овощи',
                'Подавайте с рисом'
            ]
        }
    },
    {
        id: 9,
        name: 'Кето Боул',
        cuisine: 'european',
        diet: ['lowcarb', 'glutenfree'],
        price: 820,
        description: 'Боул с авокадо, курицей и свежими овощами',
        ingredients: ['Куриное филе', 'Авокадо', 'Огурцы', 'Листья салата'],
        icon: '🥗',
        image: './images/boul.png',
        weight: 1.3,
        recipe: {
            time: '20 минут',
            videoUrl: 'https://youtu.be/KWEfo5ZrPIk?si=i4_SdoO0twWqpSY6',
            ingredients: [
                'Куриное филе — 250г',
                'Авокадо — 1шт',
                'Огурцы — 2шт',
                'Листья салата'
            ],
            steps: [
                'Обжарьте курицу',
                'Нарежьте овощи',
                'Соберите боул',
                'Добавьте соус по вкусу'
            ]
        }
    },
    {
        id: 10,
        name: 'Ризотто с Грибами',
        cuisine: 'italian',
        diet: ['vegetarian'],
        price: 870,
        description: 'Кремовое ризотто с шампиньонами и пармезаном',
        ingredients: ['Рис арборио 200г', 'Шампиньоны 200г', 'Лук 1шт', 'Пармезан 80г', 'Овощной бульон'],
        icon: '🍚',
        image: './images/rizotto.png',
        weight: 1.6,
        recipe: {
            time: '35 минут',
            videoUrl: 'https://youtu.be/B0ps9wCwkJo?si=84K8pLRKmpodH57V',
            ingredients: [
                'Рис арборио — 200г',
                'Шампиньоны — 200г',
                'Лук — 1шт',
                'Пармезан — 80г',
                'Овощной бульон — 700мл'
            ],
            steps: [
                'Обжарьте лук до прозрачности',
                'Добавьте грибы и готовьте 5 минут',
                'Всыпьте рис и прогрейте 2 минуты',
                'Постепенно вливайте бульон, помешивая',
                'Добавьте пармезан и подавайте'
            ]
        }
    },
    {
        id: 11,
        name: 'Фалафель с Хумусом',
        cuisine: 'european',
        diet: ['vegan', 'vegetarian'],
        price: 720,
        description: 'Хрустящий фалафель с хумусом и свежими овощами',
        ingredients: ['Нут 250г', 'Хумус', 'Томаты', 'Огурцы', 'Лепёшка'],
        icon: '🧆',
        image: './images/humus.png',
        weight: 1.5,
        recipe: {
            time: '30 минут',
            videoUrl: 'https://youtu.be/3lYmZijb6w8?si=DxPbUk7kBJgwrYz9',
            ingredients: [
                'Нут — 250г',
                'Чеснок — 2 зубчика',
                'Кумин — 1 ч.л.',
                'Кориандр — 1 ч.л.',
                'Хумус — 100г'
            ],
            steps: [
                'Измельчите нут со специями',
                'Сформируйте шарики',
                'Обжарьте до золотистой корочки',
                'Подавайте с хумусом и овощами'
            ]
        }
    },
    {
        id: 12,
        name: 'Стейк из Индейки',
        cuisine: 'european',
        diet: ['lowcarb', 'glutenfree'],
        price: 990,
        description: 'Сочный стейк из индейки с пряными травами',
        ingredients: ['Филе индейки 300г', 'Розмарин', 'Чеснок', 'Оливковое масло', 'Овощи гриль'],
        icon: '🥩',
        image: './images/stake.png',
        weight: 1.7,
        recipe: {
            time: '25 минут',
            videoUrl: 'https://youtu.be/cJzk23P3T8I?si=hNwynfaQC4_G6oJp',
            ingredients: [
                'Филе индейки — 300г',
                'Розмарин — 1 веточка',
                'Чеснок — 2 зубчика',
                'Оливковое масло — 2 ст.л.'
            ],
            steps: [
                'Замаринуйте индейку со специями',
                'Обжарьте на сильном огне по 4–5 минут',
                'Дайте мясу «отдохнуть» 5 минут',
                'Подавайте с овощами гриль'
            ]
        }
    }
];

const extras = [
    { id: 'extra-cheese', name: 'Дополнительный сыр', price: 150 },
    { id: 'extra-sauce', name: 'Фирменный соус', price: 100 },
    { id: 'extra-bread', name: 'Свежий хлеб', price: 80 },
    { id: 'extra-salad', name: 'Салат микс', price: 120 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilters = { cuisine: [], diet: [] };
let currentMeal = null;
let searchQuery = '';
let currentSort = '';

function getCuisineName(cuisine) {
    const names = { italian: 'Итальянская', asian: 'Азиатская', mexican: 'Мексиканская', european: 'Европейская' };
    return names[cuisine] || cuisine;
}

function getDietName(diet) {
    const names = { vegetarian: 'Вегетарианская', glutenfree: 'Безглютеновая', lowcarb: 'Низкоуглеводная', vegan: 'Веганская' };
    return names[diet] || diet;
}

function updateCartCount() {
    const count = cart.length;
    document
        .querySelectorAll('.header__cart-count')
        .forEach(el => {
            if (count > 0) {
                el.textContent = count;
            } else {
                el.textContent = '';
            }
        });
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div class="cart__empty">🛒 Корзина пуста</div>';
        return;
    }

    const cartHTML = cart.map((item, index) => `
        <div class="cart__item">
            <div class="cart__item-info">
                <div class="cart__item-title">${item.meal.icon} ${item.meal.name}</div>
                <div class="cart__item-details">
                    Порций: ${item.portions} | Доставка: ${item.deliveryType}<br>
                    Зона: ${item.zone}<br>
                    ${item.extras.length > 0 ? `Дополнительно: ${item.extras.join(', ')}` : ''}
                </div>
            </div>
            <div class="cart__item-price">${item.total} ₽</div>
            <button class="cart__item-remove" onclick="removeFromCart(${index})">Удалить</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.total, 0);
    container.innerHTML = cartHTML + `
        <div class="cart__total">Итого: ${total} ₽</div>
        <button class="cart__checkout" onclick="checkout()">Оформить заказ</button>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
}

function checkout() {
    if (cart.length === 0) return;

    alert('Спасибо за заказ! Мы свяжемся с вами для подтверждения.');
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
}

// ====== КАТАЛОГ ======
function filterAndSortMeals() {
    let filtered = meals.filter(meal =>
        (!searchQuery || meal.name.toLowerCase().includes(searchQuery)) &&
        (currentFilters.cuisine.length === 0 || currentFilters.cuisine.includes(meal.cuisine)) &&
        (currentFilters.diet.length === 0 || currentFilters.diet.some(d => meal.diet.includes(d)))
    );

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    return filtered;
}

function renderCatalog() {
    const container = document.getElementById('catalogItems');
    if (!container) return;

    const filtered = filterAndSortMeals();

    container.innerHTML = filtered.map(meal => `
        <div class="meal-card">
            <div class="meal-card__image">
                ${meal.image
            ? `<img src="${meal.image}" alt="${meal.name}">`
            : meal.icon
        }
            </div>
            <div class="meal-card__content">
                <h3 class="meal-card__title">${meal.name}</h3>
                <div class="meal-card__tags">
                    <span class="meal-card__tag">${getCuisineName(meal.cuisine)}</span>
                    ${meal.diet.map(d => `<span class="meal-card__tag">${getDietName(d)}</span>`).join('')}
                </div>
                <p class="meal-card__description">${meal.description}</p>
                <div class="meal-card__ingredients">
                    <div class="meal-card__ingredients-title">Состав:</div>
                    <div class="meal-card__ingredients-list">${meal.ingredients.join(', ')}</div>
                </div>
                <div class="meal-card__price">от ${meal.price} ₽</div>
                <button class="meal-card__button" onclick="openOrderModal(${meal.id})">Рассчитать стоимость</button>
            </div>
        </div>
    `).join('');
}

function renderRecipes() {
    const container = document.getElementById('recipesContainer');
    if (!container) return;
    container.innerHTML = meals.map(meal => `
        <div class="recipe-card">
            <h3 class="recipe-card__title">${meal.icon} ${meal.name}</h3>
            <div class="recipe-card__time">⏱️ Время приготовления: ${meal.recipe.time}</div>
            <div class="recipe-card__ingredients">
                <div class="recipe-card__ingredients-title">Ингредиенты:</div>
                <ul class="recipe-card__ingredients-list">
                    ${meal.recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            <div>
                <div class="recipe-card__steps-title">Приготовление:</div>
                <ol class="recipe-card__steps">
                    ${meal.recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            ${meal.recipe.videoUrl ? `
                <a href="${meal.recipe.videoUrl}" target="_blank" rel="noopener noreferrer" class="recipe-card__video-button">
                    🎬 Видеорецепт
                </a>
            ` : ''}
        </div>
    `).join('');
}

function openOrderModal(mealId) {
    currentMeal = meals.find(m => m.id === mealId);
    if (!currentMeal) return;

    document.getElementById('modalMealName').value = currentMeal.name;

    const extrasContainer = document.getElementById('modalExtras');
    extrasContainer.innerHTML = extras.map(extra => `
        <label class="modal__checkbox-label">
            <input type="checkbox" value="${extra.id}" data-price="${extra.price}">
            ${extra.name} (+${extra.price} ₽)
        </label>
    `).join('');

    document.getElementById('orderModal').classList.add('modal--active');

    const modalElements = ['modalPortions', 'modalDelivery', 'modalZone'];
    modalElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.removeEventListener('change', calculateTotal); // Удаляем старые
            el.addEventListener('change', calculateTotal);
        }
    });

    document.querySelectorAll('#modalExtras input').forEach(cb => {
        cb.removeEventListener('change', calculateTotal);
        cb.addEventListener('change', calculateTotal);
    });

    calculateTotal();
}

function calculateTotal() {
    if (!currentMeal) return;

    const portions = parseInt(document.getElementById('modalPortions').value);
    const deliveryType = document.getElementById('modalDelivery').value;
    const zone = parseInt(document.getElementById('modalZone').value);

    let basePrice = currentMeal.price * (portions / 2);

    let extrasPrice = 0;
    document.querySelectorAll('#modalExtras input:checked').forEach(cb => {
        extrasPrice += parseInt(cb.dataset.price);
    });

    let deliveryPrice = zone;
    if (deliveryType === 'express') deliveryPrice += 300;
    const weight = currentMeal.weight * (portions / 2);
    if (weight > 3) deliveryPrice += 100;
    if (basePrice + extrasPrice >= 3000) deliveryPrice = 0;

    const total = basePrice + extrasPrice + deliveryPrice;

    document.getElementById('basePrice').textContent = `${basePrice} ₽`;
    document.getElementById('extrasPrice').textContent = `${extrasPrice} ₽`;
    document.getElementById('deliveryPrice').textContent = `${deliveryPrice} ₽`;
    document.getElementById('totalPrice').textContent = `${total} ₽`;
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('modal--active');
    currentMeal = null;
}

// Обработчики событий для закрытия
document.addEventListener('DOMContentLoaded', function () {
    // Закрытие по кнопке крестика
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeOrderModal);
    }

    // Закрытие по клику на фон (overlay)
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeOrderModal();
            }
        });
    }

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeOrderModal();
        }
    });

    // Обработчик добавления в корзину
    const addToCartBtn = document.getElementById('addToCart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (!currentMeal) return;

            const portions = parseInt(document.getElementById('modalPortions').value);
            const deliveryType = document.getElementById('modalDelivery').value;
            const zone = parseInt(document.getElementById('modalZone').value);

            const selectedExtras = [];
            let extrasPrice = 0;

            document.querySelectorAll('#modalExtras input:checked').forEach(cb => {
                selectedExtras.push(cb.parentElement.textContent.trim());
                extrasPrice += parseInt(cb.dataset.price);
            });

            let basePrice = currentMeal.price * (portions / 2);
            let deliveryPrice = zone;
            if (deliveryType === 'express') deliveryPrice += 300;

            const total = basePrice + extrasPrice + deliveryPrice;

            cart.push({
                meal: currentMeal,
                portions,
                deliveryType,
                zone,
                extras: selectedExtras,
                total
            });

            saveCart();
            updateCartCount();
            closeOrderModal();
            alert('Товар добавлен в корзину');
        });
    }
});

function initCatalogPage() {
    renderCatalog();

    document.querySelectorAll('.filters__checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const filterType = e.target.dataset.filter;
            const value = e.target.value;
            if (e.target.checked) currentFilters[filterType].push(value);
            else currentFilters[filterType] = currentFilters[filterType].filter(v => v !== value);
            renderCatalog();
        });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderCatalog();
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCatalog();
    });
}

function initRecipesPage() { renderRecipes(); }
function initCartPage() { renderCart(); updateCartCount(); }
function initContactsPage() {
    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        e.target.reset();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');

    if (document.getElementById('catalogItems')) initCatalogPage();
    if (document.getElementById('recipesContainer')) initRecipesPage();
    if (document.getElementById('cartItems')) initCartPage();
    if (document.getElementById('contactForm')) initContactsPage();

    updateCartCount();
});

updateCartCount();