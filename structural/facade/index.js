var Facade = /** @class */ (function () {
    function Facade(subSystem1, subSystem2) {
        if (subSystem1 === void 0) { subSystem1 = null; }
        if (subSystem2 === void 0) { subSystem2 = null; }
        this.subSystem1 = subSystem1 || new Subsystem1();
        this.subSystem2 = subSystem2 || new Subsystem2();
    }
    Facade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.subSystem1.operation1();
        result += this.subSystem2.operation1();
        result += 'Facade orders subsystems perform the action:\n';
        result += this.subSystem1.operationN();
        result += this.subSystem2.operationZ();
        return result;
    };
    return Facade;
}());
var Subsystem1 = /** @class */ (function () {
    function Subsystem1() {
    }
    Subsystem1.prototype.operation1 = function () {
        return 'Subsystem1: Ready!\n';
    };
    Subsystem1.prototype.operationN = function () {
        return 'Subsystem1: Go!\n';
    };
    return Subsystem1;
}());
var Subsystem2 = /** @class */ (function () {
    function Subsystem2() {
    }
    Subsystem2.prototype.operation1 = function () {
        return 'Subsystem2: Ready\n';
    };
    Subsystem2.prototype.operationZ = function () {
        return 'Subsystem2: Go!\n';
    };
    return Subsystem2;
}());
function clientCode(facade) {
    console.log(facade.operation());
}
var subSystem1 = new Subsystem1();
var subSystem2 = new Subsystem2();
var facade = new Facade(subSystem1, subSystem2);
clientCode(facade);
