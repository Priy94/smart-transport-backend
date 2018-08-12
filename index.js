const express  = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const axios = require('axios');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

let url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=";
const secondParamter = "&types=geocode&location=28.644800,77.216721&radius=500&key=AIzaSyBsxbN_fwHVW4II9wHw0s4d9z3eKncVG4Y"

// creating server
app.listen("4000", function(){
    console.log("server started at port", 4000)
})

app.post('/', function(req, res){
    const query = req.body.query;
    axios.get(`${url}${query}${secondParamter}`)
    .then(result => {
        console.log(result)
        var predictions = result.data.predictions.map(item => {
            return(item.description)
        });
        console.log(predictions)
        res.json({data:predictions})
    })
    
})

app.get('/login', function(request, response){
    response.send("Login Page")
})