/*
    Basic Type
*/ 

let car =  "Toyota"
let bike: string
bike = "Winner"
// bike = 150 loi ngay

// number
let num = 10

// boolean
let isLoading: boolean = false

// undefiend
let body:undefined = undefined

// null
let footer:null

// any
let person: any
person = 10
person = 'Something'
person = false

/*
    Object
*/ 

// let house = {}
// house.address = 'Da Nang'

let house: {
    address: string
    color?: string
} = {
    address: '',
    // color: ''
}
house.address = 'Da Nang'

/*
    Array
*/ 
let products: any[] = []
products.push(1)
products.push('vietnam')

// string[]
let names = ['Alex', 'Ben']
let addresses: string[] = []
// addresses.push(123)
addresses.push('Da nang')

// number []
let numbers: number[] = []
// numbers = [1,2,3, '4']
numbers = [1,2,3]

// object array
let people : {
    name: string
    age: number
}[] = []
people.push({
    name: 'Ducky',
    age: 27
})

/*
    Function
*/ 
const sum = (num1: number , num2: number): number => {
    return num1 + num2
}
// sum(1, '2')
sum(1, 2)

const sub: (num1: number, num2: number) => number = (num1: number, num2: number) => num1 - num2

const handle = ():void => {
    console.log(123)
}

/*
    Union
*/ 
let price: string | number
price = '10'
price = 20
// price = false

let body2: {name: string | number} | {firstName: string} = {
    name: 100,
    firstName: 'Cloly'
}

/*
    Enum
*/ 
enum Sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

let size = Sizes.S

/*
    Interface
*/ 
// interface State {
//     name: string
//     isLoading: boolean
// }

// interface State {
//     age: number
// }

// interface khong gop dc
// interface Name = {
//     name: string
// }

// interface Age = {
//     age: number
// }

// interface Person = Name & Age loi

// let state: State = {
//     name: 'Cloly',
//     isLoading: false,
//     age: 100
// }

/*
    Type
*/ 
type State = {
    name: string
    isLoading: boolean
}

// type State = {
//     age: number
// } loi
type Name = {
    name: string
}

type Age = {
    age: number
}

type Person = Name & Age
// type Person = Name | Age interface khong the lam nhu nay ( khong the gop )


let state: State = {
    name: 'Cloly',
    isLoading: false
}

const handleClick = <Type>(value: Type) => value

let value = 100
handleClick<number>(3)
// handleClick<string>(value) loi

/*
    Class
*/ 
class Person2 {
    public name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const alex = new Person2('Alex', 27)
alex.name


// loi khi dung private thi khong the goi o ngoai se loi
class Person3 {
    private name2: string
    age2: number
    readonly money: number = 40 
    // readonly chi duoc doc va gan khong the thay doi

    constructor(name2: string, age2: number) {
        this.name2 = name2
        this.age2 = age2
    }

    handle() {
        this.name2
        // this.money = 100 loi
    }
}
const alex2 = new Person2('Alex', 27)
// alex2.name2 loi

// cu phap rut gon
class Person4 {
    constructor(public name4: string, public age4: number) {

    }
}