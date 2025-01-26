    let myName: string = "bob" //this is how typescript understands how to access the data types.. 
    let numberOfWheels: number = 4 
    let isStudent: boolean = false 

type Address = {
    street: string
    city: string 
    country: string 
}
type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

    let person1: Person = {
        name: "Gharsa", 
        age: 26, 
        isStudent: false, 
        address: {
            street: "Mary",
            city: "Oshawa",
            country: "Canada",
        }

    }

    let person2: Person = {
        name: "secondPerson", 
        age: 28, 
        isStudent: true, 
        address : {
            street: "Mary",
            city: "oshawa",
            country: "Canada",
        }
    }

    type Pizza = {
        name: string 
        price: number 

    }