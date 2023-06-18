const http = require("http")

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({name:"Amir Shrestha",email:"simbaamir55@gamil.com"})) //object
    // res.end({"name":"Amir Shrestha","email":"simbaamir55@gamil.com"}) //not json yet
    // res.end(`{"name":"Amir Shrestha","email":"simbaamir55@gamil.com"}`) //json
    //The "chunk" argument must be of type string or an instance of Buffer or Uint8Array. Received an instance of Object
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})