let { DataStore } = require('notarealdb');
const fs = require('fs')
console.log("The granularity of error boundaries is up to you. You may wrap top-level route components to display a “Something went wrong” message to the user, just like server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.")

const dir = '/Users/flavio/test'

try {
    fs.mkdir(dir)
} catch (err) {
  console.error(err)
}