var myModule = require('./mymodule.js')

var directory = process.argv[2]
var filterString = process.argv[3]

myModule(directory, filterString, function (err, data) {
  if (err) {
    console.log('There was an error: ', err)
  } else {
    for (const file of data) console.log(file)
  }
})