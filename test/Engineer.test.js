const Engineer = require('../lib/Engineer')

test('Can create an employee github property', () => {
    const github = "github address"
    const e = new Engineer('Dane', 1, 'test@email.com', github)
    expect(e.github).toBe(github);
}) 

test('Employee returns github when getGithub is called', () => {
    const github = 'github address';
    const e = new Engineer('Dane' , 1, 'test@email.com',github);
    expect(e.getGithub()).toBe(github)
})

test('Employee returns role Engineer when getRole is called', () => {
    const role = 'Engineer';
    const e = new Engineer('Dane',1 , "email", role);
    expect(e.getRole()).toBe(role)
})