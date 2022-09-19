// using manager constructor
const Manager = require('../lib/Manager');

// get office number from officeNumber()
test('add manager to object', () => {
    const manager = new Manager('Joseph the Conqueror', 7852, 'JTC44@domain.com', 305);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('return getRole() to manager', () => {
    const manager = new Manager('Joseph the Conqueror', 7852, 'JTC44@domain.com', 305);
    expect(manager.getRole()).toEqual('Manager');
});