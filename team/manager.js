const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, employeeId, employeeEmail, officeNum) {
    super(name, employeeId, employeeEmail);
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}
