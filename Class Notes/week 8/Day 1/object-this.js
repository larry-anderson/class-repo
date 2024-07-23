function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.describeBook = function() {
        console.log(`${this.title} was writtem by ${this.author} in ${this.year}.`)
    }
}
const book = new Book('Green Eggs and Ham', 'Dr.Suess', 1983);
 
book.describeBook();

function Animal(species, name, sound){
    this.species = species;
    this.name = name;
    this.sound = sound;
    this.drDoolittle = function(){
        console.log(`I am a ${this.species},and my name is ${this.name}. I make this sound when I'm not doing my Dr. Doolittle thing ${this.sound}`)
    }
}
const larrysoreass = new Animal('animal in pain', 'Larry', 'ooowwwwwww');
    larrysoreass.drDoolittle()

function Movie(title, director, genre){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.myFavoriteMovie = function() {
        console.log(`My favorite movie is ${this.title} directed by ${this.director}. It's a ${this.genre} movie.`)
    }
}
const findingNemo = new Movie('Finding Nemo', 'Andrew Stanton', 'animated comedy-drama adventure');
findingNemo.myFavoriteMovie()

function Laptop(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.lapInfo = function() {
        console.log(`I would like some more info about the ${this.year} ${this.brand} ${this.model}. I'm thinking of buying my daughter one.`)
    }
}
const pcForDaughter = new Laptop('Mac Book', 'Air 15', 'latest');
pcForDaughter.lapInfo();

function Student(name, grade, subjects){
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
    this.studentInfo = function() {
        console.log(`${this.name}\n Students Name\n ${this.grade}\nStudents Grade\n${this.subjects}\nStudents courses`)
    }
}
const myDaughter = new Student('Cassidy Annette Anderson', 'Sophmore', ['Physical Science', 'French', 'Physical Education', 'Algebra', 'Language Arts', 'US History']);
myDaughter.studentInfo();