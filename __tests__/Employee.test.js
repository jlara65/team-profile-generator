const Employee = require('../lib/Employee');

// self-note employee has 3 arguments in the constructor (name, id, email) and 4 Properties getName(),getID(),getEmail(), getRole()

test('add employee to object', () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("obtain employee's name", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("obtain employee's id", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("obtain employee's email", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

/* test("obtain employee's role", () => {
    
})*/