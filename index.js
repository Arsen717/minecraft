const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({

}));

port = 4000;
var array = [];
let a = 16
let b = Math.pow(a,2)
for (i = 0; i <= b; i++){
 array[i] = Math.floor(Math.random()* 7);

}


app.get('/', function(req,res){
    // res.sendFile(__dirname + '/index.txt');
    res.statusCode = 200
    res.status(200).json({
        arr: array,
        qanak: a
    })

})


app.listen(port,() => {
    console.log(`Server runnning at localhost:${port}`);
})
