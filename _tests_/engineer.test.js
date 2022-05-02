const Engineer = "../lib/engineer";

describe("engineerName", () => {
  it("should return back engineer name", () => {
    const engineer = new Engineer("George");

    expect(engineer.name).toEqual("George");
  });
});

describe("getRole", () => {
  it("should return back employee as role", () => {
    const employee = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
  });
});

describe("engineerId", () => {
  it("should return back engineer Id", () => {
    const engineer = new Engineer("George", "200");

    expect(engineer.employeeId).toEqual("200");
  });
});

describe("engineerEmail", () => {
  it("should return back engineer Email", () => {
    const engineer = new Engineer("George", "200", "geo.escobar214@gmail.com");

    expect(engineer.employeeEmail).toEqual("geo.escobar214@gmail.com");
  });
});

describe("engineerGit", () => {
  it("should return back engineer GitHub", () => {
    const engineer = new Engineer(
      "George",
      "200",
      "geo.escobar214@gmail.com",
      "github.com/geoescobar"
    );

    expect(engineer.employeeGit).toEqual("github.com/geoescobar");
  });
});
