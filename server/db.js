const { DataStore } = require('notarealdb');
 
const store = new DataStore('./data');



module.exports = {
    clients : store.collection('clients'),
    invoices : store.collection('invoices'),
    services : store.collection('services'),
    products : store.collection('products'),
    invoiceitems : store.collection('invoiceitems'),
    payments : store.collection('payments'),
    refunds : store.collection('refunds'),
    documents : store.collection('documents'),
    quotes : store.collection('quotes'),
  };

