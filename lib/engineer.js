const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, employeeId, employeeEmail, employeeGit) {
    super(name, employeeId, employeeEmail);
    this.employeeGit = employeeGit;
  }

  getEmployeeGit() {
    return this.employeeGit;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;