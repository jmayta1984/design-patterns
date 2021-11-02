interface FlyingTransport {
  fly(): void;
}

class Airplane implements FlyingTransport {
  fly(): void {
    console.log('Airplane is flying');
  }
}

class Helicopter implements FlyingTransport {
  fly(): void {
    console.log('Helicopter is flying');
  }
}

class Airport {
  private name: string

  constructor(name: string) {
    this.name = name;
  }

  accept(flyingTransport: FlyingTransport): void {
    flyingTransport.fly();
  }
}

const airport = new Airport('Jorge Chávez');

const helicopter = new Helicopter();
airport.accept(helicopter);

const airplane = new Airplane();
airport.accept(airplane);
