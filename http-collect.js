const http = require('http');
//const hyperquest = require('hyperquest');
const bl = require('bl');
const url = process.argv[2];
// let bl = new BufferList();

http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            throw err;
        }       
        let blx = new bl()
        blx.append(data)
        console.log(blx.length);
        console.log(data.toString()) 

    }))

})