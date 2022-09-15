const checkIfEqual = require('../lib/Employee');

test('creates an test object', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});