var ConcreteBuilder1 = /** @class */ (function () {
    // methods (behavior)
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new Product();
    };
    ConcreteBuilder1.prototype.producePartA = function () {
        this.product.parts.push('PartA1');
    };
    ConcreteBuilder1.prototype.producePartB = function () {
        this.product.parts.push('PartB1');
    };
    ConcreteBuilder1.prototype.producePartC = function () {
        this.product.parts.push('PartC1');
    };
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    // methods (behavior)
    Product.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(', ') + "\n");
    };
    return Product;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
