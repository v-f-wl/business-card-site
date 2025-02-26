const portfolioList = [
  {
    id: '1',
    title:{
      en:'PHP Developer',
      ru: 'PHP Разработчик',
    },
    companyName: 'Cheff Kitchen',
    interval:{
      en: 'Feb 2023- Nov 2024',
      ru: 'Фев 2023- Ноя 2024'
    },
    shortDescription:{
      en:'The app for a meal delivery service',
      ru: 'Приложение для сервиса доставки готовых рационов',
    },
    aboutProject: {
    "en": "<p>I developed an app for a daily meal delivery service. As part of the project, I completed the following tasks:</p><ul><li><strong>Page layout:</strong> Implemented the design and ensured its responsiveness for various devices.</li><li><strong>Cross-browser testing:</strong> Conducted tests to guarantee compatibility across different browsers.</li><li><strong>Tech stack:</strong> Utilized PHP, the Laravel framework, and Livewire to simplify component-based development.</li><li><strong>Enhanced logic:</strong> Used JavaScript to improve functionality.</li><li><strong>Styling:</strong> Created flexible and modular styles with SCSS.</li></ul><p><em>* The company&apos;s policy changed, and they redesigned the site, so I provide screenshots of previous versions to showcase my work.</em></p>",
    "ru": "<p>Я разработал приложение для сервиса доставки готовых рационов на день. В рамках проекта я выполнил следующие задачи:</p><ul><li><strong>Верстка страницы:</strong> Реализовал дизайн и обеспечил адаптивность для различных устройств.</li><li><strong>Кроссбраузерное тестирование:</strong> Провел тестирование для обеспечения совместимости в разных браузерах.</li><li><strong>Технологический стек:</strong> Использовал PHP, фреймворк Laravel, а также Livewire для упрощения работы с компонентами.</li><li><strong>Улучшенная логика:</strong> Добавил функциональность с помощью JavaScript.</li><li><strong>Стилизация:</strong> Реализовал гибкие и модульные стили с использованием SCSS.</li></ul><p><em>* Политика компании изменилась, и они переделали сайт, поэтому предоставляю скриншоты прошлых версий, чтобы продемонстрировать выполненную мной работу.</em></p>"
    },
    technologies: ['PHP', 'JavaScript','React' ,'SQL', 'Laravel', 'Livewire', 'SCSS'],
    links: [
      {
        title: {
          en: 'Visit Website',
          ru: 'Посетить сайт'
        },
        url: 'https://chef-kitchen.com/'
      },
      {
        title: {
          en: 'Google drive with screenshots of first version',
          ru: 'Google диск со скриншотами первой версии'
        },
        url: 'https://drive.google.com/drive/folders/1JLwDJ2zP2g2DaUsW8qJ3cFEg4fxOFNRb?usp=drive_link'
      },
      {
        title: {
          en: 'Google drive with screenshots of second version',
          ru: 'Google диск со скриншотами второй версии'
        },
        url: 'https://drive.google.com/drive/folders/108pY97lgcoRIOGy_KviEpAgIK_tVHUsa?usp=drive_link'
      },
    ],
    isPetProject: false,
  },
  {
    id: '5',
    title:{
      en:'Frontend/React Developer',
      ru: 'Frontend/React Разработчик',
    },
    companyName: 'Prosto Coworking',
    interval:{
      en: 'Mar 2022- Dec 2023',
      ru: 'Мар 2022- Дек 2024'
    },
    shortDescription: {
      en: "Personal account dashboard for a coworking space",
      ru: "Личный кабинет для коворкинга",
    },
    aboutProject: {
      en: `<p>I developed a personal account dashboard for a coworking space. As part of the project, I completed the following tasks:</p>
      <ul>
        <li><strong>Dashboard development:</strong> Built an intuitive and user-friendly interface using React.</li>
        <li><strong>Authentication and profile management:</strong> Implemented user authentication and profile settings with dynamic data updates via API.</li>
        <li><strong>Performance optimization:</strong> Minimized unnecessary re-renders and implemented caching strategies to improve responsiveness.</li>
        <li><strong>Adaptive design:</strong> Ensured correct display on various devices and browsers.</li>
        <li><strong>Styling:</strong> Used SCSS to create a modular and maintainable style structure.</li>
      </ul>
      <p><em>* The coworking space later updated its system, but I provide screenshots of the previous version to showcase my work.</em></p>`,
    
      ru: `<p>Я разработал личный кабинет для коворкинга. В рамках проекта я выполнил следующие задачи:</p>
      <ul>
        <li><strong>Разработка личного кабинета:</strong> Создал удобный и интуитивно понятный интерфейс на React.</li>
        <li><strong>Аутентификация и управление профилем:</strong> Реализовал авторизацию и настройку профиля пользователей с динамическим обновлением данных через API.</li>
        <li><strong>Оптимизация производительности:</strong> Минимизировал лишние ререндеры и использовал кеширование для повышения отзывчивости интерфейса.</li>
        <li><strong>Адаптивная верстка:</strong> Обеспечил корректное отображение на различных устройствах и в разных браузерах.</li>
        <li><strong>Стилизация:</strong> Использовал SCSS для создания модульной и удобной в поддержке структуры стилей.</li>
      </ul>
      <p><em>* Позже система коворкинга была обновлена, но я предоставляю скриншоты предыдущей версии для демонстрации выполненной работы.</em></p>`
    },
    technologies: ['PHP', 'JavaScript','React' ,'SQL', 'Laravel', 'Livewire', 'SCSS'],
    links: [
      {
        title: {
          en: 'Visit Website',
          ru: 'Посетить сайт'
        },
        url: 'https://www.prostospb.team/'
      }
    ],
    isPetProject: false,
  },
  {
    id: '2',
    title:{
      en:'React/Next.js Developer',
      ru: 'React/Next.js Разработчик',
    },
    companyName: 'Pet Project',
    interval:{
      en: '2023',
      ru: '2023'
    },
    shortDescription:{
      en:'The app for creating and taking tests',
      ru: 'Приложение для создания и прохождения тестов',
    },
    aboutProject: {
      en:'This application allows users to create and take tests, as well as analyze their results. Key features:</p><ul><li><strong>Account creation:</strong> Register to create and save your tests.</li><li><strong>Test creation:</strong> Develop interesting and educational tests on various topics with multiple-choice answers.</li><li><strong>Taking tests:</strong> Take tests and check your knowledge.</li><li><strong>Test analytics:</strong> The app provides insights, such as the number of views, started tests, and successfully completed tests.</li><li><strong>Test evaluation:</strong> Users can leave reviews and ratings after completing tests.</li></ul>',
      ru: 'Это приложение предоставляет пользователям возможность создавать и проходить тесты, а также анализировать их результаты. Основные функции:</p><ul><li><strong>Создание своего аккаунта:</strong> Зарегистрируйтесь, чтобы создавать и сохранять свои тесты.</li><li><strong>Создание тестов:</strong> Создавайте интересные и образовательные тесты на различные темы с вариантами ответов.</li><li><strong>Прохождение тестов:</strong> Проходите тесты и проверяйте свои знания.</li><li><strong>Аналитика тестов:</strong> Приложение предоставляет информацию о тестах: количество просмотров, начатых и успешно завершенных тестов.</li><li><strong>Оценка тестов:</strong> Пользователи могут оставлять отзывы и оценки после прохождения тестов.</li></ul>',
    },
    technologies: ['JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'MondoDB', 'Redux', 'Rest API'],
    links: [
      {
        title: {
          en: 'Visit Website',
          ru: 'Посетить сайт'
        },
        url: 'https://glotz.vercel.app/'
      },
      {
        title: {
          en: 'GitHub',
          ru: 'GitHub'
        },
        url: 'https://github.com/v-f-wl/Glotz_Test-App'
      }
    ],
    isPetProject: true,
  },
  {
    id: '3',
    title:{
      en:'React/Next.js Developer',
      ru: 'React/Next.js Разработчик',
    },
    companyName: 'Pet Project',
    interval:{
      en: '2023',
      ru: '2023'
    },
    shortDescription: {
      en: "The app for creating posts and sharing thoughts",
      ru: "Приложение для создания постов и обмена мыслями"
    },
    aboutProject: {
      en: "This social media app offers users the ability to:</p><ul><li><strong>Register:</strong> Create an account to access all features.</li><li><strong>Create posts:</strong> Share your thoughts with the ability to add photos and tags.</li><li><strong>Interact with others:</strong> Leave comments and like posts to engage with the community.</li><li><strong>Customize your profile:</strong> Personalize your profile to make it truly yours.</li></ul>",
      ru: "Это приложение социальной сети предоставляет пользователям возможность:</p><ul><li><strong>Регистрация:</strong> Создайте аккаунт для доступа ко всем функциям.</li><li><strong>Создание постов:</strong> Делитесь своими мыслями с возможностью добавления фотографий и тегов.</li><li><strong>Взаимодействие с другими:</strong> Оставляйте комментарии и ставьте лайки постам, чтобы взаимодействовать с сообществом.</li><li><strong>Настройка профиля:</strong> Персонализируйте свой профиль, чтобы сделать его уникальным.</li></ul>"
    },
    technologies: ['JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'MondoDB', 'Redux', 'Rest API'],
    links: [
      {
        title: {
          en: 'Visit Website',
          ru: 'Посетить сайт'
        },
        url: 'https://flumpf.vercel.app/'
      },
      {
        title: {
          en: 'GitHub',
          ru: 'GitHub'
        },
        url: 'https://github.com/v-f-wl/NewsApp-on-Next'
      }
    ],
    isPetProject: true,
  },
  {
    id: '4',
    title:{
      en:'React/Next.js(TypeScript) Developer',
      ru: 'React/Next.js(TypeScripr) Разработчик',
    },
    companyName: 'Pet Project',
    interval:{
      en: '2023',
      ru: '2023'
    },
    shortDescription: {
      en: "Interface project for online retail",
      ru: "Проект интерфейса для онлайн-ретейла"
    },
    aboutProject: {
      en: "This e-commerce application provides users with the following features:</p><ul> <li><strong>Registration and login:</strong> Sign up and log in to access all available functionalities.</li> <li><strong>Product search:</strong> Easily find products using search by name, categories, and filters like color or price.</li> <li><strong>Bookmarks and cart:</strong> Save products to bookmarks or add them to your cart for future purchase.</li> <li><strong>Order processing:</strong> Simulate the checkout process with the ability to view your order history.</li> <li><strong>Profile customization:</strong> Manage your profile, add personal items, or share text posts.</li> </ul>",
      ru: "Это приложение интернет-магазина предоставляет пользователям следующие возможности:</p><ul> <li><strong>Регистрация и вход:</strong> Зарегистрируйтесь и войдите в приложение, чтобы получить доступ ко всем функциям.</li> <li><strong>Поиск товаров:</strong> Найдите нужные товары с помощью поиска по названию, категориям и фильтрам, таким как цвет или цена.</li> <li><strong>Закладки и корзина:</strong> Добавляйте товары в закладки или корзину для последующей покупки.</li> <li><strong>Оформление заказа:</strong> Имитируйте процесс заказа с возможностью просмотра истории ваших покупок.</li> <li><strong>Персонализация профиля:</strong> Управляйте своим профилем, добавляйте личные товары или делитесь текстовыми постами.</li> </ul"
    },
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'MondoDB', 'Redux', 'Rest API'],
    links: [
      {
        title: {
          en: 'Visit Website',
          ru: 'Посетить сайт'
        },
        url: 'https://grivont.vercel.app'
      },
      {
        title: {
          en: 'GitHub',
          ru: 'GitHub'
        },
        url: 'https://github.com/v-f-wl/grivont_shop'
      }
    ],
    isPetProject: true,
  },
]

export default portfolioList


// {
//   title:{
//     en:'',
//     ru: '',
//   },
//   companyName: '',
  // interval:{
  //   en:'PHP Developer',
  //   ru: '',
  // },
//   shortDescription:{
//     en:'',
//     ru: '',
//   },
    // aboutProject: {
    //   en:'PHP Developer',
    //   ru: '',
    // },
//   technologies: ['', ''],
//   links: [
//     {
//       title: '',
//       url: ''
//     },
//     {
//       title: '',
//       url: ''
//     }
//   ],
//   isPtProject: false,
// }