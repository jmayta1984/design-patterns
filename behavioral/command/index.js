var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: See, I can do simple things like printing (" + this.payload + ")");
    };
    return SimpleCommand;
}());
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(recevier, a, b) {
        this.receiver = recevier;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return ComplexCommand;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (" + a + ")");
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (" + b + ")");
    };
    return Receiver;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    Invoker.prototype.doSomethingImportant = function () {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker: ...doing something really important...');
        console.log('Invoker: Does anyboy want something done before I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute != undefined;
    };
    return Invoker;
}());
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say hello'));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
invoker.doSomethingImportant();
