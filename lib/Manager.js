// importing employee constructor
const Employee = require('./Employee');

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }
    
    getRole() {
        return 'Manager'
    }
};

module.exports = Manager;