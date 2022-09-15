const Engineer = require('../lib/Engineer');

// self-note Engineer has 4 properties (name id, email, github) and 2 additional methods getGithub() & getRole()

test('add engineer to object', () => {
    const engineer = new Engineer('Joseph the builder', 2486, 'JTG71@domain.com', 'jlara65');

    expect(engineer.github).toEqual(expect.any(String));
});

test('return getRole() to engineer', () => {
    const engineer = new Engineer('Joseph the builder', 2486, 'JTG71@domain.com', 'jlara65');
    
    expect(engineer.getRole()).toEqual('Engineer');
});