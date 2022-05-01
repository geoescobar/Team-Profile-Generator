const Employee = require('../lib/employee')

describe('getName', () => {
    it('should return back employee name', () => {
        const employee = new Employee('George');
    
    expect(employee.name).toEqual('George');
    expect(employee.getName()).toEqual('George')
    })
});

describe('getId', () => {
    it('should return back employee Id', () => {
        const employee = new Employee('George', '100');
    
    expect(employee.employeeId).toEqual('100');
    expect(employee.getId()).toEqual('100')
    })
});

describe('getEmail', () => {
    it('should return back employee email', () => {
        const employee = new Employee('George', '100', 'geo.escobar214@gmail.com');
    
    expect(employee.employeeEmail).toEqual('geo.escobar214@gmail.com');
    expect(employee.getEmail()).toEqual('geo.escobar214@gmail.com')
    })
});

describe('getRole', () => {
    it('should return back employee as role', () => {
        const employee = new Employee
    
    expect(employee.getRole()).toEqual('Employee')
    })
})
