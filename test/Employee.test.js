const Employee = require('../lib/Employee')

test('Can create an employee object', () => {
    const e = new Employee()
    expect (typeof(e)).toBe('object');
}) 

test('Can create an employee name property', () => {
    const name = "Dane"
    const e = new Employee(name)
    expect(e.name).toBe(name);
}) 

test('Can create id property', () => {
    const id = 1;
    const e = new Employee('Dane', id)
    expect(e.id).toBe(id);
}) 

test('Can create email property', () => {
    const email = 'test@email.com';
    const e = new Employee('Dane', 1 , email)
    expect(e.email).toBe(email);
})

test('Employee returns name when getName is called', () => {
    const name = 'Dane';
    const e = new Employee(name);
    expect(e.getName()).toBe(name)
})

test('Employee returns id when getId is called', () => {
    const id = 1;
    const e = new Employee('Dane',id);
    expect(e.getId()).toBe(id)
})

test('Employee returns email when getEmail is called', () => {
    const email = 'test@email.com';
    const e = new Employee('Dane', 1 , email);
    expect(e.getEmail()).toBe(email)
})

test('Employee returns role when getRole is called', () => {
    const role = 'Employee';
    const e = new Employee('Dane',1 , "email", role);
    expect(e.getRole()).toBe(role)
})
