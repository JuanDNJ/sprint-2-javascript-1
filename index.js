const add = (a, b) => {
    return a + b;
}

const random = () => {
    return Math.floor(Math.random() * 100);
}

console.log(add(1, 2));
console.log(random())

class Person {
    name = "John"
    greet() {
        const printName =  () => console.log(`${this.name}`);
        printName()
    }
}

const personOne = new Person();

personOne.greet();
