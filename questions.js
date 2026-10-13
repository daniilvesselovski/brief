window.QB={
 "questions": [
  {
   "id": "S01",
   "block": "Старт",
   "type": "lang",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Язык",
    "hint": "",
    "opts": [
     "Русский",
     "English"
    ]
   },
   "en": {
    "q": "Language",
    "hint": "",
    "opts": [
     "Русский",
     "English"
    ]
   }
  },
  {
   "id": "S02",
   "block": "Старт",
   "type": "short",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Привет! Как тебя зовут?",
    "hint": "Чтобы я знал, как к тебе обращаться.",
    "opts": []
   },
   "en": {
    "q": "Hi! What’s your name?",
    "hint": "So I know what to call you.",
    "opts": []
   }
  },
  {
   "id": "S03",
   "block": "Старт",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Приятно познакомиться, {name}. Сколько у тебя сейчас времени?",
    "hint": "Режим можно поменять в любой момент.",
    "opts": [
     "Пара минут: быстрый бриф, около 7 минут",
     "Есть время: подробный бриф, 15–20 минут"
    ]
   },
   "en": {
    "q": "Nice to meet you, {name}. How much time do you have right now?",
    "hint": "You can switch at any point.",
    "opts": [
     "A few minutes: quick brief, about 7 min",
     "I have time: detailed brief, 15–20 min"
    ]
   },
   "tags": [
    "QUICK",
    "DEEP"
   ]
  },
  {
   "id": "C01",
   "block": "Ядро",
   "type": "short",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Как называется твой бренд или проект?",
    "hint": "Если названия пока нет, напиши рабочее.",
    "opts": []
   },
   "en": {
    "q": "What’s your brand or project called?",
    "hint": "No name yet? A working title is fine.",
    "opts": []
   }
  },
  {
   "id": "C02",
   "block": "Ядро",
   "type": "short",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Чем ты занимаешься? Одной фразой, простыми словами.",
    "hint": "Например: «Делаю керамику руками и учу лепить на круге».",
    "opts": [
     "Пример: «Делаю керамику ручной работы и учу лепить на круге»"
    ]
   },
   "en": {
    "q": "What do you do? One sentence, the way you’d tell a friend.",
    "hint": "For example: “I make handmade ceramics and teach wheel throwing.”",
    "opts": [
     "Пример: «Делаю керамику ручной работы и учу лепить на круге»"
    ]
   }
  },
  {
   "id": "C03",
   "block": "Ядро",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "В какой это сфере?",
    "hint": "",
    "opts": [
     "Еда и напитки",
     "Красота и здоровье",
     "Мода и одежда",
     "Ремесло и handmade",
     "Образование",
     "IT и сервисы",
     "Культура и события",
     "Интерьер и недвижимость",
     "Другое"
    ]
   },
   "en": {
    "q": "What field is it in?",
    "hint": "",
    "opts": [
     "Food & drink",
     "Beauty & wellness",
     "Fashion & apparel",
     "Crafts & handmade",
     "Education",
     "Tech & services",
     "Culture & events",
     "Interiors & real estate",
     "Something else"
    ]
   }
  },
  {
   "id": "C04",
   "block": "Ядро",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Что ты продаёшь?",
    "hint": "Можно выбрать несколько.",
    "opts": [
     "Товары",
     "Услуги",
     "Обучение и мастер-классы",
     "Впечатления и события",
     "Подписка или абонемент",
     "Аренда",
     "Другое"
    ]
   },
   "en": {
    "q": "What do you sell?",
    "hint": "Pick as many as apply.",
    "opts": [
     "Products",
     "Services",
     "Classes & workshops",
     "Experiences & events",
     "Subscriptions or memberships",
     "Rentals",
     "Something else"
    ]
   }
  },
  {
   "id": "C05",
   "block": "Ядро",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "На какой стадии {brand} сейчас?",
    "hint": "",
    "opts": [
     "Пока идея",
     "Скоро запуск",
     "Работаем меньше года",
     "Работаем больше года",
     "Растём и масштабируемся"
    ]
   },
   "en": {
    "q": "Where is {brand} right now?",
    "hint": "",
    "opts": [
     "Still an idea",
     "Launching soon",
     "Running for under a year",
     "Running for over a year",
     "Growing and scaling"
    ]
   },
   "tags": [
    "STAGE_IDEA",
    "STAGE_LAUNCH",
    "STAGE_RUNNING",
    "STAGE_RUNNING",
    "STAGE_RUNNING"
   ]
  },
  {
   "id": "C06",
   "block": "Ядро",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Что происходит с брендом?",
    "hint": "",
    "opts": [
     "Создаём с нуля",
     "Бренд есть и устраивает, нужны новые материалы",
     "Хочу освежить то, что есть",
     "Нужен полный ребрендинг"
    ]
   },
   "en": {
    "q": "What’s happening with the brand?",
    "hint": "",
    "opts": [
     "Starting from scratch",
     "The brand is fine, I need new materials",
     "I want to refresh what I have",
     "I need a full rebrand"
    ]
   },
   "tags": [
    "NEW",
    "KEEP",
    "REFRESH",
    "REBRAND"
   ]
  },
  {
   "id": "C07",
   "block": "Ядро",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Почему именно сейчас?",
    "hint": "Обычно у такого решения есть повод. Выбери до двух.",
    "opts": [
     "Запускаюсь",
     "Выхожу на новый рынок",
     "Теряюсь среди конкурентов",
     "Бренд устарел",
     "Хочу других клиентов",
     "Ищу инвесторов или партнёров",
     "Изменился продукт",
     "Другое"
    ]
   },
   "en": {
    "q": "Why now?",
    "hint": "There’s usually a reason behind it. Pick up to two.",
    "opts": [
     "I’m launching",
     "Entering a new market",
     "Getting lost among competitors",
     "The brand feels dated",
     "I want different customers",
     "Looking for investors or partners",
     "The product has changed",
     "Something else"
    ]
   },
   "max": 2
  },
  {
   "id": "C08",
   "block": "Ядро",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Представь, что прошло полгода и всё получилось. Что изменилось?",
    "hint": "Выбери до двух.",
    "opts": [
     "Больше клиентов",
     "Клиенты платят больше",
     "Меня узнают",
     "Не стыдно показывать",
     "Проще продавать онлайн",
     "Другое"
    ]
   },
   "en": {
    "q": "Imagine it’s six months from now and it worked. What changed?",
    "hint": "Pick up to two.",
    "opts": [
     "More customers",
     "Customers pay more",
     "People recognise me",
     "I’m proud to show it",
     "Selling online is easier",
     "Something else"
    ]
   },
   "max": 2,
   "other": true
  },
  {
   "id": "C09",
   "block": "Ядро",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "А что для тебя будет означать, что проект не получился?",
    "hint": "Звучит странно, но такие ответы честнее всего показывают, чего ты на самом деле ждёшь. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "And what would make you say “this didn’t work”?",
    "hint": "Sounds odd, but it’s the most honest way to see what you really expect. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "C10",
   "block": "Ядро",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Что нужно сделать?",
    "hint": "Выбери всё, что нужно. От этого зависят следующие вопросы.",
    "opts": [
     "Логотип и айдентика",
     "Персонажи и иллюстрация",
     "Соцсети",
     "Сайт",
     "Упаковка и печать",
     "Мерч и одежда",
     "Интерьер, вывеска, ивент",
     "Не знаю, что мне нужно"
    ]
   },
   "en": {
    "q": "What do you need?",
    "hint": "Pick everything that applies. The next questions depend on it.",
    "opts": [
     "Logo & identity",
     "Characters & illustration",
     "Social media",
     "Website",
     "Packaging & print",
     "Merch & apparel",
     "Interior, signage, events",
     "Not sure what I need"
    ]
   },
   "tags": [
    "M_ID",
    "M_CH",
    "M_SO",
    "M_WEB",
    "M_PK",
    "M_MR",
    "M_SP",
    "UNSURE"
   ]
  },
  {
   "id": "C11",
   "block": "Ядро",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "unsure",
   "ru": {
    "q": "Ничего страшного, разберёмся вместе. Что сейчас мешает больше всего?",
    "hint": "Выбери до трёх, а на созвоне я предложу, с чего начать.",
    "opts": [
     "Меня не замечают",
     "Выгляжу несерьёзно",
     "Непонятно, чем я отличаюсь",
     "Неудобно продавать онлайн",
     "Нет единого стиля",
     "Стесняюсь своей упаковки или вывески",
     "Другое"
    ]
   },
   "en": {
    "q": "No problem, we’ll figure it out together. What’s getting in the way most right now?",
    "hint": "Pick up to three and I’ll suggest where to start on our call.",
    "opts": [
     "People don’t notice me",
     "I don’t look professional",
     "It’s unclear what makes me different",
     "Selling online is awkward",
     "Nothing looks consistent",
     "I’m embarrassed by my packaging or sign",
     "Something else"
    ]
   },
   "max": 3
  },
  {
   "id": "RB01",
   "block": "Ребрендинг",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "rb",
   "ru": {
    "q": "Что не так с брендом сейчас?",
    "hint": "Можно выбрать несколько.",
    "opts": [
     "Устарел",
     "Не отражает, кто я сейчас",
     "Выглядит дёшево",
     "Плохо читается",
     "Путают с конкурентами",
     "Просто не нравится",
     "Другое"
    ]
   },
   "en": {
    "q": "What’s not working about the brand now?",
    "hint": "Pick as many as apply.",
    "opts": [
     "It feels dated",
     "It’s not who I am anymore",
     "It looks cheap",
     "It’s hard to read",
     "People confuse it with competitors",
     "I just don’t like it",
     "Something else"
    ]
   }
  },
  {
   "id": "RB02",
   "block": "Ребрендинг",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "rb",
   "ru": {
    "q": "Что из этого точно нужно сохранить?",
    "hint": "То, что клиенты уже узнают, иногда жалко терять.",
    "opts": [
     "Название",
     "Цвет",
     "Знак или символ",
     "Шрифт",
     "Ничего, можно всё",
     "Другое"
    ]
   },
   "en": {
    "q": "What should definitely stay?",
    "hint": "Things customers already recognise can be worth keeping.",
    "opts": [
     "The name",
     "A colour",
     "The symbol",
     "The font",
     "Nothing, change it all",
     "Something else"
    ]
   }
  },
  {
   "id": "RB03",
   "block": "Ребрендинг",
   "type": "sliders",
   "deep": true,
   "req": false,
   "show": "rb",
   "ru": {
    "q": "Насколько далеко уходим от того, что есть?",
    "hint": "",
    "opts": [
     "Аккуратно освежить ↔ Совсем новый бренд"
    ]
   },
   "en": {
    "q": "How far should we move from what you have?",
    "hint": "",
    "opts": [
     "A gentle refresh ↔ A whole new brand"
    ]
   }
  },
  {
   "id": "RB05",
   "block": "Ребрендинг",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "rb",
   "ru": {
    "q": "Как клиенты описывают тебя своими словами?",
    "hint": "Можно цитатой из отзыва. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "How do customers describe you in their own words?",
    "hint": "A quote from a review works too. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "ID01",
   "block": "Логотип и айдентика",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "id",
   "ru": {
    "q": "Что входит в работу?",
    "hint": "Если сомневаешься, выбери «Посоветуй», обсудим на созвоне.",
    "opts": [
     "Логотип",
     "Цвета и шрифты",
     "Гайдлайн",
     "Визитки и бланки",
     "Шаблоны для соцсетей",
     "Иконка для сайта и приложений",
     "Посоветуй"
    ]
   },
   "en": {
    "q": "What should the work include?",
    "hint": "Not sure? Pick “Help me decide” and we’ll talk it through.",
    "opts": [
     "Logo",
     "Colours & fonts",
     "Brand guidelines",
     "Business cards & stationery",
     "Social media templates",
     "Website & app icon",
     "Help me decide"
    ]
   }
  },
  {
   "id": "ID02",
   "block": "Логотип и айдентика",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "id",
   "ru": {
    "q": "Где логотип будет появляться чаще всего?",
    "hint": "Логотип для вывески и для клейма на керамике рисуют по-разному.",
    "opts": [
     "Экран и соцсети",
     "Вывеска",
     "Упаковка",
     "Одежда",
     "Очень мелко: штамп, клеймо, гравировка",
     "Бумага и печать"
    ]
   },
   "en": {
    "q": "Where will the logo show up most?",
    "hint": "A logo for a shop sign and one for a ceramic stamp are drawn differently.",
    "opts": [
     "Screens & social",
     "Signage",
     "Packaging",
     "Clothing",
     "Very small: stamp, mark, engraving",
     "Paper & print"
    ]
   }
  },
  {
   "id": "ID03",
   "block": "Логотип и айдентика",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "id",
   "ru": {
    "q": "Какой логотип тебе ближе?",
    "hint": "",
    "opts": [
     "Знак и название",
     "Только название",
     "Буквы-монограмма",
     "Эмблема",
     "Доверяю тебе"
    ]
   },
   "en": {
    "q": "Which kind of logo feels closer to you?",
    "hint": "",
    "opts": [
     "Symbol + name",
     "Name only",
     "Monogram",
     "Emblem",
     "I trust you on this"
    ]
   }
  },
  {
   "id": "ID04",
   "block": "Логотип и айдентика",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "id",
   "ru": {
    "q": "Что значит название? Есть ли за ним история?",
    "hint": "Часто именно отсюда появляется идея знака. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "What does the name mean? Is there a story behind it?",
    "hint": "This is often where the logo idea comes from. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "ID05",
   "block": "Логотип и айдентика",
   "type": "short",
   "deep": true,
   "req": false,
   "show": "id",
   "ru": {
    "q": "Есть ли слоган?",
    "hint": "Если есть, напиши его. Если нет, пропускай.",
    "opts": []
   },
   "en": {
    "q": "Do you have a tagline?",
    "hint": "If so, write it here. If not, skip.",
    "opts": []
   }
  },
  {
   "id": "CH01",
   "block": "Персонажи и иллюстрация",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "ch",
   "ru": {
    "q": "Для чего нужны персонажи или иллюстрации?",
    "hint": "",
    "opts": [
     "Маскот бренда",
     "Соцсети",
     "Упаковка",
     "Стикеры и мерч",
     "Сайт",
     "Другое"
    ]
   },
   "en": {
    "q": "What are the characters or illustrations for?",
    "hint": "",
    "opts": [
     "Brand mascot",
     "Social media",
     "Packaging",
     "Stickers & merch",
     "Website",
     "Something else"
    ]
   }
  },
  {
   "id": "CH02",
   "block": "Персонажи и иллюстрация",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "ch",
   "ru": {
    "q": "Сколько их нужно?",
    "hint": "",
    "opts": [
     "Один персонаж",
     "2–5",
     "Серия иллюстраций",
     "Пока не знаю"
    ]
   },
   "en": {
    "q": "How many do you need?",
    "hint": "",
    "opts": [
     "One character",
     "2–5",
     "A series of illustrations",
     "Not sure yet"
    ]
   }
  },
  {
   "id": "CH03",
   "block": "Персонажи и иллюстрация",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "ch",
   "ru": {
    "q": "Какой стиль ближе?",
    "hint": "",
    "opts": [
     "Плоский",
     "Линейный",
     "Объёмный 3D",
     "Рисованный от руки",
     "Пиксель",
     "Странный и смешной"
    ]
   },
   "en": {
    "q": "Which style feels closer?",
    "hint": "",
    "opts": [
     "Flat",
     "Line",
     "3D",
     "Hand-drawn",
     "Pixel",
     "Weird and funny"
    ]
   }
  },
  {
   "id": "CH04",
   "block": "Персонажи и иллюстрация",
   "type": "sliders",
   "deep": true,
   "req": false,
   "show": "ch",
   "ru": {
    "q": "Какой у персонажа характер?",
    "hint": "Подвинь ползунки.",
    "opts": [
     "Милый ↔ Дерзкий",
     "Простой ↔ Детальный",
     "Спокойный ↔ Энергичный"
    ]
   },
   "en": {
    "q": "What’s the character like?",
    "hint": "Move the sliders.",
    "opts": [
     "Cute ↔ Cheeky",
     "Simple ↔ Detailed",
     "Calm ↔ Energetic"
    ]
   }
  },
  {
   "id": "SO01",
   "block": "Соцсети",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "so",
   "ru": {
    "q": "Где ты ведёшь соцсети?",
    "hint": "",
    "opts": [
     "Instagram",
     "TikTok",
     "Facebook",
     "LinkedIn",
     "YouTube",
     "Telegram",
     "Pinterest",
     "Пока нигде"
    ]
   },
   "en": {
    "q": "Where are you on social media?",
    "hint": "",
    "opts": [
     "Instagram",
     "TikTok",
     "Facebook",
     "LinkedIn",
     "YouTube",
     "Telegram",
     "Pinterest",
     "Nowhere yet"
    ]
   }
  },
  {
   "id": "SO02",
   "block": "Соцсети",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "so",
   "ru": {
    "q": "Что нужно для соцсетей?",
    "hint": "",
    "opts": [
     "Шаблоны постов",
     "Сторис",
     "Обложки для reels",
     "Иконки для хайлайтов",
     "Оформление профиля",
     "Контент-план"
    ]
   },
   "en": {
    "q": "What do you need for social media?",
    "hint": "",
    "opts": [
     "Post templates",
     "Stories",
     "Reels covers",
     "Highlight icons",
     "Profile design",
     "Content plan"
    ]
   }
  },
  {
   "id": "SO03",
   "block": "Соцсети",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "so",
   "ru": {
    "q": "Кто будет делать посты дальше?",
    "hint": "От этого зависит, в какой программе делать шаблоны и насколько простыми.",
    "opts": [
     "Буду делать я",
     "Моя команда",
     "SMM-специалист",
     "Хочу, чтобы это делал ты"
    ]
   },
   "en": {
    "q": "Who’ll make the posts after we’re done?",
    "hint": "This decides which tool the templates are built in and how simple they should be.",
    "opts": [
     "Me",
     "My team",
     "A social media manager",
     "I’d like you to do it"
    ]
   }
  },
  {
   "id": "SO04",
   "block": "Соцсети",
   "type": "links",
   "deep": true,
   "req": false,
   "show": "so",
   "ru": {
    "q": "Поделись ссылкой на свой аккаунт и на пару чужих, которые нравятся.",
    "hint": "Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Share a link to your account and a couple of others you like.",
    "hint": "Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "WEB01",
   "block": "Сайт",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "web",
   "ru": {
    "q": "Какой сайт нужен?",
    "hint": "",
    "opts": [
     "Одна страница",
     "Небольшой сайт, 3–5 страниц",
     "Интернет-магазин",
     "Портфолио",
     "Не знаю"
    ]
   },
   "en": {
    "q": "What kind of website do you need?",
    "hint": "",
    "opts": [
     "A single page",
     "A small site, 3–5 pages",
     "An online shop",
     "A portfolio",
     "Not sure"
    ]
   }
  },
  {
   "id": "WEB02",
   "block": "Сайт",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "web",
   "ru": {
    "q": "Что посетитель должен сделать на сайте в первую очередь?",
    "hint": "",
    "opts": [
     "Записаться",
     "Купить",
     "Написать мне",
     "Оставить заявку",
     "Посмотреть работы"
    ]
   },
   "en": {
    "q": "What’s the main thing a visitor should do on the site?",
    "hint": "",
    "opts": [
     "Book",
     "Buy",
     "Message me",
     "Send an enquiry",
     "Browse my work"
    ]
   }
  },
  {
   "id": "WEB03",
   "block": "Сайт",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "web",
   "ru": {
    "q": "Тексты и фото для сайта уже есть?",
    "hint": "Честный ответ здесь сильно помогает со сроками.",
    "opts": [
     "Да, всё есть",
     "Частично",
     "Нет, нужна помощь"
    ]
   },
   "en": {
    "q": "Do you already have the text and photos for the site?",
    "hint": "An honest answer here helps a lot with timing.",
    "opts": [
     "Yes, all of it",
     "Some of it",
     "No, I need help"
    ]
   }
  },
  {
   "id": "WEB05",
   "block": "Сайт",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "web",
   "ru": {
    "q": "На каких языках будет сайт?",
    "hint": "",
    "opts": [
     "Эстонский",
     "Английский",
     "Русский",
     "Другой"
    ]
   },
   "en": {
    "q": "Which languages will the site be in?",
    "hint": "",
    "opts": [
     "Estonian",
     "English",
     "Russian",
     "Other"
    ]
   }
  },
  {
   "id": "WEB06",
   "block": "Сайт",
   "type": "links",
   "deep": true,
   "req": false,
   "show": "web",
   "ru": {
    "q": "Есть сайты, которые тебе нравятся? Чем?",
    "hint": "Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Any websites you like? What do you like about them?",
    "hint": "Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "PK01",
   "block": "Упаковка и печать",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "pk",
   "ru": {
    "q": "Что будем печатать?",
    "hint": "",
    "opts": [
     "Упаковка товара",
     "Этикетки и наклейки",
     "Коробки",
     "Пакеты",
     "Меню",
     "Листовки и постеры",
     "Визитки"
    ]
   },
   "en": {
    "q": "What are we printing?",
    "hint": "",
    "opts": [
     "Product packaging",
     "Labels & stickers",
     "Boxes",
     "Bags",
     "Menus",
     "Flyers & posters",
     "Business cards"
    ]
   }
  },
  {
   "id": "PK02",
   "block": "Упаковка и печать",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "pk",
   "ru": {
    "q": "Сколько разных товаров или вариантов?",
    "hint": "",
    "opts": [
     "1",
     "2–5",
     "6–15",
     "Больше 15"
    ]
   },
   "en": {
    "q": "How many different products or versions?",
    "hint": "",
    "opts": [
     "1",
     "2–5",
     "6–15",
     "More than 15"
    ]
   }
  },
  {
   "id": "PK03",
   "block": "Упаковка и печать",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "pk",
   "ru": {
    "q": "Уже есть типография, материал или размеры?",
    "hint": "Если есть технические требования, загрузи их.",
    "opts": [
     "Да, загружу",
     "Частично",
     "Нет, нужна помощь"
    ]
   },
   "en": {
    "q": "Do you already have a printer, materials or sizes?",
    "hint": "If you have specs, upload them.",
    "opts": [
     "Yes, I’ll upload them",
     "Partly",
     "No, I need help"
    ]
   }
  },
  {
   "id": "PK04",
   "block": "Упаковка и печать",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "pk",
   "ru": {
    "q": "Где покупают твой товар?",
    "hint": "",
    "opts": [
     "В магазине на полке",
     "Онлайн",
     "На ярмарках",
     "В моей точке"
    ]
   },
   "en": {
    "q": "Where do people buy your product?",
    "hint": "",
    "opts": [
     "On a shop shelf",
     "Online",
     "At markets",
     "At my own place"
    ]
   }
  },
  {
   "id": "PK05",
   "block": "Упаковка и печать",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "pk",
   "ru": {
    "q": "Есть особые требования?",
    "hint": "Можно пропустить.",
    "opts": [
     "Экологичность",
     "Тиснение или фольга",
     "Крафт",
     "Обязательная информация (состав, штрихкод)"
    ]
   },
   "en": {
    "q": "Any special requirements?",
    "hint": "Feel free to skip.",
    "opts": [
     "Eco-friendly",
     "Embossing or foil",
     "Kraft",
     "Required info (ingredients, barcode)"
    ]
   },
   "other": true
  },
  {
   "id": "MR01",
   "block": "Мерч и одежда",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "mr",
   "ru": {
    "q": "Что делаем?",
    "hint": "",
    "opts": [
     "Футболки",
     "Худи",
     "Шопперы",
     "Кепки",
     "Посуда",
     "Стикеры",
     "Другое"
    ]
   },
   "en": {
    "q": "What are we making?",
    "hint": "",
    "opts": [
     "T-shirts",
     "Hoodies",
     "Tote bags",
     "Caps",
     "Tableware",
     "Stickers",
     "Something else"
    ]
   }
  },
  {
   "id": "MR02",
   "block": "Мерч и одежда",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "mr",
   "ru": {
    "q": "Для чего мерч?",
    "hint": "",
    "opts": [
     "Продавать",
     "Для команды",
     "В подарок клиентам",
     "Для события"
    ]
   },
   "en": {
    "q": "What’s the merch for?",
    "hint": "",
    "opts": [
     "To sell",
     "For my team",
     "Gifts for customers",
     "For an event"
    ]
   }
  },
  {
   "id": "MR03",
   "block": "Мерч и одежда",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "mr",
   "ru": {
    "q": "Какой примерно тираж?",
    "hint": "От тиража зависит, как будем наносить рисунок.",
    "opts": [
     "До 50",
     "50–200",
     "Больше 200",
     "Пока не знаю"
    ]
   },
   "en": {
    "q": "Roughly how many pieces?",
    "hint": "Quantity decides the printing method.",
    "opts": [
     "Under 50",
     "50–200",
     "Over 200",
     "Not sure yet"
    ]
   }
  },
  {
   "id": "MR04",
   "block": "Мерч и одежда",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "mr",
   "ru": {
    "q": "Знаешь, как будем наносить?",
    "hint": "",
    "opts": [
     "Шелкография",
     "Вышивка",
     "Цифровая печать",
     "Не знаю"
    ]
   },
   "en": {
    "q": "Do you know how it’ll be applied?",
    "hint": "",
    "opts": [
     "Screen print",
     "Embroidery",
     "Digital print",
     "Not sure"
    ]
   }
  },
  {
   "id": "SP01",
   "block": "Пространство и ивент",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "sp",
   "ru": {
    "q": "Что оформляем?",
    "hint": "",
    "opts": [
     "Вывеску",
     "Интерьер и стены",
     "Навигацию",
     "Стенд или выставку",
     "Событие"
    ]
   },
   "en": {
    "q": "What are we designing?",
    "hint": "",
    "opts": [
     "A sign",
     "Interior & walls",
     "Wayfinding",
     "A stand or exhibition",
     "An event"
    ]
   }
  },
  {
   "id": "SP02",
   "block": "Пространство и ивент",
   "type": "files",
   "deep": true,
   "req": false,
   "show": "sp",
   "ru": {
    "q": "Загрузи фото места и размеры, если есть.",
    "hint": "Можно пропустить, но с фото я оценю точнее.",
    "opts": []
   },
   "en": {
    "q": "Upload photos of the space and measurements, if you have them.",
    "hint": "Optional, but photos help me estimate better.",
    "opts": []
   }
  },
  {
   "id": "SP03",
   "block": "Пространство и ивент",
   "type": "date",
   "deep": false,
   "req": true,
   "show": "sp",
   "ru": {
    "q": "Когда открытие или событие?",
    "hint": "",
    "opts": []
   },
   "en": {
    "q": "When is the opening or event?",
    "hint": "",
    "opts": []
   }
  },
  {
   "id": "SP04",
   "block": "Пространство и ивент",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "sp",
   "ru": {
    "q": "Подрядчики на производство уже есть?",
    "hint": "",
    "opts": [
     "Есть",
     "Нет, нужна помощь"
    ]
   },
   "en": {
    "q": "Do you already have someone to produce it?",
    "hint": "",
    "opts": [
     "Yes",
     "No, I need help"
    ]
   }
  },
  {
   "id": "EX01",
   "block": "Что уже есть",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "brand",
   "ru": {
    "q": "Что у тебя уже есть?",
    "hint": "Отметь всё, что есть, даже если тебе это не нравится.",
    "opts": [
     "Логотип",
     "Цвета",
     "Шрифты",
     "Гайдлайн",
     "Сайт",
     "Соцсети",
     "Фото",
     "Упаковка",
     "Домен",
     "Пока ничего"
    ]
   },
   "en": {
    "q": "What do you already have?",
    "hint": "Tick everything, even the things you don’t like.",
    "opts": [
     "Logo",
     "Colours",
     "Fonts",
     "Brand guidelines",
     "Website",
     "Social media",
     "Photos",
     "Packaging",
     "Domain",
     "Nothing yet"
    ]
   },
   "tagsByIndex": {
    "3": "HAS_GUIDE"
   }
  },
  {
   "id": "EX02",
   "block": "Что уже есть",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "guide",
   "ru": {
    "q": "Гайдлайну нужно следовать строго?",
    "hint": "",
    "opts": [
     "Да, строго",
     "Можно отступать"
    ]
   },
   "en": {
    "q": "Do we need to follow the guidelines strictly?",
    "hint": "",
    "opts": [
     "Yes, strictly",
     "There’s room to play"
    ]
   },
   "tags": [
    "STRICT_GUIDE",
    null
   ]
  },
  {
   "id": "EX03",
   "block": "Что уже есть",
   "type": "files",
   "deep": false,
   "req": false,
   "show": "brand",
   "ru": {
    "q": "Загрузи файлы или поделись ссылками.",
    "hint": "Картинки и PDF до 10 МБ. Видео и тяжёлые файлы лучше ссылкой. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Upload files or share links.",
    "hint": "Images and PDFs up to 10 MB. Videos and big files work better as links. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "EX04",
   "block": "Что уже есть",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "brand",
   "ru": {
    "q": "Исходники и доступы у тебя?",
    "hint": "",
    "opts": [
     "Векторный логотип",
     "Доступ к соцсетям",
     "Доступ к сайту и домену",
     "Ничего из этого"
    ]
   },
   "en": {
    "q": "Do you have the source files and logins?",
    "hint": "",
    "opts": [
     "Vector logo",
     "Social media logins",
     "Website & domain access",
     "None of these"
    ]
   }
  },
  {
   "id": "AU01",
   "block": "Аудитория",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "au",
   "ru": {
    "q": "Сколько лет твоим клиентам?",
    "hint": "Можно выбрать несколько.",
    "opts": [
     "До 18",
     "18–24",
     "25–34",
     "35–44",
     "45–54",
     "55+"
    ]
   },
   "en": {
    "q": "How old are your customers?",
    "hint": "Pick as many as apply.",
    "opts": [
     "Under 18",
     "18–24",
     "25–34",
     "35–44",
     "45–54",
     "55+"
    ]
   }
  },
  {
   "id": "AU02",
   "block": "Аудитория",
   "type": "text",
   "deep": false,
   "req": true,
   "show": "au",
   "ru": {
    "q": "Расскажи о своём типичном клиенте.",
    "hint": "Кто он, чем живёт, почему пришёл именно к тебе. Пара предложений.",
    "opts": []
   },
   "en": {
    "q": "Tell me about your typical customer.",
    "hint": "Who they are, what their life is like, why they came to you. A couple of sentences.",
    "opts": []
   }
  },
  {
   "id": "AU03",
   "block": "Аудитория",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "au",
   "ru": {
    "q": "Почему выбирают тебя, а не соседей?",
    "hint": "Можно пропустить, если сложно сформулировать.",
    "opts": []
   },
   "en": {
    "q": "Why do people choose you over others?",
    "hint": "Feel free to skip if it’s hard to put into words.",
    "opts": []
   }
  },
  {
   "id": "AU04",
   "block": "Аудитория",
   "type": "multi",
   "deep": false,
   "req": true,
   "show": "au",
   "ru": {
    "q": "Где люди встречают твой бренд?",
    "hint": "Отметь все места, где тебя видят.",
    "opts": [
     "Instagram",
     "Сайт",
     "Вывеска на улице",
     "Полка в магазине",
     "Ярмарки",
     "Сарафанное радио",
     "В самом изделии: упаковка, клеймо"
    ]
   },
   "en": {
    "q": "Where do people come across your brand?",
    "hint": "Tick every place people see you.",
    "opts": [
     "Instagram",
     "Website",
     "A street sign",
     "A shop shelf",
     "Markets",
     "Word of mouth",
     "On the product itself: packaging, a stamp"
    ]
   }
  },
  {
   "id": "AU05",
   "block": "Аудитория",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "au",
   "ru": {
    "q": "А кто точно не твой клиент?",
    "hint": "Иногда это описать проще, чем идеального. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "And who is definitely not your customer?",
    "hint": "Sometimes that’s easier to describe. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "AU06",
   "block": "Аудитория",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "au",
   "ru": {
    "q": "Где живут твои клиенты?",
    "hint": "",
    "opts": [
     "Мой город",
     "Эстония",
     "Европа",
     "Онлайн по всему миру"
    ]
   },
   "en": {
    "q": "Where are your customers?",
    "hint": "",
    "opts": [
     "My city",
     "Estonia",
     "Europe",
     "Online, worldwide"
    ]
   }
  },
  {
   "id": "AU07",
   "block": "Аудитория",
   "type": "links",
   "deep": true,
   "req": false,
   "show": "au",
   "ru": {
    "q": "Назови 2–3 конкурентов или похожих брендов.",
    "hint": "Ссылки или названия. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Name 2–3 competitors or similar brands.",
    "hint": "Links or names. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "VD01",
   "block": "Визуальное направление",
   "type": "sliders",
   "deep": false,
   "req": true,
   "show": "vdf",
   "ru": {
    "q": "Каким должен ощущаться {brand}?",
    "hint": "Подвинь ползунки. Правильных ответов нет.",
    "opts": [
     "Классический ↔ Современный",
     "Серьёзный ↔ Игривый",
     "Доступный ↔ Премиальный",
     "Тихий ↔ Громкий",
     "Минимализм ↔ Эклектика"
    ]
   },
   "en": {
    "q": "How should {brand} feel?",
    "hint": "Move the sliders. There are no wrong answers.",
    "opts": [
     "Classic ↔ Modern",
     "Serious ↔ Playful",
     "Accessible ↔ Premium",
     "Quiet ↔ Loud",
     "Minimal ↔ Eclectic"
    ]
   }
  },
  {
   "id": "VD02",
   "block": "Визуальное направление",
   "type": "multi",
   "deep": true,
   "req": false,
   "show": "vdf",
   "ru": {
    "q": "Выбери три слова, которые про тебя.",
    "hint": "Ровно три: так проще понять, что главное.",
    "opts": [
     "Тёплый",
     "Дерзкий",
     "Честный",
     "Премиальный",
     "Уютный",
     "Смелый",
     "Спокойный",
     "Технологичный",
     "Ремесленный",
     "Дружелюбный",
     "Строгий",
     "Странный"
    ]
   },
   "en": {
    "q": "Pick three words that sound like you.",
    "hint": "Exactly three, so we can see what matters most.",
    "opts": [
     "Warm",
     "Bold",
     "Honest",
     "Premium",
     "Cosy",
     "Daring",
     "Calm",
     "Techy",
     "Handmade",
     "Friendly",
     "Strict",
     "Weird"
    ]
   },
   "exact": 3
  },
  {
   "id": "VD03",
   "block": "Визуальное направление",
   "type": "palettes",
   "deep": true,
   "req": false,
   "show": "vdf",
   "ru": {
    "q": "Какие палитры тебе ближе?",
    "hint": "Выбери до двух.",
    "opts": [
     "8 палитр-настроений"
    ]
   },
   "en": {
    "q": "Which palettes feel closer?",
    "hint": "Pick up to two.",
    "opts": [
     "8 mood palettes"
    ]
   },
   "max": 2
  },
  {
   "id": "VD04",
   "block": "Визуальное направление",
   "type": "pairs",
   "deep": true,
   "req": false,
   "show": "vdf",
   "ru": {
    "q": "Это или то?",
    "hint": "Не думай долго, выбирай первое, что нравится.",
    "opts": [
     "4 пары картинок"
    ]
   },
   "en": {
    "q": "This or that?",
    "hint": "Don’t overthink it, go with your gut.",
    "opts": [
     "4 pairs of images"
    ]
   }
  },
  {
   "id": "VD05",
   "block": "Визуальное направление",
   "type": "fonts",
   "deep": true,
   "req": false,
   "show": "vdf",
   "ru": {
    "q": "Какие шрифты ближе?",
    "hint": "",
    "opts": [
     "6 образцов"
    ]
   },
   "en": {
    "q": "Which fonts feel closer?",
    "hint": "",
    "opts": [
     "6 samples"
    ]
   }
  },
  {
   "id": "VD06",
   "block": "Визуальное направление",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "vdf",
   "ru": {
    "q": "Если бы {brand} был человеком, как бы он провёл вечер пятницы?",
    "hint": "Странный вопрос, но он отлично показывает характер. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "If {brand} were a person, how would they spend Friday night?",
    "hint": "A strange question, but it shows character really well. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "VD07",
   "block": "Визуальное направление",
   "type": "files",
   "deep": false,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Покажи, что тебе нравится.",
    "hint": "Картинки, ссылки, Pinterest-доска. Не обязательно из твоей сферы. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Show me what you like.",
    "hint": "Images, links, a Pinterest board. They don’t have to be from your field. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "VD08",
   "block": "Визуальное направление",
   "type": "text_files",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "А чего точно не хочется?",
    "hint": "Цвета, стили, примеры, которые не нравятся. Это экономит нам кучу времени.",
    "opts": []
   },
   "en": {
    "q": "And what do you definitely not want?",
    "hint": "Colours, styles, examples you don’t like. This saves us a lot of time.",
    "opts": []
   }
  },
  {
   "id": "W01",
   "block": "Финал",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Когда это нужно?",
    "hint": "Если есть точная дата, её можно указать ниже.",
    "opts": [
     "Срочно, в течение 2 недель",
     "В течение месяца",
     "Через 2–3 месяца",
     "Не спешу"
    ]
   },
   "en": {
    "q": "When do you need it?",
    "hint": "If there’s a fixed date, you can add it below.",
    "opts": [
     "Urgently, within 2 weeks",
     "Within a month",
     "In 2–3 months",
     "No rush"
    ]
   }
  },
  {
   "id": "W02",
   "block": "Финал",
   "type": "date_text",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Есть точная дата? Что к ней привязано?",
    "hint": "Например, открытие или запуск. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "Is there a fixed date? What’s tied to it?",
    "hint": "An opening or a launch, for example. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "W03",
   "block": "Финал",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Какой бюджет для тебя комфортен?",
    "hint": "Это поможет предложить подходящий объём работ.",
    "opts": [
     "€100–200",
     "€200–350",
     "€350–500",
     "€500+",
     "Другая сумма"
    ]
   },
   "en": {
    "q": "What budget feels comfortable?",
    "hint": "This helps me suggest the right scope.",
    "opts": [
     "€100–200",
     "€200–350",
     "€350–500",
     "€500+",
     "A different amount"
    ]
   }
  },
  {
   "id": "W04",
   "block": "Финал",
   "type": "single",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Кто принимает решение по дизайну?",
    "hint": "",
    "opts": [
     "Только я",
     "Я и партнёр",
     "Команда или совет"
    ]
   },
   "en": {
    "q": "Who makes the design decisions?",
    "hint": "",
    "opts": [
     "Just me",
     "Me and a partner",
     "A team or a board"
    ]
   }
  },
  {
   "id": "W05",
   "block": "Финал",
   "type": "single",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Сколько кругов правок кажется тебе нормальным?",
    "hint": "",
    "opts": [
     "1",
     "2",
     "3",
     "Не знаю"
    ]
   },
   "en": {
    "q": "How many rounds of changes feel normal to you?",
    "hint": "",
    "opts": [
     "1",
     "2",
     "3",
     "Not sure"
    ]
   }
  },
  {
   "id": "W06",
   "block": "Финал",
   "type": "text",
   "deep": true,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Что я не спросил, а стоило бы?",
    "hint": "Всё, что кажется важным. Можно пропустить.",
    "opts": []
   },
   "en": {
    "q": "What didn’t I ask that I should have?",
    "hint": "Anything that feels important. Feel free to skip.",
    "opts": []
   }
  },
  {
   "id": "W07",
   "block": "Финал",
   "type": "contact",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Почти всё! Куда прислать копию брифа и как с тобой связаться?",
    "hint": "На почту придёт письмо со всеми ответами.",
    "opts": [
     "Email",
     "Telegram",
     "WhatsApp",
     "Instagram",
     "Телефон"
    ]
   },
   "en": {
    "q": "Almost done! Where should I send a copy of your brief, and how can I reach you?",
    "hint": "You’ll get an email with all your answers.",
    "opts": [
     "Email",
     "Telegram",
     "WhatsApp",
     "Instagram",
     "Phone"
    ]
   }
  },
  {
   "id": "W08",
   "block": "Финал",
   "type": "single",
   "deep": false,
   "req": false,
   "show": "all",
   "ru": {
    "q": "Откуда ты обо мне знаешь?",
    "hint": "",
    "opts": [
     "Instagram",
     "Посоветовали",
     "Behance или Dribbble",
     "Поиск",
     "Другое"
    ]
   },
   "en": {
    "q": "How did you hear about me?",
    "hint": "",
    "opts": [
     "Instagram",
     "A recommendation",
     "Behance or Dribbble",
     "Search",
     "Somewhere else"
    ]
   }
  },
  {
   "id": "W09",
   "block": "Финал",
   "type": "consent",
   "deep": false,
   "req": true,
   "show": "all",
   "ru": {
    "q": "Даю согласие на обработку моих данных для работы над проектом.",
    "hint": "Подробнее в политике конфиденциальности.",
    "opts": []
   },
   "en": {
    "q": "I agree to my data being processed to work on this project.",
    "hint": "More in the privacy policy.",
    "opts": []
   }
  }
 ],
 "blocks": [
  {
   "ru": "Ядро",
   "intro_ru": "Для начала пара слов о тебе и бизнесе.",
   "intro_en": "First, a few words about you and your business."
  },
  {
   "ru": "Ребрендинг",
   "intro_ru": "Теперь о том, что есть сейчас.",
   "intro_en": "Now, about what you have today."
  },
  {
   "ru": "Логотип и айдентика",
   "intro_ru": "Поговорим о логотипе.",
   "intro_en": "Let’s talk about the logo."
  },
  {
   "ru": "Персонажи и иллюстрация",
   "intro_ru": "Теперь о персонажах.",
   "intro_en": "Now, the characters."
  },
  {
   "ru": "Соцсети",
   "intro_ru": "Пара вопросов про соцсети.",
   "intro_en": "A couple of questions about social media."
  },
  {
   "ru": "Сайт",
   "intro_ru": "Теперь о сайте.",
   "intro_en": "Now, the website."
  },
  {
   "ru": "Упаковка и печать",
   "intro_ru": "Перейдём к упаковке и печати.",
   "intro_en": "On to packaging and print."
  },
  {
   "ru": "Мерч и одежда",
   "intro_ru": "Немного про мерч.",
   "intro_en": "A bit about merch."
  },
  {
   "ru": "Пространство и ивент",
   "intro_ru": "Теперь о месте или событии.",
   "intro_en": "Now, about the space or event."
  },
  {
   "ru": "Что уже есть",
   "intro_ru": "Посмотрим, с чем работаем.",
   "intro_en": "Let’s see what we’re working with."
  },
  {
   "ru": "Аудитория",
   "intro_ru": "Расскажи о людях, для которых всё это.",
   "intro_en": "Tell me about the people this is for."
  },
  {
   "ru": "Визуальное направление",
   "intro_ru": "А теперь самое интересное: каким {brand} должен выглядеть.",
   "intro_en": "Now the fun part: how {brand} should look."
  },
  {
   "ru": "Финал",
   "intro_ru": "Последний рывок: сроки и детали.",
   "intro_en": "Final stretch: timing and details."
  }
 ],
 "ui": {
  "intro.title": {
   "ru": "Привет! Я Даниил из OKOLO.",
   "en": "Hi! I’m Daniil from OKOLO."
  },
  "intro.body": {
   "ru": "Задам несколько вопросов о тебе и твоём бренде, чтобы на первом созвоне мы сразу говорили о главном. Отвечай как есть: здесь нет неправильных ответов.",
   "en": "I’ll ask you a few questions about you and your brand, so our first call can get straight to what matters. Answer however feels natural: there are no wrong answers here."
  },
  "intro.cta": {
   "ru": "Начнём",
   "en": "Let’s start"
  },
  "btn.next": {
   "ru": "Дальше",
   "en": "Next"
  },
  "btn.back": {
   "ru": "Назад",
   "en": "Back"
  },
  "btn.skip": {
   "ru": "Пропустить",
   "en": "Skip"
  },
  "btn.save": {
   "ru": "Сохранить и закончить позже",
   "en": "Save and finish later"
  },
  "btn.submit": {
   "ru": "Отправить бриф",
   "en": "Send my brief"
  },
  "mode.switch": {
   "ru": "Перейти в подробный режим",
   "en": "Switch to detailed mode"
  },
  "progress": {
   "ru": "Шаг {n} из {total}",
   "en": "Step {n} of {total}"
  },
  "optional": {
   "ru": "можно пропустить",
   "en": "optional"
  },
  "err.required": {
   "ru": "Ответь, пожалуйста, на этот вопрос, чтобы идти дальше.",
   "en": "Please answer this one to continue."
  },
  "err.email": {
   "ru": "Кажется, в почте опечатка. Проверь, пожалуйста.",
   "en": "Looks like there’s a typo in the email. Mind checking it?"
  },
  "err.max": {
   "ru": "Здесь можно выбрать не больше {max}.",
   "en": "You can pick up to {max} here."
  },
  "err.exact": {
   "ru": "Выбери ровно {n}.",
   "en": "Pick exactly {n}."
  },
  "err.file_size": {
   "ru": "Файл больше 10 МБ. Загрузи его на Google Drive или WeTransfer и вставь ссылку.",
   "en": "This file is over 10 MB. Upload it to Google Drive or WeTransfer and paste the link instead."
  },
  "err.file_type": {
   "ru": "Этот формат не загрузится. Подойдут JPG, PNG, WEBP, SVG и PDF.",
   "en": "This format won’t upload. JPG, PNG, WEBP, SVG and PDF work."
  },
  "err.send": {
   "ru": "Не получилось отправить. Ответы сохранены, попробуй ещё раз через минуту.",
   "en": "Couldn’t send it. Your answers are saved, try again in a minute."
  },
  "many_modules": {
   "ru": "Ого, большой проект! Подробный бриф по всем пунктам займёт больше 30 минут. Предлагаю пройти быстрый, а детали обсудим на созвоне.",
   "en": "That’s a big project! A detailed brief for all of this would take over 30 minutes. Let’s do the quick one and cover the details on a call."
  },
  "many_modules.yes": {
   "ru": "Давай быстрый",
   "en": "Quick one it is"
  },
  "many_modules.no": {
   "ru": "Хочу подробно",
   "en": "I’ll go detailed"
  },
  "save.title": {
   "ru": "Сохраним твои ответы",
   "en": "Let’s save your answers"
  },
  "save.body": {
   "ru": "Пришлю ссылку на почту, по ней можно продолжить с того же места.",
   "en": "I’ll email you a link so you can pick up where you left off."
  },
  "save.done": {
   "ru": "Готово! Ссылка уже в почте.",
   "en": "Done! The link is in your inbox."
  },
  "final.title": {
   "ru": "Спасибо, {name}! Бриф у меня.",
   "en": "Thanks, {name}! I’ve got your brief."
  },
  "final.body": {
   "ru": "Я отправил копию твоих ответов на {email}. В течение 3 рабочих дней я напишу тебе, чтобы договориться о созвоне. Если письма нет, загляни в «Спам».",
   "en": "I’ve sent a copy of your answers to {email}. I’ll get in touch within 3 working days to set up a call. If you don’t see the email, check your spam folder."
  },
  "final.sign": {
   "ru": "OKOLO",
   "en": "OKOLO"
  },
  "email.subject": {
   "ru": "Твой бриф для OKOLO: {brand}",
   "en": "Your OKOLO brief: {brand}"
  },
  "email.body": {
   "ru": "Привет, {name}!\n\nСпасибо за бриф! Ниже все твои ответы, чтобы они были под рукой.\n\nЧто дальше: в течение 3 рабочих дней я напишу тебе в {channel}, и мы договоримся о времени для созвона. На нём обсудим задачу, объём работ и сроки.\n\nЕсли захочешь что-то добавить или поправить, просто ответь на это письмо.\n\n{answers}\n\nДо связи,\nOKOLO",
   "en": "Hi {name}!\n\nThanks for filling in the brief. All your answers are below so you have them to hand.\n\nWhat happens next: within 3 working days I’ll message you on {channel} so we can find a time for a call. We’ll go over the task, the scope and the timeline.\n\nIf you’d like to add or change anything, just reply to this email.\n\n{answers}\n\nTalk soon,\nOKOLO"
  },
  "email.owner_subject": {
   "ru": "Новый бриф: {brand} · {modules} · {budget}",
   "en": "New brief: {brand} · {modules} · {budget}"
  }
 },
 "personas": [
  {
   "name": "Гончарная студия, новый бренд, подробно",
   "tags": [
    "DEEP",
    "NEW",
    "STAGE_RUNNING",
    "M_ID",
    "M_SO",
    "M_MR"
   ]
  },
  {
   "name": "Кофейня, ребрендинг, быстро",
   "tags": [
    "QUICK",
    "REBRAND",
    "STAGE_RUNNING",
    "M_SO",
    "M_SP",
    "M_PK"
   ]
  },
  {
   "name": "Кофейня, ребрендинг, подробно",
   "tags": [
    "DEEP",
    "REBRAND",
    "STAGE_RUNNING",
    "M_SO",
    "M_SP",
    "M_PK",
    "HAS_GUIDE"
   ]
  },
  {
   "name": "IT-стартап, сайт и логотип, быстро",
   "tags": [
    "QUICK",
    "NEW",
    "STAGE_LAUNCH",
    "M_WEB",
    "M_ID"
   ]
  },
  {
   "name": "«Не знаю, что нужно», быстро",
   "tags": [
    "QUICK",
    "NEW",
    "STAGE_LAUNCH",
    "UNSURE"
   ]
  },
  {
   "name": "Мерч по строгому гайду, быстро",
   "tags": [
    "QUICK",
    "KEEP",
    "STAGE_RUNNING",
    "M_MR",
    "HAS_GUIDE",
    "STRICT_GUIDE"
   ]
  },
  {
   "name": "Максимум: всё выбрано, ребрендинг, подробно",
   "tags": [
    "DEEP",
    "REBRAND",
    "STAGE_RUNNING",
    "M_ID",
    "M_CH",
    "M_SO",
    "M_WEB",
    "M_PK",
    "M_MR",
    "M_SP"
   ]
  }
 ]
};
