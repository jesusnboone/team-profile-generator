const Employee = require('../lib/Employee');

test('establishes valid employee information criteria', () => {
    const employee = new Employee('Jesus', 10, 'jesusnboone@gmail.com');
    expect(employee.name).toEqual(expect.any(String))
});