// JSON is a light-weight formate is used to sent data from server to web_page.

// # 1: Object_TO_JSON vise-versa==> stringify&parse.

const person1Obj = {
    id: 06,
    name: "Amir Shrestha",
    age: 22
}
console.log(person1Obj)
console.log(person1Obj.name) // acces object key-value with . operator.

const person1JsonData = JSON.stringify(person1Obj)
console.log(person1JsonData)
console.log(person1JsonData.name) // cannot acces json key-value with . operator.

const person1Obj1 = JSON.parse(person1JsonData)
console.log(person1Obj1)
console.log(person1Obj1.name) // acces json key-value with . operator.
