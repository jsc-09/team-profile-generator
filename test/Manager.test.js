const Employee = require('../lib/Manager')

test('Can create officeNumber property', () => {
    const officeNumber = 123456789;
    const e = new Employee('Dane', 1 ,"email", officeNumber)
    expect(e.officeNumber).toBe(officeNumber);
})

test('Employee returns office number when getOfficeNumber is called', () => {
    const officeNumber = 123456789;
    const e = new Employee('Dane', 1 ,"test@email.com", officeNumber)
    expect(e.getOfficeNumber()).toBe(officeNumber)
})

test('Employee returns role Manager when getRole is called', () => {
    const role = 'Manager';
    const e = new Employee('Dane',1 , "email", role);
    expect(e.getRole()).toBe(role)
})
