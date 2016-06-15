/*
=======================================================

** Week 2 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

EXAMPLE:
1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

// 1. Create an object called "me" that describes you with your name, city, and job title.

var me = {
  name: "Scott",
  city: "Boulder",
  "job title": "Student"

}


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ["Don", "Jean", "Ryan"];

// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city.
console.log(me.city);
console.log(me["city"]);


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
console.log(invitees.adults[0].dinnerChoice[1]);
// 5. Access Pablo's table number.
console.log(invitees.children[1].table);
// 6. Access Lauren's seating specialConsideration.
console.log(invitees.adults[2].specialConsiderations.seating);
// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
console.log(invitees.adults[1].dinnerChoice[2]);
// 8. Access Ada's allergies.
console.log(invitees.children[2].allergies[0]);
// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
// var laurensApp = invitees.adults[0].dinnerChoice[1];
// var laurensDinner = invitees.adults[0].dinnerChoice[1];
// var laurensDesert = invitees.adults[0].dinnerChoice[1];
// var laurensOrder = "Lauren's appetizer is " + laurensApp "". She will be eating ______ for dinner
// // and has selected ________ as her dessert."
// console.log("Lauren's appetizer is " + invitees.adults[0].dinnerChoice[1]]. She will be eating ______ for dinner
// and has selected ________ as her dessert.")
// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object();

console.log('jsWorkshop = ', jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ['Mark', 'Matt', 'Courtney', 'Maria', 'Scott'];

// 12. Get the length of the fourth classmate's name.

console.log(jsWorkshop.classmates[3].length);

// 13. Clear the classmates value.
delete jsWorkshop.classmate;

// ADVANCED TRACK
// 14. Create an empty array called "books".
var books = [];

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.


var books = [ISBN1452138915 = {
  title: "You Need More Sleep: Advice from Cats",
  author: "Francesco Marciuliano",
  pages: 112
},
ISBN0062736302 = {
  title: "Felinestein: Pampering the Genius in Your Cat",
  author: "Cindy Ribarich & Suzanne Delzio",
  pages: 176
},
ISBN1452110581 = {
  title: "I Could Pee on This: And Other Poems by Cats",
  author: "Francesco Marciuliano",
  pages: 112,
}
];

// 16. Access the author of the first book.
var auth1 = books[0].author;
console.log(auth1);
// 17. Get the length of the author the the third book.
var length3 = books[2].author.length;
console.log(length3);
// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

ISBN1452138915.dateRead = "2016";
ISBN0062736302.dateRead = "2016";
ISBN1452110581.dateRead = "2016";

var dateRead1 = books[0].dateRead;
console.log(dateRead1);

// 19. Remove the second book from the books Array.

books.splice(1, 1);
console.log(books);

// 20. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
// Literal would be used for an object that is static and would not be changed.
// Constructor would be used for an object that is dynamic and would be changed.
