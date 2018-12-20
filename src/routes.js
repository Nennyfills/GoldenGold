<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Loadable from "react-loadable";
import Home from "./Containers/Main/home";

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import("./Components/dashboard"),
  loading: Loading
});

const Clients = Loadable({
  loader: () => import("./Components/Clients/Clients"),
  loading: Loading
});

const Client = Loadable({
  loader: () => import("./Components/Clients/ClientOverview"),
  loading: Loading
});

const ClientInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Invoices"),
  loading: Loading
});

const ClientSingleInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Invoice"),
  loading: Loading
});

const ClientSinglePayment = Loadable({
  loader: () => import("./Components/Clients/Payments/Payment"),
  loading: Loading
});

const ClientCreateInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Create"),
  loading: Loading
});

const ClientPayments = Loadable({
  loader: () => import("./Components/Clients/Payments/Payments"),
  loading: Loading
});

const newClient = Loadable({
  loader: () => import("./Components/Clients/newClient"),
  loading: Loading
});

const EditClient = Loadable({
  loader: () => import("./Components/Clients/EditClient"),
  loading: Loading
});

const ClientTickets = Loadable({
  loader: () => import("./Components/Clients/Tickets/ClientTicket"),
  loading: Loading
});

const ClientDocs = Loadable({
  loader: () => import("./Components/Clients/Documents/ClientDoc"),
  loading: Loading
});

const ClientRefunds = Loadable({
  loader: () => import("./Components/Clients/Refunds/Refunds"),
  loading: Loading
});

const ClientAccounts = Loadable({
  loader: () => import("./Components/Clients/AccountStatement"),
  loading: Loading
});

const Billing = Loadable({
  loader: () => import("./Components/Billings/invoices"),
  loading: Loading
});

const BillingsQuotes = Loadable({
  loader: () => import("./Components/Billings/quotes"),
  loading: Loading
});

const ClientSingleQuote = Loadable({
  loader: () => import("./Components/Clients/Quotes/Quote"),
  loading: Loading
});

const ClientCreateQuote = Loadable({
  loader: () => import("./Components/Clients/Quotes/Create"),
  loading: Loading
});

//Networking route
const NetworkingSite = Loadable({
  loader: () => import("./Components/Network/sites/sites"),
  loading: Loading
});

const NewSite = Loadable({
  loader: () => import("./Components/Network/sites/new"),
  loading: Loading
});

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/clients", exact: true, name: "Clients", component: Clients },
  { path: "/clients/new", name: "Add", component: newClient },
  {
    path: "/clients/CreateInvoice/:id",
    exact: true,
    name: "Client",
    component: ClientCreateInvoice
  },
  {
    path: "/clients/CreateQuote/:id",
    exact: true,
    name: "Client",
    component: ClientCreateQuote
  },
  {
    path: "/clients/invoices/list/:id",
    exact: true,
    name: "Client",
    component: ClientInvoice
  },
  {
    path: "/clients/payments/list/:id",
    exact: true,
    name: "Client",
    component: ClientPayments
  },
  {
    path: "/clients/tickets/list/:id",
    exact: true,
    name: "Tickets",
    component: ClientTickets
  },
  {
    path: "/clients/documents/list/:id",
    exact: true,
    name: "Refunds",
    component: ClientDocs
  },
  {
    path: "/clients/refunds/list/:id",
    exact: true,
    name: "refunds",
    component: ClientRefunds
  },
  {
    path: "/clients/accounts/list/:id",
    exact: true,
    name: "accounts",
    component: ClientAccounts
  },
  { path: "/clients/edit/:id", name: "Edit", component: EditClient },
  {
    path: "/:uid/quote/:id",
    exact: true,
    name: "Client",
    component: ClientSingleQuote
  },
  {
    path: "/:uid/payment/:id",
    exact: true,
    name: "Client",
    component: ClientSinglePayment
  },

  {
    path: "/:uid/invoice/:id",
    exact: true,
    name: "Client",
    component: ClientSingleInvoice
  },
  { path: "/clients/:id", name: "Client", component: Client },
  { path: "/billing", exact: true, name: "Billing", component: Billing },
  {
    path: "/billing/quotes",
    exact: true,
    name: "Billing",
    component: BillingsQuotes
  },
  {
    path: "/sites",
    exact: true,
    name: "Network",
    component: NetworkingSite
  },
  {
    path: "/sites/new",
    exact: true,
    name: "Network",
    component: NewSite
  }
];

export default routes;
=======
=======
>>>>>>> cdbe8602ef75fa1449d2b21ea50be7cb9202bc6a
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
  loader: () => import('./Components/Clients/Invoice/Invoices'),
  loading: Loading,
});

const ClientSingleInvoice = Loadable({
  loader: () => import('./Components/Clients/Invoice/Invoice'),
  loading: Loading,
});


const ClientSinglePayment = Loadable({
  loader: () => import('./Components/Clients/Payments/Payment'),
  loading: Loading,
});

const ClientCreateInvoice = Loadable({
  loader: () => import('./Components/Clients/Invoice/Create'),
  loading: Loading,
});

const ClientPayments = Loadable({
  loader: () => import('./Components/Clients/Payments/Payments'),
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
  loader: () => import('./Components/Clients/Tickets/ClientTicket'),
  loading: Loading,
});


const  ClientDocs = Loadable({
  loader: () => import('./Components/Clients/Documents/Documents'),
  loading: Loading,
});


const  ClientRefunds= Loadable({
  loader: () => import('./Components/Clients/Refunds/Refunds'),
  loading: Loading,
});

const  ClientAccounts= Loadable({
  loader: () => import('./Components/Clients/AccountStatement'),
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

const BillingsPayments = Loadable({
  loader: () => import('./Components/Billings/Payments'),
  loading: Loading,
});

const BillingsRefunds = Loadable({
  loader: () => import('./Components/Billings/Refunds'),
  loading: Loading,
});

const ClientSingleQuote = Loadable({
  loader: () => import('./Components/Clients/Quotes/Quote'),
  loading: Loading,
});


const ClientCreateQuote = Loadable({
  loader: () => import('./Components/Clients/Quotes/Create'),
  loading: Loading,
});

const SystemProducts = Loadable({
  loader: () => import('./Components/Systems/products/products'),
  loading: Loading,
});


const SystemProduct = Loadable({
  loader: () => import('./Components/Systems/products/product'),
  loading: Loading,
});

const SystemServices = Loadable({
  loader: () => import('./Components/Systems/services/services'),
  loading: Loading,
});

const SystemService = Loadable({
  loader: () => import('./Components/Systems/services/service'),
  loading: Loading,
});

const SystemServicesCreate = Loadable({
  loader: () => import('./Components/Systems/services/create'),
  loading: Loading,
});

const SystemProductsCreate = Loadable({
  loader: () => import('./Components/Systems/products/create'),
  loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/clients', exact:true, name: 'Clients', component: Clients },
    { path: '/clients/new',  name: 'Add', component: newClient },
    { path: '/clients/CreateInvoice/:id',  exact:true,  name: 'Client', component: ClientCreateInvoice },
    { path: '/clients/CreateQuote/:id',  exact:true,  name: 'Client', component: ClientCreateQuote },
    { path: '/clients/invoices/list/:id',  exact:true,  name: 'Client', component: ClientInvoice },
    { path: '/clients/payments/list/:id',  exact:true,  name: 'Client', component: ClientPayments },
    { path: '/clients/tickets/list/:id',  exact:true,  name: 'Tickets', component: ClientTickets },
    { path: '/clients/documents/list/:id',  exact:true,  name: 'Refunds', component: ClientDocs },
    { path: '/clients/refunds/list/:id',  exact:true,  name: 'refunds', component: ClientRefunds },
    { path: '/clients/accounts/list/:id',  exact:true,  name: 'accounts', component: ClientAccounts },
    { path: '/clients/edit/:id',  name: 'Edit', component: EditClient },
    { path: '/:uid/quote/:id',  exact:true,  name: 'Client', component: ClientSingleQuote },
    { path: '/:uid/payment/:id',  exact:true,  name: 'Client', component: ClientSinglePayment },

    { path: '/:uid/invoice/:id',  exact:true,  name: 'Client', component: ClientSingleInvoice },
    { path: '/clients/:id',  name: 'Client', component: Client },
    { path: '/billing', exact:true, name: 'Billing', component: Billing },
    { path: '/billing/quotes', exact:true, name: 'Billing', component: BillingsQuotes },
    { path: '/billing/invoices', exact:true, name: 'Billing', component: Billing },
    { path: '/billing/payments', exact:true, name: 'Billing', component: BillingsPayments },
    { path: '/billing/refunds', exact:true, name: 'Billing', component: BillingsRefunds },
    { path: '/system', exact:true, name: 'System', component: SystemProduct },
    { path: '/system/products/',  exact:true,  name: 'Products', component: SystemProducts },
    { path: '/system/products/create', exact:true, name: 'Products', component: SystemProductsCreate },
    { path: '/system/products/:id',  exact:true,  name: 'Products', component: SystemProduct },
    { path: '/system/services', exact:true, name: 'Services', component: SystemServices },
    { path: '/system/services/create', exact:true, name: 'Services', component: SystemServicesCreate },
    { path: '/system/services/:id', exact:true, name: 'Services', component: SystemService },

];

export default routes;
<<<<<<< HEAD
>>>>>>> b48d507413b99f0f9f1eaf49811d48eb065aa555
=======
=======
import React from "react";
import Loadable from "react-loadable";
import Home from "./Containers/Main/home";

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import("./Components/dashboard"),
  loading: Loading
});

const Clients = Loadable({
  loader: () => import("./Components/Clients/Clients"),
  loading: Loading
});

const Client = Loadable({
  loader: () => import("./Components/Clients/ClientOverview"),
  loading: Loading
});

const ClientInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Invoices"),
  loading: Loading
});

const ClientSingleInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Invoice"),
  loading: Loading
});

const ClientSinglePayment = Loadable({
  loader: () => import("./Components/Clients/Payments/Payment"),
  loading: Loading
});

const ClientCreateInvoice = Loadable({
  loader: () => import("./Components/Clients/Invoice/Create"),
  loading: Loading
});

const ClientPayments = Loadable({
  loader: () => import("./Components/Clients/Payments/Payments"),
  loading: Loading
});

const newClient = Loadable({
  loader: () => import("./Components/Clients/newClient"),
  loading: Loading
});

const EditClient = Loadable({
  loader: () => import("./Components/Clients/EditClient"),
  loading: Loading
});

const ClientTickets = Loadable({
  loader: () => import("./Components/Clients/Tickets/ClientTicket"),
  loading: Loading
});

const ClientDocs = Loadable({
  loader: () => import("./Components/Clients/Documents/ClientDoc"),
  loading: Loading
});

const ClientRefunds = Loadable({
  loader: () => import("./Components/Clients/Refunds/Refunds"),
  loading: Loading
});

const ClientAccounts = Loadable({
  loader: () => import("./Components/Clients/AccountStatement"),
  loading: Loading
});

const Billing = Loadable({
  loader: () => import("./Components/Billings/invoices"),
  loading: Loading
});

const BillingsQuotes = Loadable({
  loader: () => import("./Components/Billings/quotes"),
  loading: Loading
});

const ClientSingleQuote = Loadable({
  loader: () => import("./Components/Clients/Quotes/Quote"),
  loading: Loading
});

const ClientCreateQuote = Loadable({
  loader: () => import("./Components/Clients/Quotes/Create"),
  loading: Loading
});

//Networking route
const NetworkingSite = Loadable({
  loader: () => import("./Components/Network/sites/sites"),
  loading: Loading
});

const NewSite = Loadable({
  loader: () => import("./Components/Network/sites/new"),
  loading: Loading
});

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/clients", exact: true, name: "Clients", component: Clients },
  { path: "/clients/new", name: "Add", component: newClient },
  {
    path: "/clients/CreateInvoice/:id",
    exact: true,
    name: "Client",
    component: ClientCreateInvoice
  },
  {
    path: "/clients/CreateQuote/:id",
    exact: true,
    name: "Client",
    component: ClientCreateQuote
  },
  {
    path: "/clients/invoices/list/:id",
    exact: true,
    name: "Client",
    component: ClientInvoice
  },
  {
    path: "/clients/payments/list/:id",
    exact: true,
    name: "Client",
    component: ClientPayments
  },
  {
    path: "/clients/tickets/list/:id",
    exact: true,
    name: "Tickets",
    component: ClientTickets
  },
  {
    path: "/clients/documents/list/:id",
    exact: true,
    name: "Refunds",
    component: ClientDocs
  },
  {
    path: "/clients/refunds/list/:id",
    exact: true,
    name: "refunds",
    component: ClientRefunds
  },
  {
    path: "/clients/accounts/list/:id",
    exact: true,
    name: "accounts",
    component: ClientAccounts
  },
  { path: "/clients/edit/:id", name: "Edit", component: EditClient },
  {
    path: "/:uid/quote/:id",
    exact: true,
    name: "Client",
    component: ClientSingleQuote
  },
  {
    path: "/:uid/payment/:id",
    exact: true,
    name: "Client",
    component: ClientSinglePayment
  },

  {
    path: "/:uid/invoice/:id",
    exact: true,
    name: "Client",
    component: ClientSingleInvoice
  },
  { path: "/clients/:id", name: "Client", component: Client },
  { path: "/billing", exact: true, name: "Billing", component: Billing },
  {
    path: "/billing/quotes",
    exact: true,
    name: "Billing",
    component: BillingsQuotes
  },
  {
    path: "/sites",
    exact: true,
    name: "Network",
    component: NetworkingSite
  },
  {
    path: "/sites/new",
    exact: true,
    name: "Network",
    component: NewSite
  }
];

export default routes;
>>>>>>> d9003451882b9b472ef914f5fa5b440bf1b17159
>>>>>>> cdbe8602ef75fa1449d2b21ea50be7cb9202bc6a
