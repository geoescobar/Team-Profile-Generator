const Manager = require("../lib/manager");

describe("managerName", () => {
  it("should return back manager name", () => {
    const manager = new Manager("George");

    expect(manager.name).toEqual("George");
  });
});

describe("getRole", () => {
  it("should return back manager as role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
  });
});

describe("managerId", () => {
  it("should return back manager Id", () => {
    const manager = new Manager("George", "1000");

    expect(manager.employeeId).toEqual("1000");
  });
});

describe("managerEmail", () => {
  it("should return back manager Email", () => {
    const manager = new Manager("George", "1000", "geo.escobar214@gmail.com");

    expect(manager.employeeEmail).toEqual("geo.escobar214@gmail.com");
  });
});

describe("managerGit", () => {
  it("should return back manager Office Number", () => {
    const manager = new Manager(
      "George",
      "1000",
      "geo.escobar214@gmail.com",
      "150"
    );

    expect(manager.officeNum).toEqual("150");
  });
});