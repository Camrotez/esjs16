// Class definition
class person{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
        
    }
};

const developer = new person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
