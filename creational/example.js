var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.fly = function () {
        console.log('Airplane is flying');
    };
    return Airplane;
}());
var Helicopter = /** @class */ (function () {
    function Helicopter() {
    }
    Helicopter.prototype.fly = function () {
        console.log('Helicopter is flying');
    };
    return Helicopter;
}());
var Airport = /** @class */ (function () {
    function Airport(name) {
        this.name = name;
    }
    Airport.prototype.accept = function (flyingTransport) {
        flyingTransport.fly();
    };
    return Airport;
}());
var airport = new Airport('Jorge Chávez');
var helicopter = new Helicopter();
airport.accept(helicopter);
var airplane = new Airplane();
airport.accept(airplane);
