const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile(`${__dirname}/myBioAPI.json`, "utf-8",  (err, json_data) => {
        res.end(json_data)
    })
})

server.listen(10, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})
