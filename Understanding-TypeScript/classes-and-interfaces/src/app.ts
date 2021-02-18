abstract class Department {
  static fiscalYear = 2021;
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
    this.lastReport = reports[0];
  }
  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  // add our won add employee method -> override
  addEmployee(name: string) {
    if (name === "Fabi") {
      return;
    } else {
      this.employees.push(name);
    }
  }
}
const employee1 = Department.createEmployee("Fabiola");
console.log(employee1, Department.fiscalYear);
// IT department
const it = new ITDepartment("d1", ["Joey"]);
it.describe();
it.addEmployee("Bob");
it.addEmployee("Bobina");
it.printEmployeeInformation();
console.log(it);

// Accounting department
const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("something went wrong");
// accounting.printReports();
accounting.describe();
accounting.addEmployee("Fabi");
accounting.addEmployee("Gabi");
// accounting.printEmployeeInformation();
console.log(accounting);
console.log(accounting.mostRecentReport);
