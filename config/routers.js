const routes = [
  {
    path: "/",
    component: '../layouts/index.js',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: "/home",
        name: 'Home',
        component: './Home/Home.js',
      },
      {
        path: "/mobile",
        name: 'Mobile',
        component: './MobileSorting/MobileSorting.js',
      },
      {
        path: "/chat",
        name: 'Chat',
        component: './Chat/Chat.js',
      }
    ]
  }
];

export default routes;
