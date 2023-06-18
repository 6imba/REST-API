import fetch from 'node-fetch';
const getJson = async () => {
    const responseObject = await fetch("https://jsonplaceholder.typicode.com/todos/1") //response object.
    console.log(responseObject)
    const jsonData = await responseObject.text() //json string
    console.log(jsonData)
}
getJson()

// The function returns a Response object that contains useful functions and information about the HTTP response,
// such as:
    // text() - returns the response body as a string.
    // json() - parses the response body into a JSON object,
    // and throws an error if the body can't be parsed.