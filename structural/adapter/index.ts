import { Console } from "console";

class Target {
  public request(): string {
    return 'Target: The defaul target\'s behavior.';
  }
}

class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

const target = new Target();
console.log('Client: I can work just fine with the Target objects:');
clientCode(target);
console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface.');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');

console.log('Client: But I can work with Adaptee via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);


