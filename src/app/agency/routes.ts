import { RouteConfig } from 'vue-router/types/router';

export const AgencyRoutes: RouteConfig[] = [
  {
    path:      '/agency',
    component: () => import(/* webpackChunkName: "agency" */ './Agency/Agency.vue').then(m => m.default),
  },
];
