const Employee = require('./Employee');
class Manger extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    /*getOfficeNumber() { // umm not on acceptance criteria
        return this.officeNumber;
    }*/ 
    
    getRole() {
        return 'Manager'
    }
};

module.exports = Manger;