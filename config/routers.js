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
      }
    ]
  }
];

export default routes;
