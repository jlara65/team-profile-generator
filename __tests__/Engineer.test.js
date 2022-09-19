// using employee constructor
const Engineer = require('../lib/Engineer');

// get github from getGithub();
test('add engineer to object', () => {
    const engineer = new Engineer('Joseph the builder', 2486, 'JTG71@domain.com', 'jlara65');

    expect(engineer.github).toEqual(expect.any(String));
});

// get role from getRole()
test('return getRole() to engineer', () => {
    const engineer = new Engineer('Joseph the builder', 2486, 'JTG71@domain.com', 'jlara65');
    
    expect(engineer.getRole()).toEqual('Engineer');
});