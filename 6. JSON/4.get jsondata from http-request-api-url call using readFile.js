const fs  = require("fs")
fs.readFile('https://jsonplaceholder.typicode.com/todos/1', "utf-8",  (err, json_data) => {
    console.log("Reading the json-data from file store in hosted-server.")
    console.log("JSON_Data: ", json_data)
})

// Note: you cannot call_Api(http_request) using fs module, for that you need either of xhr_object, fetch_api, axois.
// The fs.readFile() method is used to read unhosted-files on your local-computer.

