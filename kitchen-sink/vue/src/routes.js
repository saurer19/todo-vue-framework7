import Home from './pages/home/home.vue';

import NotFound from './pages/404.vue';

// Pages
export default [
  // Index page
  {
    path: '/',
    component: Home,
  },
  // About page

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    component: NotFound,
  },
];
