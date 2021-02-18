class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accouting");
  }
  addReport(text: string) {
    this.reports.push(text);
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

// IT department
const it = new ITDepartment("d1", ["Joey"]);
it.describe();
it.addEmployee("Bob");
it.addEmployee("Bobina");
it.printEmployeeInformation();
console.log(it);

// Accounting department
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("something went wrong");
accounting.printReports();
accounting.addEmployee("Fabi");
accounting.addEmployee("Gabi");
accounting.printEmployeeInformation();
console.log(accounting);
