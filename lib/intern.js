const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, employeeId, employeeEmail, employeeSchool) {
    super(name, employeeId, employeeEmail);
    this.employeeSchool = employeeSchool;
  }

  getEmployeeSchool() {
    return this.employeeSchool;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;