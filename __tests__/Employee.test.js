// using employee constructor
const Employee = require('../lib/Employee');

// creates employee object
test('add employee to object', () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name from getName()
test("obtain employee's name", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get id from getId()
test("obtain employee's id", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email from getEmail()
test("obtain employee's email", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// get role from getRole()
test("return getRole() to employee", () => {
    const employee = new Employee('Joseph the Great', 3725, 'JTG55@domain.com');

    expect(employee.getRole()).toEqual('Employee');
});