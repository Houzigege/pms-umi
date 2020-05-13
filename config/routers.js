const routes = [
  {
    path: "/",
    component: '../layouts/index.js',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: "/home",
        name: 'Home',
        component: './TestHome/Home.js',
      },
      // {
      //   path: "/mobile",
      //   name: 'Mobile',
      //   component: './MobileSorting/MobileSorting.js',
      // },
      // {
      //   path: "/chat",
      //   name: 'Chat',
      //   component: './Chat/Chat.js',
      // },
      // {
      //   path: "/flag",
      //   name: 'Flag',
      //   component: './Flag/Flag.js',
      // },
      // {
      //   path: "/hero",
      //   name: 'Hero',
      //   component: './Hero/Hero.js',
      // },
      // {
      //   path: "/model",
      //   name: 'Model',
      //   component: './Model/Model.js',
      // },
      // {
      //   path: "/lucky",
      //   name: 'Lucky',
      //   component: './LuckyDraw/Home.js',
      // }
    ]
  }
];

export default routes;
