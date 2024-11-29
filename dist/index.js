class Person {
    // The constructor is a special function that runs when you create a new object
    constructor(name, age) {
      this.name = name; // "this.name" means the name of THIS person
      this.age = age;   // "this.age" is the age of THIS person
    }
  
    // You can add methods (actions the object can perform) here
    sayHello() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create new objects (people) from the Person class
  const person1 = new Person("Alice", 25); // Creates a person named Alice
  const person2 = new Person("Bob", 30);   // Creates a person named Bob
  
  // Use the method defined in the class
  person1.sayHello(); // Output: "Hi, my name is Alice and I am 25 years old."
  person2.sayHello(); // Output: "Hi, my name is Bob and I am 30 years old."
  