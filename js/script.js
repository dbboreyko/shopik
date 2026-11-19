const hero = document.querySelector('.hero');
    const heroTitle = document.getElementById('hero-title');
    const heroLink = document.getElementById('hero-link');
    const sliderDots = Array.from(document.querySelectorAll('.slider-dots__dot'));
    const detailPage = document.getElementById('detail-page');
    const detailContent = document.getElementById('detail-content');
    const pageContent = document.querySelector('.page-content');

    const slides = [
      {
        title: 'Новорічні знижки до -60% в Шопику!',
        link: '#top-products',
        linkText: 'Переглянути',
        theme: 'hero--discount'
      },
      {
        title: 'Новий смартфон — нові можливості!',
        link: '#category/phones',
        linkText: 'До смартфонів',
        theme: 'hero--phones'
      },
      {
        title: 'Навчання й робота з Apple-гаджетами',
        link: '#category/tablets',
        linkText: 'Обрати планшет',
        theme: 'hero--tablets'
      },
      {
        title: 'Порівнюй техніку й обирай зручно',
        link: '#category/laptops',
        linkText: 'До ноутбуків',
        theme: 'hero--laptops'
      }
    ];

    let currentSlide = 0;

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      const slide = slides[currentSlide];

      hero.classList.remove('hero--discount', 'hero--phones', 'hero--tablets', 'hero--laptops');
      hero.classList.add(slide.theme);
      heroTitle.textContent = slide.title;
      heroLink.href = slide.link;
      heroLink.textContent = slide.linkText;

      sliderDots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === currentSlide);
      });
      document.querySelector('.slider-dots').setAttribute('aria-label', `Слайд ${currentSlide + 1} з ${slides.length}`);
    }

    document.querySelector('.slider-arrow--left').addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.slider-arrow--right').addEventListener('click', () => showSlide(currentSlide + 1));
    sliderDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

    const categories = {
      phones: {
        title: 'Смартфони',
        description: 'Сучасні смартфони для звʼязку, роботи, навчання та розваг.',
        label: 'Смартфони',
        itemTitle: 'Мобільний смартфон Redmi 9A 2/16GB',
        itemPrice: '300000 грн',
        itemAlt: 'Зображення смартфона',
        productId: 'redmi-9a'
      },
      tablets: {
        title: 'Планшети',
        description: 'Планшети для навчання, перегляду контенту та творчості.',
        label: 'Планшети',
        itemTitle: 'Планшет Galaxy Tab A8 4/64GB',
        itemPrice: '8 999 грн',
        itemAlt: 'Зображення планшета',
        productId: 'galaxy-tab-a8'
      },
      laptops: {
        title: 'Ноутбуки',
        description: 'Ноутбуки для навчання, роботи й розваг вдома та поза ним.',
        label: 'Ноутбуки',
        itemTitle: 'Ноутбук Aspire 3 15.6"',
        itemPrice: '18 499 грн',
        itemAlt: 'Зображення ноутбука',
        productId: 'aspire-3'
      },
      watches: {
        title: 'Смарт-годинники',
        description: 'Гаджети для спорту, здоровʼя та контролю сповіщень.',
        label: 'Смарт-годинники',
        itemTitle: 'Смарт-годинник Watch SE',
        itemPrice: '7 499 грн',
        itemAlt: 'Зображення смарт-годинника',
        productId: 'watch-se'
      }
    };

    const products = {
      'redmi-9a': {
        category: 'Смартфони',
        title: 'Мобільний смартфон Redmi 9A 2/16GB',
        price: '300000 грн',
        description: 'Компактний смартфон для дзвінків, соціальних мереж, навчання та повсякденних завдань.',
        specs: [
          ['Памʼять', '2 ГБ ОЗП / 16 ГБ ROM'],
          ['Екран', '6.53&quot;, HD+'],
          ['Камера', '13 Мп основна'],
          ['Акумулятор', '5000 мА·год'],
          ['Система', 'Android']
        ]
      },
      'galaxy-tab-a8': {
        category: 'Планшети',
        title: 'Планшет Galaxy Tab A8 4/64GB',
        price: '8 999 грн',
        description: 'Планшет для навчання, відео та перегляду контенту вдома й у дорозі.',
        specs: [
          ['Памʼять', '4 ГБ ОЗП / 64 ГБ ROM'],
          ['Екран', '10.5&quot;, TFT'],
          ['Камера', '8 Мп основна'],
          ['Акумулятор', '7040 мА·год'],
          ['Система', 'Android']
        ]
      },
      'aspire-3': {
        category: 'Ноутбуки',
        title: 'Ноутбук Aspire 3 15.6"',
        price: '18 499 грн',
        description: 'Надійний ноутбук для навчання, роботи з документами та перегляду відео.',
        specs: [
          ['Памʼять', '8 ГБ ОЗП / SSD 256 ГБ'],
          ['Екран', '15.6&quot;, Full HD'],
          ['Процесор', 'AMD Ryzen 3'],
          ['Відеокарта', 'Вбудована'],
          ['Система', 'Без ОС']
        ]
      },
      'watch-se': {
        category: 'Смарт-годинники',
        title: 'Смарт-годинник Watch SE',
        price: '7 499 грн',
        description: 'Годинник для контролю активності, спорту та отримання основних сповіщень.',
        specs: [
          ['Дисплей', 'OLED Retina'],
          ['Корпус', 'Алюміній'],
          ['Захист', 'Водо- та пилезахищений'],
          ['Звʼязок', 'Bluetooth'],
          ['Функції', 'Пульс і активність']
        ]
      }
    };

    function showHome(hashTarget) {
      hero.hidden = false;
      pageContent.hidden = false;
      detailPage.hidden = true;

      if (hashTarget) {
        requestAnimationFrame(() => {
          const target = document.querySelector(hashTarget);
          if (target) target.scrollIntoView();
        });
      }
    }

    function showCategory(categoryId) {
      const category = categories[categoryId];
      if (!category) {
        showHome();
        return;
      }

      hero.hidden = true;
      pageContent.hidden = true;
      detailPage.hidden = false;
      detailContent.innerHTML = `
        <header class="detail-page__header">
          <p class="detail-page__eyebrow">${category.label}</p>
          <h1>${category.title}</h1>
          <p>${category.description}</p>
        </header>
        <div class="detail-page__products">
          <article class="detail-product">
            <div class="detail-product__image" role="img" aria-label="${category.itemAlt}"></div>
            <h2>${category.itemTitle}</h2>
            <p class="detail-product__rating">★★★★★ <span>25 відгуків</span></p>
            <p class="detail-product__price">${category.itemPrice}</p>
            <a class="detail-product__link" href="#product/${category.productId}">Переглянути товар</a>
          </article>
        </div>
      `;
      document.title = `${category.title} — Шопик`;
      window.scrollTo({ top: 0 });
    }

    function showProduct(productId) {
      const product = products[productId];
      if (!product) {
        showHome();
        return;
      }

      hero.hidden = true;
      pageContent.hidden = true;
      detailPage.hidden = false;
      const specs = product.specs.map(([term, definition]) =>
        `<div><dt>${term}</dt><dd>${definition}</dd></div>`
      ).join('');
      detailContent.innerHTML = `
        <div class="product-detail">
          <div class="product-detail__image" role="img" aria-label="${product.title}"></div>
          <div class="product-detail__info">
            <p class="detail-page__eyebrow">${product.category}</p>
            <h1>${product.title}</h1>
            <p class="product-detail__rating">★★★★★ <span>25 відгуків</span></p>
            <p class="product-detail__price">${product.price}</p>
            <p>${product.description}</p>
            <h2>Основні характеристики</h2>
            <dl class="product-detail__specs">
              ${specs}
            </dl>
          </div>
        </div>
      `;
      document.title = `${product.title} — Шопик`;
      window.scrollTo({ top: 0 });
    }

    function handleRoute() {
      const hash = window.location.hash.slice(1);

      if (hash.startsWith('category/')) {
        showCategory(hash.split('/')[1]);
      } else if (hash.startsWith('product/')) {
        showProduct(hash.split('/')[1]);
      } else {
        showHome(hash ? `#${hash}` : null);
        if (!hash) document.title = 'Шопик — техніка для кожного';
      }
    }

    document.querySelectorAll('.product-card').forEach((card) => {
      card.addEventListener('click', (event) => {
        if (event.target.closest('button')) return;
        window.location.hash = `product/${card.dataset.product}`;
      });
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.location.hash = `product/${card.dataset.product}`;
        }
      });
    });

    document.querySelectorAll('.product-card__purchase button').forEach((button) => {
      button.addEventListener('click', (event) => event.stopPropagation());
    });

    window.addEventListener('hashchange', handleRoute);
    showSlide(0);
    handleRoute();