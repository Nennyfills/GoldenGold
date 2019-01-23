
import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./Components/client-zone/overview'),
  loading: Loading,
});



const Payments = Loadable({
  loader: () => import('./Components/client-zone/payments'),
  loading: Loading,
});

const Invoices = Loadable({
  loader: () => import('./Components/client-zone/invoices'),
  loading: Loading,
});

const routes = [
  { path: '/clientzone/:id',  exact: true, name: 'Home', component: Dashboard },

  { path: '/clientzone/payments/:id', exact: true, name: 'Home', component: Payments },
  { path: '/clientzone/invoices/:id', exact: true, name: 'Invoices', component: Invoices },
  { path: '/clientzone/quotes/:id', exact: true, name: 'Home', component: Payments },
  { path: '/clientzone/support/:id', exact: true, name: 'Home', component: Payments }, 
];

export default routes;

