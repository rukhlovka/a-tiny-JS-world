import { print } from "./js/lib.js";
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers" convenience:

   Code repository: _put repo URL here_
   Web app: _put project"s github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

let dog = {
   species: "dog",
   name: "Rick",
   gender: "male",
   legs: 4,
   hands: 0,
   saying: "woof-woof!",
   hair: "brown"
};
let cat = {
   species: "cat",
   name: "Morty",
   gender: "female",
   legs: 4,
   hands: 0,
   saying: "mew-mew!",
   hair: "grey"
};
let man = {
   species: "human",
   name: "Greg",
   gender: "male",
   legs: 2,
   hands: 2,
   saying: "Hello, world!",
   hair: "blond"
};
let woman = {
   species: "human",
   name: "Greg",
   gender: "female",
   legs: 2,
   hands: 2,
   saying: "Hello, world!",
   hair: "red"
};
let catWomen = {
   species: "human",
   name: "Belatris",
   gender: "female",
   legs: 2,
   hands: 2,
   saying: cat.saying,
   hair: "brown"

};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,"div") to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print("ABC");
   print("<strong>ABC</strong>");
   print("<strong>ABC</strong>", "div");

   print("human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny");
   print("human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny");
   print("human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny", "div");
   */


print(dog.species + ';' + dog.name + ';' + dog.gender + ';' + dog.legs + ';' + dog.hands + ';' + dog.saying, 'div');

print(cat.species + ';' + cat.name + ';' + cat.gender + ';' + cat.legs + ';' + cat.hands + ';' + cat.saying, 'div');

print(man.species + ';' + man.name + ';' + man.gender + ';' + man.legs + ';' + man.hands + ';' + man.saying, 'div');

print(woman.species + ';' + woman.name + ';' + woman.gender + ';' + woman.legs + ';' + woman.hands + ';' + woman.saying, 'div');

print(catWomen.species + ';' + catWomen.name + ';' + catWomen.gender + ';' + catWomen.legs + ';' + catWomen.hands + ';' + catWomen.saying, 'div');
