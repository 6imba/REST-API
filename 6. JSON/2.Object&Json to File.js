// 1.convert object to JSON.
// 2.add that JSON to another file.
// 3.read that json data in file
// 4.convert that json data into object again
// 5.console it.

const fs  = require("fs")
const person1Obj = { id: 06, name: "Amir Shrestha", age: 22 }

//#1.
const person1JsonData = JSON.stringify(person1Obj)
// console.log(person1Obj)
// console.log(person1JsonData)
//#2.
fs.writeFile("3.person1JsonDataFile.json", person1JsonData, ()=>console.log("Create '3.person1JsonDataFile.json' file and Stored JSON_data into it!"))

//#3.
// lets assume that 3.person1JsonDataFile.json is the file hosted on server, that consist_of and return json_data when called(http-request) its API.
fs.readFile("3.person1JsonDataFile.json", "utf-8",  (err, json_data) => {
    console.log("Reading the '3.person1JsonDataFile.json' file store in local_file.")
    console.log("JSON_Data: ", json_data)

    //#4
    const object_data = JSON.parse(json_data)

    //#5
    console.log("Object_Data: ", object_data)
})
