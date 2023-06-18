const http = require("http")
const fs = require("fs")

// // # try server_1:
// const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
//     fs.readFile(`${__dirname}/employeeAPI.json`, "utf-8",  (err, json_data) => {
//         console.log("Reading the 'employeeAPI.json' file store in local_file.") // see in server_console.
//         console.log("JSON Data:", json_data) // see in server_console.
//     })
//     res.end("Hello from eployeeAPI hosted by Node Http Server1!") // why this line makes data print again|twice.
// })

// // # try server_2:
// const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
//     fs.readFile(`${__dirname}/employeeAPI.json`, "utf-8",  (err, json_data) => {
//         console.log("Reading the 'employeeAPI.json' file store in local_file.") // see in server_console.
//         console.log("JSON Data:", json_data) // see in server_console.
//         res.end(json_data)
//     })
// })

// // # try server_3:
// const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
//     fs.readFile(`${__dirname}/employeeAPI.json`, "utf-8",  (err, json_data) => {
//         console.log("Reading the 'employeeAPI.json' file store in local_file.") // see in server_console.
//         console.log("JSON Data:", json_data) // see in server_console.
//         res.end(json_data) //response json data to client who call api.
//     })
//     res.end("Hello from eployeeAPI hosted by Node Http Server1!") // as readFile is asynchronous, this line gets executed without blocking.
// })


server.listen(8006, "127.0.0.1", () => { //Server listening to incomming HTTP-Request  http-request at port_number:8006 & host by local_host:127.0.0.1.(127.0.0.1:8006)
    console.log("Server listening to HTTP-Request at port-number 8006.")
})

// res.end(): response json data to client in node.
// res.send()|res.json(): response json data to client in express.