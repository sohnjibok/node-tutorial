class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

module.exports = Person