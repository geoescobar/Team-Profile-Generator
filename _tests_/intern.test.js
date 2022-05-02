const intern = "../lib/intern";

describe("internName", () => {
  it("should return back intern name", () => {
    const intern = new Intern("George");

    expect(intern.name).toEqual("George");
  });
});

describe("getRole", () => {
  it("should return back employee as role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
  });
});

describe("internId", () => {
  it("should return back intern Id", () => {
    const intern = new Intern("George", "300");

    expect(intern.employeeId).toEqual("300");
  });
});

describe("internEmail", () => {
  it("should return back intern Email", () => {
    const intern = new Intern("George", "300", "geo.escobar214@gmail.com");

    expect(intern.employeeEmail).toEqual("geo.escobar214@gmail.com");
  });
});

describe("internSchool", () => {
  it("should return back Intern school", () => {
    const intern = new Intern(
      "George",
      "200",
      "geo.escobar214@gmail.com",
      "SMU"
    );

    expect(intern.employeeSchool).toEqual("SMU");
  });
});