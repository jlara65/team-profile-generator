const Manager = require('../lib/Manager');

// self-note Manager constructor (name, id, email, officeNumber) and 2 additional methods getOffice() and getRole()

test('add manager to object', () => {
    const manager = new Manager('Joseph the Conqueror', 7852, 'JTC44@domain.com', 305);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('return getRole() to manager', () => {
    const manager = new Manager('Joseph the Conqueror', 7852, 'JTC44@domain.com', 305);
    expect(manager.getRole()).toEqual('Manager');
});