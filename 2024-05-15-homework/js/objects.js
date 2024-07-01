let firstName='Yocheved'

const student1 = {
    firstName: 'Johnny',
    lastName: 'Depp',
    grades: [73, 80, 95, 66, 78],
    showFullName: function(reverse) { // if true 'Depp, Johnny', if false 'Johnny Depp'

/*         if (reverse) {
            console.log(`${this.LastName}, ${this.firstName}`)
        } else {
            console.log(`${this.firstName} ${this.lastName}`)
        }
 */     
        this.fullName = reverse 
            ? `${this.lastName}, ${this.firstName}`
            : `${this.firstName} ${this.lastName}`

        console.log(this.fullName)

    },
    showFirstName: function() {
        console.log(firstName) // Yocheved
    }
}

const student2 = {
    firstName: 'Tom',
    lastName: 'Cruise',
    grades: [83, 85, 97, 90, 88],
    showFullName: function(reverse) { 
     
        reverse 
            ? console.log(`${this.lastName}, ${this.firstName}`)
            : console.log(`${this.firstName} ${this.lastName}`)

    },
    calcAverage: function() {

        this.sum = this.grades.reduce((total,grade) => {
            total += grade
        },0)

        /* (0, 83), return 83,
           (83, 85), return 168,
           (168, 97), return 265,
            (265, 90), return 355,
            (355, 88), return 443 */

        //(83+85+97+90+88)/5
        // 83/5 + 85/5 + 97/5 + 90/5 + 88/5
        //this.average = this.grades.reduce((avg,grade,idx,ar) => {
        //this.average = this.grades.reduce((avg,grade,_,ar) => avg + grade/ar.length,0)
        this.average = this.grades.reduce((sum,grade) => sum + grade,0)/this.grades.length; 
    }
}

const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

const student3 = {
    firstName: 'Mila',
    lastName: 'Kunis',
    grades: [83, 88, 97, 90, 97],
    showFullName: (reverse) => { 
     
        reverse 
            ? console.log(`${this.lastName}, ${this.firstName}`)
            : console.log(`${this.firstName} ${this.lastName}`)

    }
}

const student4 = {
    firstName: 'Jennifer',
    lastName: 'Lopez',
    grades: [83, 88, 97, 90, 97],   
}

// show student1's grades:
console.log(student1.grades)

// call student1's showFullName method:
student1.showFullName(false)

function multiplyBy5(num) {

    console.log(num * 5)

}

multiplyBy5(40) // 200

function calc(action, n1, n2) {

    switch (action) {
        case '+':
            console.log(n1 + n2)
            break
        case '-':
            console.log(n1 - n2)
            break
        default: 
            console.log('unknown action')
    }

}

calc('+',50, 70)

function showFullName(reverse,firstName, lastName) { // if true 'Depp, Johnny', if false 'Johnny Depp'

 
            reverse 
                ? console.log(`${lastName}, ${firstName}`)
                : console.log(`${firstName} ${lastName}`)
    
}

student2.showFullName(false) // Tom Cruise

student3.showFullName(true) // undefined, undefined, because student3.showFullName
                            // is an arrow function and it's "this" is "window"

student4.eyeColor = 'hazel'

student4.showFullName = function (reverse) { 
     
    reverse 
        ? console.log(`${this.lastName}, ${this.firstName}`)
        : console.log(`${this.firstName} ${this.lastName}`)

}

student4.showFullName(true)

student1.hair = 'black';

/** MISSION:
 * 
 * 1. For student2 inside the definition of student2
 *    create new method calcAverage, that calculates average
 *    and creates new property "average"
 * 
 * 2. For student3 create calcAverage method outside of the definition
 * 
 */

/** PROTOTYPE */

class Furniture {

    constructor() {
        this.name = 'chair';
    }

    color = '#000000';
    fabric = 'velvet';

}

// Furniture() - constructor of the class Furniture
// operator new - 1. gets space in the MEMORY
//                2. points "this" there
//                3. calls the Furniture() constructor
//       
const chair1 =  new Furniture();

class Student {

    constructor(firstName, lastName, hair) {

        this.firstName = firstName
        this.lastName = lastName
        this.hair = hair

    }

    showFullName() {
        this.fullName = this.firstName + ' ' + this.lastName;
        console.log(this.fullName);
    }
}

const currDate = new Date();
const yesterday = new Date('2024-04-17');

let currYear = currDate.getFullYear();
let currWeeekDay = currDate.getDay();





