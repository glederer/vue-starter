import { RouteConfig } from 'vue-router/types/router';

export const PropertyRoutes: RouteConfig[] = [
  {
    path:      '/property',
    component: () => import(/* webpackChunkName: "property" */ './Property/Property.vue').then(m => m.default),
  },
];
