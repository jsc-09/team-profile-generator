const Intern = require('../lib/Intern')

test('Can create an intern school property', () => {
    const school = "school"
    const e = new Intern('Dane', 1, 'test@email.com', school)
    expect(e.school).toBe(school);
}) 
test('Employee returns school when getSchool is called', () => {
    const school = "school";
    const e = new Intern('Dane' , 1, 'test@email.com',school);
    expect(e.getSchool()).toBe(school)
})

test('Employee returns role Intern when getRole is called', () => {
    const role = 'Intern';
    const e = new Intern('Dane',1 , "email", role);
    expect(e.getRole()).toBe(role)
})