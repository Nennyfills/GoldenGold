import React from 'react';
import Loadable from 'react-loadable'
import Home from './Containers/Main/home';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./Components/dashboard'),
  loading: Loading,
});


const Clients = Loadable({
  loader: () => import('./Components/Clients/Clients'),
  loading: Loading,
});

const Client = Loadable({
  loader: () => import('./Components/Clients/ClientOverview'),
  loading: Loading,
});


const ClientInvoice = Loadable({
  loader: () => import('./Components/Clients/ClientInvoice'),
  loading: Loading,
});

const ClientSingleInvoice = Loadable({
  loader: () => import('./Components/Clients/ClientSingleInvoice'),
  loading: Loading,
});

const ClientCreateInvoice = Loadable({
  loader: () => import('./Components/Clients/CreateInvoice'),
  loading: Loading,
});

const ClientPayments = Loadable({
  loader: () => import('./Components/Clients/Clientpayment'),
  loading: Loading,
});

const  newClient = Loadable({
  loader: () => import('./Components/Clients/newClient'),
  loading: Loading,
});

const  EditClient = Loadable({
  loader: () => import('./Components/Clients/EditClient'),
  loading: Loading,
});

const  ClientTickets = Loadable({
  loader: () => import('./Components/Clients/ClientTicket'),
  loading: Loading,
});


const  ClientDocs = Loadable({
  loader: () => import('./Components/Clients/ClientDoc'),
  loading: Loading,
});


const  ClientRefunds= Loadable({
  loader: () => import('./Components/Clients/ClientRefund'),
  loading: Loading,
});

const  ClientAccounts= Loadable({
  loader: () => import('./Components/Clients/ClientAccount'),
  loading: Loading,
});


const Billing = Loadable({
  loader: () => import('./Components/Billings/invoices'),
  loading: Loading,
});


const BillingsQuotes = Loadable({
  loader: () => import('./Components/Billings/quotes'),
  loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/clients', exact:true, name: 'Clients', component: Clients },
    { path: '/clients/new',  name: 'Add', component: newClient },
    { path: '/clients/CreateInvoice/:id',  exact:true,  name: 'Client', component: ClientCreateInvoice },
    { path: '/clients/invoices/list/:id',  exact:true,  name: 'Client', component: ClientInvoice },
    { path: '/clients/payments/list/:id',  exact:true,  name: 'Client', component: ClientPayments },
    { path: '/clients/tickets/list/:id',  exact:true,  name: 'Tickets', component: ClientTickets },
    { path: '/clients/documents/list/:id',  exact:true,  name: 'Refunds', component: ClientDocs },
    { path: '/clients/refunds/list/:id',  exact:true,  name: 'refunds', component: ClientRefunds },
    { path: '/clients/accounts/list/:id',  exact:true,  name: 'accounts', component: ClientAccounts },
    { path: '/clients/edit/:id',  name: 'Edit', component: EditClient },
    { path: '/:uid/invoice/:id',  exact:true,  name: 'Client', component: ClientSingleInvoice },
    { path: '/clients/:id',  name: 'Client', component: Client },
    { path: '/billing', exact:true, name: 'Billing', component: Billing },
    { path: '/billing/quotes', exact:true, name: 'Billing', component: BillingsQuotes },

];

export default routes;
