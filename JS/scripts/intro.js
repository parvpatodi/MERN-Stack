// alert("Click me to continue");
console.log("Hi, there this is JS");
console.time("Time taken");
console.log("Hey");
console.error("An error");
console.warn("This is a warning");

var person = {
    name:"Parv",
    age: 23,
    city:"Indore"
}

var person2 = {
    name:"Parrrrrrv",
    age: 23,
    city:"Indore"
}

var person1 = {
    name:"Parvvvvvv",
    age: 23,
    city:"Indore"
}

// console.log(person2);
// console.log(person);

// console.log({person,person1,person2})
console.table({person,person1,person2})

console.log("%c Custom msg", "color:Green");

// console.timeEnd("Time take nto end");