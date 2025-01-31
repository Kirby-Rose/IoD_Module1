// Try creating a json object variable for a book. The book should have a title, description, author and number of pages

// Try printing these object property values in your console individually and via the whole book object

// Update the description of the book


const book = {
    "title" : "The Snail and the Whale",
    "description" : "Childrens story about a snail travelling the world with a whale",
    "author" : "Julia Donaldson",
    "number of pages" : "24",
}

console.log(book);

book.description = "Whale acts as a taxi and almost dies"

console.log(book);

const library = []

library.push(book)

library.push({
    "title" : "the Gruffalo",
    "description" : "A story of a monster and a mouse",
    "author" : "Julia Donaldson",
    "number of Pages" : "30",
})


console.log(library);