const regex = /cat/;
console.log(regex.test("I have a cat."));
console.log(regex.test("I have a dog."));

const regex2 = /\d/;
console.log(regex2.test("There are 3 apploes."));
console.log(regex2.test("No numbers here."));

const regex3 = /\s/;
console.log(regex3.test("Hello World!"));
console.log(regex3.test("gsikogjnpo"))

const regex4 = /[a,e,i,o,u]/;
console.log(regex4.test("what are you up to?"));
console.log(regex4.test("bcd"));

const regex5 = /^Start/;
console.log(regex5.test("Start is at the begining"))
console.log(regex5.test("Not here Start"));

const regex6 = /end$/i;
console.log(regex6.test("This string is at the end"));
console.log(regex6.test("End is at the beggining here"));

const regex7 = /./;
console.log(regex7.test('njkofnjfrniujnaeujrl'))
console.log(regex7.test('\n'))

const regex8 = /a{3}/;
console.log(regex8.test("aaa"))
console.log(regex8.test('abacabba'))

const regex9 = /colou?r/;
console.log(regex9.test('color'))
console.log(regex9.test('colo'))

const regex10 = /^car$/;
console.log(regex10.test('car'))
console.log(regex10.test('scar'))