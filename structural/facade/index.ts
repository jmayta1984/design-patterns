class Facade {
  protected subSystem1: Subsystem1;
  protected subSystem2: Subsystem2;

  constructor(subSystem1: Subsystem1 = null, subSystem2: Subsystem2 = null) {
    this.subSystem1 = subSystem1 || new Subsystem1();
    this.subSystem2 = subSystem2 || new Subsystem2();
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subSystem1.operation1();
    result += this.subSystem2.operation1();
    result += 'Facade orders subsystems perform the action:\n';
    result += this.subSystem1.operationN();
    result += this.subSystem2.operationZ();

    return result;
  }
}

class Subsystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!\n';
  }

  public operationN(): string {
    return 'Subsystem1: Go!\n';
  }
}

class Subsystem2 {
  public operation1(): string {
    return 'Subsystem2: Ready\n';
  }

  public operationZ(): string {
    return 'Subsystem2: Go!\n';
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subSystem1 = new Subsystem1();
const subSystem2 = new Subsystem2();

const facade = new Facade(subSystem1, subSystem2);

clientCode(facade);

