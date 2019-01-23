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
  loader: () => import("./Components/Clients/Documents/Documents"),
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

const BillingsPayments = Loadable({
  loader: () => import("./Components/Billings/Payments"),
  loading: Loading
});

const BillingsRefunds = Loadable({
  loader: () => import("./Components/Billings/Refunds"),
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

const SystemProducts = Loadable({
  loader: () => import("./Components/Systems/products/products"),
  loading: Loading
});

const SystemProduct = Loadable({
  loader: () => import("./Components/Systems/products/product"),
  loading: Loading
});

const SystemServices = Loadable({
  loader: () => import("./Components/Systems/services/services"),
  loading: Loading
});

const SystemService = Loadable({
  loader: () => import("./Components/Systems/services/service"),
  loading: Loading
});

const SystemServicesCreate = Loadable({
  loader: () => import("./Components/Systems/services/create"),
  loading: Loading
});

const SystemProductsCreate = Loadable({
  loader: () => import("./Components/Systems/products/create"),
  loading: Loading
});
const clientzone = Loadable({
  loader: () => import("./Components/client-zone/overview"),
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

const siteProfile = Loadable({
  loader: () => import("./Components/Network/sites/profile"),
  loading: Loading
});

const siteEdit = Loadable({
  loader: () => import("./Components/Network/sites/edit"),
  loading: Loading
});

// Device route
const device = Loadable({
  loader: () => import("./Components/Network/devices/devices"),
  loading: Loading
});

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  {
    path: "/clientzone",
    exact: true,
    name: "Client Zone",
    component: clientzone
  },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admin/clients", exact: true, name: "Clients", component: Clients },
  { path: "/admin/clients/new", name: "Add", component: newClient },
  {
    path: "/admin/clients/CreateInvoice/:id",
    exact: true,
    name: "Client",
    component: ClientCreateInvoice
  },
  {
    path: "/admin/clients/CreateQuote/:id",
    exact: true,
    name: "Client",
    component: ClientCreateQuote
  },
  {
    path: "/admin/clients/invoices/list/:id",
    exact: true,
    name: "Client",
    component: ClientInvoice
  },
  {
    path: "/admin/clients/payments/list/:id",
    exact: true,
    name: "Client",
    component: ClientPayments
  },
  {
    path: "/admin/clients/tickets/list/:id",
    exact: true,
    name: "Tickets",
    component: ClientTickets
  },
  {
    path: "/admin/clients/documents/list/:id",
    exact: true,
    name: "Refunds",
    component: ClientDocs
  },
  {
    path: "/admin/clients/refunds/list/:id",
    exact: true,
    name: "refunds",
    component: ClientRefunds
  },
  {
    path: "/admin/clients/accounts/list/:id",
    exact: true,
    name: "accounts",
    component: ClientAccounts
  },
  { path: "/admin/clients/edit/:id", name: "Edit", component: EditClient },
  {
    path: "/admin/:uid/quote/:id",
    exact: true,
    name: "Client",
    component: ClientSingleQuote
  },
  {
    path: "/admin/:uid/payment/:id",
    exact: true,
    name: "Client",
    component: ClientSinglePayment
  },

  {
    path: "/admin/:uid/invoice/:id",
    exact: true,
    name: "Client",
    component: ClientSingleInvoice
  },
  { path: "/admin/clients/:id", name: "Client", component: Client },
  { path: "/admin/billing", exact: true, name: "Billing", component: Billing },
  {
    path: "/admin/billing/quotes",
    exact: true,
    name: "Billing",
    component: BillingsQuotes
  },
  {
    path: "/admin/billing/invoices",
    exact: true,
    name: "Billing",
    component: Billing
  },
  {
    path: "/admin/billing/payments",
    exact: true,
    name: "Billing",
    component: BillingsPayments
  },
  {
    path: "/admin/billing/refunds",
    exact: true,
    name: "Billing",
    component: BillingsRefunds
  },
  {
    path: "/admin/system",
    exact: true,
    name: "System",
    component: SystemProduct
  },
  {
    path: "/admin/system/products/",
    exact: true,
    name: "Products",
    component: SystemProducts
  },
  {
    path: "/admin/system/products/create",
    exact: true,
    name: "Products",
    component: SystemProductsCreate
  },
  {
    path: "/admin/system/products/:id",
    exact: true,
    name: "Products",
    component: SystemProduct
  },
  {
    path: "/admin/system/services",
    exact: true,
    name: "Services",
    component: SystemServices
  },
  {
    path: "/admin/system/services/create",
    exact: true,
    name: "Services",
    component: SystemServicesCreate
  },
  {
    path: "/admin/system/services/:id",
    exact: true,
    name: "Services",
    component: SystemService
  },
  ,
  {
    path: "/admin/sites",
    exact: true,
    name: "Network",
    component: NetworkingSite
  },
  {
    path: "/admin/sites/new",
    exact: true,
    name: "Network",
    component: NewSite
  },

  {
    path: "/admin/sites/profile/:id",
    exact: true,
    name: "Network",
    component: siteProfile
  },
  {
    path: "/admin/sites/:id/edit",
    exact: true,
    name: "Network",
    component: siteEdit
  },
  {
    path: "/admin/devices",
    exact: true,
    name: "Network",
    component: device
  }
];

export default routes;
