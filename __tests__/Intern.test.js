const Intern = require('../lib/Intern');

// self-note Intern has 4 properties (name, id, email, school) & 2 additional methods getSchool() getRole()

test('add intern to object', () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.school).toEqual(expect.any(String));
});

test("obtain intern's school", () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('return getRole() to intern', () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.getRole()).toEqual('Intern');
});