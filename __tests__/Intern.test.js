// using intern constructor
const Intern = require('../lib/Intern');

// creates intern object
test('add intern to object', () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.school).toEqual(expect.any(String));
});

// get school from getSchool()
test("obtain intern's school", () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// get role from getRole()
test('return getRole() to intern', () => {
    const intern = new Intern('Joseph the follower', 8426, 'JTG37@domain.com', 'Harvard');

    expect(intern.getRole()).toEqual('Intern');
});