var path = require('path')
var fs = require('fs')

module.exports = function (directory, filterString, callbackFunction) {
  fs.readdir(directory, function (err, list) {
    if (err) {
      return callbackFunction(err)
    } else {
      var filteredList = []
      for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === "." + filterString) {
          filteredList.push(list[i])
        }
      }
    }  
    callbackFunction(null, filteredList)
  })
}