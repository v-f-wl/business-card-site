const portfolioList = [
  {
    id: '1',
    title:{
      en:'PHP Developer',
      ru: 'PHP Разработчик',
    },
    companyName: 'Cheff Kitchen',
    interval:{
      en: 'Feb 2022- Nov 2024',
      ru: 'Фев 2022- Ноя 2024'
    },
    shortDescription:{
      en:'The app for a meal delivery service',
      ru: 'Приложение для сервиса доставки готовых рационов',
    },
    aboutProject: {
    "en": "<p>I developed an app for a daily meal delivery service. As part of the project, I completed the following tasks:</p><ul><li><strong>Page layout:</strong> Implemented the design and ensured its responsiveness for various devices.</li><li><strong>Cross-browser testing:</strong> Conducted tests to guarantee compatibility across different browsers.</li><li><strong>Tech stack:</strong> Utilized PHP, the Laravel framework, and Livewire to simplify component-based development.</li><li><strong>Enhanced logic:</strong> Used JavaScript to improve functionality.</li><li><strong>Styling:</strong> Created flexible and modular styles with SCSS.</li></ul><p><u><em>The company’s policy changed, and they redesigned the site, so I provide screenshots of previous versions to showcase my work.</em></u></p>",
    "ru": "<p>Я разработал приложение для сервиса доставки готовых рационов на день. В рамках проекта я выполнил следующие задачи:</p><ul><li><strong>Верстка страницы:</strong> Реализовал дизайн и обеспечил адаптивность для различных устройств.</li><li><strong>Кроссбраузерное тестирование:</strong> Провел тестирование для обеспечения совместимости в разных браузерах.</li><li><strong>Технологический стек:</strong> Использовал PHP, фреймворк Laravel, а также Livewire для упрощения работы с компонентами.</li><li><strong>Улучшенная логика:</strong> Добавил функциональность с помощью JavaScript.</li><li><strong>Стилизация:</strong> Реализовал гибкие и модульные стили с использованием SCSS.</li></ul><p><u><em>Политика компании изменилась, и они переделали сайт, поэтому предоставляю скриншоты прошлых версий, чтобы продемонстрировать выполненную мной работу.</em></u></p>"
    },
    technologies: ['PHP', 'JavaScript','SQL', 'Laravel', 'Livewire', 'SCSS'],
    links: [
      {
        title: 'GitHub',
        url: 'git'
      },
      {
        title: 'Web',
        url: 'web'
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
      en: 'Aug 2023',
      ru: 'Авг 2023'
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
        title: 'GitHub',
        url: 'git'
      },
      {
        title: 'Web',
        url: 'web'
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
        title: 'GitHub',
        url: 'git'
      },
      {
        title: 'Web',
        url: 'web'
      }
    ],
    isPetProject: false,
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