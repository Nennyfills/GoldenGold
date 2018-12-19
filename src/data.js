var invoices = [{
    "id": "67",
    "Invoiceno": "18001137",
    "Total": "$49.90",
    "Amountdue": "$49.90",
    "Createddate": "1 Nov 2018",
    "Duedate": "overdue for 6 days",
    "Status": "Unpaid",
    "uid": 256
  },
  {
    "id": "62",

    "Invoiceno": "18000819",
    "Total": "$49.90",
    "Amountdue": "$0.00",
    "Createddate": "1 Sep 2018",
    "Duedate": "15 Sep 2018",
    "Status": "Paid",
    "uid": 255

  },
  {
    "id": "76",

    "Invoiceno": "18000982",
    "Total": "$49.90",
    "Amountdue": "$49.90",
    "Createddate": "1 Oct 2018",
    "Duedate": "overdue for 37 days",
    "Status": "Unpaid"
    ,
    "uid": 255
  },

  {
    "id": "3",
    "Invoiceno": "18000660",
    "Total": "$49.90",
    "Amountdue": "$0.00",
    "Createddate": "1 Aug 2018",
    "Duedate": "15 Aug 2018",
    "Status": "Paid"
    ,
    "uid": 253
  }
]



var clients = [{
    id: 256,
    FirstName: "Rigoberto",
    LastName: "Koch",
    Balance: "$0.00",
    Serviceplans: "Basic",
    Connectedto: "Lake Tower – Lake Gateway",
    status: "Banned",
    type: "Company",
    houseAddress: "Az/13",
    streetAddress: "FHE UTAKO",
    city: "ABUJA",
    state: "FCT",
    phones: "23456789897 34656776645354",
    email: "gvsjbhvs@dvgnkdv.sf"

  },
  {

    "id": 255,
    "FirstName": "Mariela",
    "LastName": "Crist",
    "Balance": "$79.90",
    "Serviceplans": "Basic",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Inactive",
    type: "Individual",
    houseAddress: "34",
    streetAddress: "OFFLINE AVENUE",
    city: "Sango",
    state: "Ogun",
    phones: "234 46787 879 34",
    email: "vbhjcs@csewb.com"

  },
  {

    "id": 254,
    "FirstName": "Ruth",
    "LastName": "Kuhn",
    "Balance": "-$99.80",
    "Serviceplans": "Advanced",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Active",
    type: "Individual",
    houseAddress: "1A",
    streetAddress: "Goldren Drive way",
    city: "Akure",
    state: "Ondo",
    phones: "7867 243565",
    email: "thbrgevfcs@i.com"
  },
  {

    "id": 253,
    "FirstName": "Chelsey",
    "LastName": "Prohaska",
    "Balance": "-$59.80",
    "Serviceplans": "Basic",
    "Connectedto": "Golf Tower – Golf Gateway",
    "status": "Pending",
    type: "Individual",
    houseAddress: "120",
    streetAddress: "Area One District",
    city: "Abuja",
    state: "FCT",
    phones: "546576564 4",
    email: "jthrgevfcve@hh.com"
  },
  {

    "id": 252,
    "FirstName": "Willow",
    "LastName": "Kassulke",
    "Balance": "$0.00",
    "Serviceplans": "Advanced",
    "Connectedto": "Golf Tower – Golf Gateway",
    "status": "Banned",
    type: "Individual",
    houseAddress: "hh6",
    streetAddress: "Industrial are",
    city: "Mowe",
    state: "Ogun",
    phones: "2343564 6756",
    email: "we@hh.cods.vom"
  },
  {

    "id": 251,
    "FirstName": "Edwardo",
    "LastName": "White",
    "Balance": "$0.00",
    "Serviceplans": "Basic",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Active",
    houseAddress: "009",
    streetAddress: "Laderin Estate",
    city: "Uyo",
    state: "Akwa Ibon",
    phones: "3243546 345",
    email: "wol@hhsf.co.uk"
  },
  {

    "id": 250,
    "FirstName": "Kallie",
    "LastName": "Metz",
    "Balance": "-$199.60",
    "Serviceplans": "Advanced",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Active",
    houseAddress: "Ag",
    streetAddress: "FHE Elega",
    city: "Benin",
    state: "Edo",
    phones: "234 556 7888 22",
    email: "goldenboy@gold.com"
  },
  {

    "id": 249,
    "FirstName": "Stewart",
    "LastName": "Schultz",
    "Balance": "-$80.00",
    "Serviceplans": "Advanced, Pro",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Pending",
    houseAddress: "11A",
    streetAddress: "Flow out of Idiot",
    city: "Ikeja",
    state: "Lagos",
    phones: "4354653 66",
    email: "flow@pipe.com"
  },
  {

    "id": 248,
    "FirstName": "Kunde",
    "LastName": "Cordell",
    "Balance": "$0.00",
    "Serviceplans": "Advanced",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Banned",
    houseAddress: "34A",
    streetAddress: "Popular Request Avenue",
    city: "Ogba",
    state: "Lagos",
    phones: "4566787 76",
    email: "flow@godmade.vcon"
  },
  {

    "id": 247,
    "FirstName": "Fay",
    "LastName": "Calista",
    "Balance": "$0.00",
    "Serviceplans": "Basic",
    "Connectedto": "Golf Tower – Golf Gateway",
    "status": "Active",
    houseAddress: "33A",
    streetAddress: "Brotheres Plaza Gold Gate",
    city: "Abuja",
    state: "FCT",
    phones: "+2424 4534653",
    email: "jump@kill.com"
  },
  {

    "id": 246,
    "FirstName": "Mosciski",
    "LastName": "Christop",
    "Balance": "$0.00",
    "Serviceplans": "Pro",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Active",
    houseAddress: "1A",
    streetAddress: "Beyounce is too good",
    city: "Ife",
    state: "Osun",
    phones: "546578985746",
    email: "money@bank.com"
  },
  {

    "id": 245,
    "FirstName": "Koss",
    "LastName": "Brent",
    "Balance": "$79.90",
    "Serviceplans": "Basic",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Inactive",
    houseAddress: "1",
    streetAddress: "Lovers Lake",
    city: "Abuja",
    state: "FCT",
    phones: "324759",
    email: "remove@bvn.com"
  },
  {

    "id": 244,
    "FirstName": "Funk",
    "LastName": "Tia",
    "Balance": "$0.00",
    "Serviceplans": "Pro",
    "Connectedto": "Lake Tower – Lake Gateway",
    "status": "Pending",
    houseAddress: "12",
    streetAddress: "Eat the golden fence",
    city: "uyo",
    state: "Akwa ibon",
    phones: "23435647635 4",
    email: "phone@me.com"
  },
  {

    "id": 243,
    "FirstName": "Streich",
    "LastName": "Catharine",
    "Balance": "$0.00",
    "Serviceplans": "Basic",
    "Connectedto": "Golf Tower – Golf Gateway",
    "status": "Banned",
    houseAddress: "H3",
    streetAddress: "House of Cards",
    city: "Warri",
    state: "Delta",
    phones: "23435647 56",
    email: "giving@god.com"
  }
]

var payments = [{
    "id": 234,

    "Method": "Check",
    "Amount": 29.90,
    "Createddate": "10 Nov 2018 7:18 am"
  },
  {
    "id": 246,
    uid:244,
    "Method": "Check",
    "Amount": 679.90,
    "Createddate": "6 Oct 2018 8:09 am"
  },
  {
    "id": 21,
    uid:244,
    "Method": "Check",
    "Amount": 1129.90,
    "Createddate": "9 Sep 2018 8:03 am"
  },
  {
    "id": 24, uid:245,
    "Method": "Check",
    "Amount": 19.9,
    "Createddate": "11 Aug 2018 7:50 am"
  },
  {
    "id": 241, uid:254,

    "Method": "Check",
    "Amount": 29.90,
    "Createddate": "7 Jul 2018 7:43 am"
  },
  {
    "id": 274,
    uid:255,
    "Method": "Check",
    "Amount": 2990,
    "Createddate": "9 Jun 2018 7:36 am"
  },
  {
    "id": 412,
    uid:255,
    "Method": "Check",
    "Amount": 299.0,
    "Createddate": "5 May 2018 8:26 am"
  },
  {
    "id": 240,
    uid:253,
    "Method": "Check",
    "Amount": 655,
    "Createddate": "5 Apr 2018 8:13 am"
  },
  {
    "id": 245,
    uid:244,
    "Method": "Check",
    "Amount": 78,
    "Createddate": "8 Mar 2018 7:08 am"
  }
]

var docs = []
var products = [
  {   
      id:"454", 
      Label: "Green Router",
      Description:"",
      Price:"4500",
      Createddate:"8 Mar 2018"
    },
    
    {id:"455", 
    Label:"Chinko Morderm", 
    Description:"", 
    Price:"0500", 
    Createddate:"19 Mar 2018"
  }
]
var services = [{id:"454", Label:"4 month installation", Description:"", Price:"14500" , Createddate:"8 Mar 2018"}]
var refunds = []
var accounts = [
  {
    "id": 265,

    "Date": "1 Aug 2018",
    "Item": "Invoice #18000683       due                     15 Aug 2018",
    "Invoiced": "$29.90",
    "Payments": "",
    "Balance": "− $29.90"
  },
  {
    "id": 225,

    "Date": "11 Aug 2018",
    "Item": "Payment                       (Check)",
    "Invoiced": "",
    "Payments": "$29.90",
    "Balance": "$0.00"
  },
  {
    "id": 145,

    "Date": "1 Sep 2018",
    "Item": "Invoice #18000843         due       15 Sep 2018",
    "Invoiced": "$29.90",
    "Payments": "",
    "Balance": "− $29.90"
  },
  {
    "id": 240,

    "Date": "9 Sep 2018",
    "Item": "Payment                                                                              (Check)",
    "Invoiced": "",
    "Payments": "$29.90",
    "Balance": "$0.00"
  },
  {
    "id": 2995,

    "Date": "1 Oct 2018",
    "Item": "Invoice #18001008                                                                               due                             15 Oct 2018",
    "Invoiced": "$29.90",
    "Payments": "",
    "Balance": "− $29.90"
  },
  {
    "id": 24511,

    "Date": "6 Oct 2018",
    "Item": "Payment                                                                              (Check)",
    "Invoiced": "",
    "Payments": "$29.90",
    "Balance": "$0.00"
  },
  {
    "id": 1145,

    "Date": "1 Nov 2018",
    "Item": "Invoice #18001167                                                                               due                             15 Nov 2018",
    "Invoiced": "$29.90",
    "Payments": "",
    "Balance": "− $29.90"
  },
  {
    "id": 2480,

    "Date": "10 Nov 2018",
    "Item": "Payment                                                                              (Check)",
    "Invoiced": "",
    "Payments": "$29.90",
    "Balance": "$0.00"
  }

]


var invoiceItems =
[{
  Id : 39,
  Type :"Product",
  InvoiceID: "67" , 
  Label : "Cold Room dispenser", 
  Price: "3",
  Quantity: "3000",
  TotalPrice: "9000"
},
{
  Id : 9,
  Type :"Custom",
  InvoiceID: "67" , 
  Label : "Lovely set of Lenovo", 
  Price: "1",
  Quantity: "300",
  TotalPrice: "300"
},
{
  Id : 139,
  Type :"Product",
  InvoiceID: "62" , 
  Label : "Smael Sport watch", 
  Price: "3",
  Quantity: "10",
  TotalPrice: "30"
},
{
  Id : 9,
  Type :"Product",
  InvoiceID: "3" , 
  Label : "Cold Room dispenser", 
  Price: "3",
  Quantity: "3000",
  TotalPrice: "9000"
}]


var quotes =[{id:34, quoteno:"3F15" , Client:"GOKE BABALOLA" , Total:"$99" ,     Createddate: "1 Aug 2018", uid:244
}]

var tickets =[{id:23, Title:"Out of service 2 days" , Author:"Portal Admin", Createddate:"1/11/18", "Brief":"psam ratione omnis perspiciatis excepturi perferendis numquam iste dolor. Vel laborum molestias culpa perferendis et dolores temporibus. Et magnam in..." , Note:"psam ratione omnis perspiciatis excepturi perferendis numquam iste dolor. Vel laborum molestias culpa perferendis et dolores temporibus. Et magnam in praesentium aspernatur. Doloremque culpa voluptas ut harum dolorem rerum. Quibusdam minima unde mollitia porro. In impedit cumque nemo ducimus. Incidunt eveniet eos commodi omnis quos. Et maxime nihil molestias facere non. A sed ducimus iste commodi ipsa sapiente quia. Minima sed explicabo a alias facere. Ipsa minima velit minima dolorum sapiente debitis qui voluptates. Dolorum iure eos sunt necessitatibus exercitationem voluptates molestiae. Autem officiis ut consequatur ratione aut facilis illo maiores." , }]
export {
  invoices,
  clients,
  payments,
  docs,
  refunds,
  accounts, invoiceItems, quotes ,products , services, tickets
}