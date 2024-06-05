// STEP 1
class Cat {
    constructor() {
        console.log("Cat has been created")
    }
}
const Dog = class {
    constructor() {
        console.log("Dog has been created")
    }
}

// STEP 2
const myCat = new Cat()
const myDog = new Dog()

// STEP 3
class Animal {
    constructor() {
        this.message = "The Animal has been created"
    }

    displayMessage() {
        console.log(this.message)
    }
}

const myAnimal = new Animal()
myAnimal.displayMessage()


// STEP 4
class AnimalWithMessage {
    constructor(message) {
        this.message = message
    }

    displayMessage() {
        console.log(this.message)
    }
}
const myAnimalWithMessage = new AnimalWithMessage("A new animal is here!")
myAnimalWithMessage.displayMessage()

// STEP 5

class DetailedAnimal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}
const myDetailedAnimal = new DetailedAnimal("Dog", "Labrador", "Black", "60cm", "100cm")

// STEP 6
for (let property in myDetailedAnimal) {
    console.log(`${property}: ${myDetailedAnimal[property]}`)
}

// STEP 7
class SpeakingAnimal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }

    speak() {
        if (this.type.toLowerCase() === "dog") {
            console.log(`The ${this.color} dog is barking!`)
        } else if (this.type.toLowerCase() === "cat") {
            console.log(`The ${this.color} cat is meowing!`)
        }
    }
}

const mySpeakingAnimal = new SpeakingAnimal("Dog", "Labrador", "Black", "60cm", "100cm")
mySpeakingAnimal.speak()

// STEP 8
class PrivateAnimal {
    #type
    #breed
    #color
    #height
    #length

    constructor(type, breed, color, height, length) {
        this.#type = type
        this.#breed = breed
        this.#color = color
        this.#height = height
        this.#length = length
    }

    #checkType() {
        return this.#type.toLowerCase() === "dog" ? "dog" : "cat"
    }

    speak() {
        const animalType = this.#checkType()
        console.log(`The ${animalType} has made a noise!`)
    }
}

const myPrivateAnimal = new PrivateAnimal("Cat", "Siamese", "White", "30cm", "50cm")
myPrivateAnimal.speak()

// STEP 9

String.prototype.findWords = function(word) {
    const regex = new RegExp(word, "gi")
    const matches = this.match(regex)
    const count = matches ? matches.length : 0
    alert(`The word "${word}" was found ${count} times in the paragraph.`)
};

const paragraph = "The cat is on the roof. The cat is playing with a ball. The cat is sleeping."
paragraph.findWords("cat")