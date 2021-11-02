interface Builder {
  // methods (behavior)
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
  // fields (state)
  private product: Product;

  // methods (behavior)
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public producePartA(): void {
    this.product.parts.push('PartA1')
  }

  public producePartB(): void {
    this.product.parts.push('PartB1')
  }

  public producePartC(): void {
    this.product.parts.push('PartC1')
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product {

ins  // fields (states)
  public parts: string[] = [];

  // methods (behavior)
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`)

  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();

  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:')
  director.buildFeaturedProduct();
  builder.getProduct().listParts();

  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();

}

const director = new Director();
clientCode(director);