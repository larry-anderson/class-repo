function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
 
Book.prototype.getInfo = function() {
        console.log(`${this.title} was writtem by ${this.author} in ${this.year}.`)
}
const book = new Book('Green Eggs and Ham', 'Dr.Suess', 1983);
 
book.getInfo();

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduction = function() {
    console.log(`I'm ${this.name}, and I am ${this.age} years young.`)
}
const rickJames = new Person('Rick James "BITCH"', 69);
rickJames.introduction();

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.fast = function() {
    console.log(`My ${this.year} ${this.make} ${this.model} is really fast.`)
}
const larrysCar = new Car('Acura', 'TL', 2006);
larrysCar.fast();

function Student(name, grade, subjects){
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
}
    Student.prototype.studentInfo = function(){
        console.log(`${this.name}\n Students Name\n ${this.grade}\nStudents Grade\n${this.subjects}\nStudents courses`)
}
const myDaughter = new Student('Cassidy Annette Anderson', 'Sophmore', ['Physical Science', 'French', 'Physical Education', 'Algebra', 'Language Arts', 'US History']);
myDaughter.studentInfo();

function Laptop(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
    Laptop.prototype.lapInfo = function() {
        console.log(`I would like some more info about the ${this.year} ${this.brand} ${this.model}. I'm thinking of buying my daughter one.`)
    }

const pcForDaughter = new Laptop('Mac Book', 'Air 15', 'latest');
pcForDaughter.lapInfo();