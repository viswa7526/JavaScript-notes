// JavaScript Objects Notes
// Object ek key-value pair ka collection hota hai.
// Har key unique hoti hai aur value kisi bhi data type ka ho sakta hai.

let student = {
  name: "Ali",
  age: 20,
  city: "Lahore"
};

console.log(student);
console.log(student.name);
console.log(student["age"]);

// Add new property
student.course = "JavaScript";
student["grade"] = "A";
console.log(student);

// Update existing property
student.age = 21;
console.log(student.age);

// Delete property
delete student.city;
console.log(student);

// Nested object
let person = {
  name: "Ayesha",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};

console.log(person.address.city);

// Object method
let car = {
  brand: "Honda",
  model: "Civic",
  start: function () {
    return "Car started";
  }
};

console.log(car.start());

// this keyword
let laptop = {
  brand: "Dell",
  showBrand: function () {
    return this.brand;
  }
};

console.log(laptop.showBrand());

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Loop through object
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Destructuring
const { name, age } = student;
console.log(name);
console.log(age);

// Spread operator for copying object
const copyStudent = { ...student };
copyStudent.name = "Sara";

console.log(student.name);
console.log(copyStudent.name);

// Freeze object
const user = {
  name: "Usman",
  age: 23
};

Object.freeze(user);
// user.age = 25; // not allowed
console.log(user);

// Object inside array
let users = [
  { name: "Hamza", age: 22 },
  { name: "Nadia", age: 24 }
];

console.log(users[0].name);

// Object is used to store related data together.
// Real-world applications me object bahut commonly use hota hai.
