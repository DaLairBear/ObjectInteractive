let person = {
    firstName: 'Laramie',
    lastName: 'Downs',
    age: 27
}

// console.log(person.firstName)
// console.log(person['firstName'])

let meal = {
    appetizer: 'Garlic Bread',
    entree: 'Parmesan Crusted Chicken Pesto Pasta',
    dessert: 'Tiramisu',
    drink: 'White Wine'
}

// let {dessert} = meal;

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myAppetizer, myEntree, myDessert, myDrink)
// console.log(meal)


for(let key in person){
    // console.log(key) //property/key
    // console.log(person[key]) //value at that key
}

person.job = 'Python Developer'
person.age = 28

person['car'] = '2SS Comaro'
//console.log(person)
delete person.car
//console.log(person)


class Dog{
    constructor (dogName, dogBread, dogAge){
        this.name = dogName
        this.breed = dogBread
        this.age = dogAge
        this.favoriteToys = []
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
    
    addToy(toy){
        this.favoriteToys.push(toy)
    }
}

class Puppy extends Dog{
    constructor(dogName, dogBread, dogAge, trainingLevel){
        super(dogName, dogBread, dogAge)

        this.trainingLevel = trainingLevel
        this.isShedding = false
    }
    
    levelUp(num){
        this.trainingLevel += num
    }
    
    toggleShedding(){
        this.isShedding = !this.isShedding
    }
    
    addToy(toy){
        super.addToy(toy)
        console.log(this.favoriteToys)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)

let beethoven = new Dog('Beethove', 'St. Bernard', 12)

// console.log(lassie)
// console.log(beethoven)
// lassie.greeting()

let chief = new Puppy('Chief', 'Husky', 1, 0)
// console.log(chief)

// chief.levelUp(5)
// console.log(chief)
chief.addToy('bone')