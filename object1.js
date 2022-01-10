

/* Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key/property you want to delete.*/


var myStudent = {
    firstName : "Alex",
    lastName : "Smith",
    age : 36,
    gender : "male",
    project: {
           lang: "JS",
           type: "react"
    }
};

/*declare a function usinf the delete method that returns the new array*/

function deleteProperty(a,b) {
    delete a[b]
    return a
}
console.log(deleteProperty(myStudent, 'lastName'))