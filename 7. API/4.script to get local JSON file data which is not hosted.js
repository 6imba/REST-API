const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
    fs.readFile("./employeeAPI.json", "utf-8",  (err, json_data) => {
        console.log("Server Side Processing.(Reading the 'employeeAPI.json' file store in server)") // see in server_console.
        console.log("Retrieved JSON Data in server:", json_data) // see in server_console.
        res.end(json_data) // call landing api(/) twice. Two http request (url request and favicon request) may be.
    })
})

server.listen(8006, "127.0.0.1", () => { //Server listening to incomming HTTP-Request  http-request at port_number:8006 & host by local_host:127.0.0.1.(127.0.0.1:8006)
    console.log("Server listening to HTTP-Request at port-number 8006.")
})