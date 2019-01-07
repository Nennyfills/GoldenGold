const { DataStore } = require('notarealdb');
 
const store = new DataStore('./data');



module.exports = {
    clients : store.collection('clients'),
    invoices : store.collection('invoices')
  };

