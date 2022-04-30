class Employee {
  constructor(name, employeeId, employeeEmail) {
    this.name = name;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.employeeId;
  }

  getEmail() {
    return this.employeeEmail;
  }

  getRole() {
      return 'Employee'
  }
}

module.exports = Employee;