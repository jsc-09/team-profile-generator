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

test('Employee returns name when getName is called', () => {
    const name = 'Dane';
    const e = new Employee(name);
    expect(e.getName()).toBe(name)
})
