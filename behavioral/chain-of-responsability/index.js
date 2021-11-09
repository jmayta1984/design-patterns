var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var MonkeyHandler = /** @class */ (function (_super) {
    __extends(MonkeyHandler, _super);
    function MonkeyHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonkeyHandler.prototype.handle = function (request) {
        if (request == 'Banana') {
            return "Monkey: I'll eat the " + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return MonkeyHandler;
}(AbstractHandler));
var SquirrelHandler = /** @class */ (function (_super) {
    __extends(SquirrelHandler, _super);
    function SquirrelHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquirrelHandler.prototype.handle = function (request) {
        if (request == 'Nut') {
            return "Squirrel: I'll eat the " + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return SquirrelHandler;
}(AbstractHandler));
var DogHandler = /** @class */ (function (_super) {
    __extends(DogHandler, _super);
    function DogHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogHandler.prototype.handle = function (request) {
        if (request == 'MeatBall') {
            return "Dog: I'll eat the " + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return DogHandler;
}(AbstractHandler));
function clientCode(handler) {
    var requests = ['Nut', 'Banana', 'Cup of coffee'];
    for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
        var request = requests_1[_i];
        console.log("Client: Who wants a " + request);
        var result = handler.handle(request);
        if (result) {
            console.log(" " + result);
        }
        else {
            console.log(" " + request + " was left untouched.");
        }
    }
}
var monkey = new MonkeyHandler();
var squirrel = new SquirrelHandler();
var dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);
console.log("Chain: Monkey > Squirrel > Dog\n");
clientCode(monkey);
console.log('');
console.log('Chain: Squirrel > Dog\n');
clientCode(squirrel);
